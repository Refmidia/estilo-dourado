/**
 * Endpoint serverless para a Meta Conversions API (CAPI).
 * O Access Token fica APENAS aqui (variável de ambiente), nunca no frontend.
 *
 * Variáveis de ambiente (no painel da Vercel ou no .env do servidor):
 * - META_CAPI_ACCESS_TOKEN  (obrigatório para CAPI)
 * - META_PIXEL_ID          (obrigatório; pode ser o mesmo do frontend)
 *
 * O frontend envia POST com: event_name, event_id, event_source_url, custom_data.
 * Este endpoint adiciona event_time e user_data (IP, user-agent) e envia para o Meta.
 *
 * Deploy: Vercel (pasta /api vira serverless). Para testar local: npx vercel dev
 */

const META_GRAPH_URL = "https://graph.facebook.com/v21.0";

type ConversionBody = {
  event_name: string;
  event_id: string;
  event_source_url: string;
  custom_data?: Record<string, string | number>;
};

type VercelRequest = { method?: string; body?: ConversionBody; headers?: Record<string, string | string[] | undefined> };
type VercelResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => { json: (body: object) => void };
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const token = process.env.META_CAPI_ACCESS_TOKEN;
  const pixelId = process.env.META_PIXEL_ID;

  if (!token || !pixelId) {
    return res.status(503).json({
      error: "Conversions API not configured",
      hint: "Set META_CAPI_ACCESS_TOKEN and META_PIXEL_ID in environment",
    });
  }

  const body = req.body as ConversionBody;
  const { event_name, event_id, event_source_url, custom_data } = body;

  if (!event_name || !event_id || !event_source_url) {
    return res.status(400).json({
      error: "Missing required fields: event_name, event_id, event_source_url",
    });
  }

  const clientIp =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    (req.headers["x-real-ip"] as string) ||
    "";
  const clientUserAgent = (req.headers["user-agent"] as string) || "";

  const payload = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        event_source_url,
        user_data: {
          client_ip_address: clientIp,
          client_user_agent: clientUserAgent,
        },
        custom_data: custom_data ?? {},
      },
    ],
  };

  const url = `${META_GRAPH_URL}/${pixelId}/events?access_token=${encodeURIComponent(token)}`;

  try {
    const metaRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await metaRes.json().catch(() => ({}));

    if (!metaRes.ok) {
      console.error("[CAPI] Meta API error:", metaRes.status, data);
      return res.status(502).json({
        error: "Meta API error",
        details: data.error?.message ?? metaRes.statusText,
      });
    }

    return res.status(200).json({ success: true, events_received: data.events_received });
  } catch (err) {
    console.error("[CAPI] Request failed:", err);
    return res.status(502).json({ error: "Failed to send event to Meta" });
  }
}
