/**
 * API de conversão - Meta Pixel + Conversions API (CAPI)
 *
 * Pixel (navegador):
 * - .env: VITE_META_PIXEL_ID=123456789
 * - ou siteConfig.metaPixelId
 *
 * Conversions API (servidor - token NUNCA no frontend):
 * - Backend envia eventos com o Access Token em variável de ambiente.
 * - Endpoint do seu backend: VITE_CAPI_ENDPOINT (ex: https://seusite.com/api/conversion)
 */

import { siteConfig } from "@/config/siteConfig";

declare global {
  interface Window {
    fbq?: (
      action: "track" | "init" | "trackCustom",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

let pixelInitialized = false;

/**
 * URL do endpoint que encaminha eventos para a CAPI.
 * Se não estiver definido, usa a mesma origem (ex.: em deploy na Vercel = /api/conversion no mesmo domínio).
 */
function getCapiEndpoint(): string | null {
  const fromEnv = import.meta.env.VITE_CAPI_ENDPOINT;
  if (fromEnv && typeof fromEnv === "string") return fromEnv;
  if (siteConfig.capiEndpoint) return siteConfig.capiEndpoint;
  if (typeof window !== "undefined") return `${window.location.origin}/api/conversion`;
  return null;
}

/**
 * Retorna o Pixel ID (env tem prioridade sobre config)
 */
export function getMetaPixelId(): string | null {
  const fromEnv = import.meta.env.VITE_META_PIXEL_ID;
  if (fromEnv && typeof fromEnv === "string") return fromEnv;
  return siteConfig.metaPixelId ?? null;
}

/**
 * Inicializa o Meta Pixel. Chamar uma vez no carregamento do app.
 */
export function initMetaPixel(): void {
  if (typeof window === "undefined" || pixelInitialized) return;

  const pixelId = getMetaPixelId();
  if (!pixelId) return;

  const w = window;
  const f = w;
  const b = document;
  const e = "script";
  const v = "https://connect.facebook.net/en_US/fbevents.js";

  if (f.fbq) return;
  const n = (f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments as unknown as unknown[]) : n.queue.push(arguments);
  }) as typeof w.fbq & { queue: unknown[] };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];

  const t = b.createElement(e);
  t.async = true;
  t.src = v;
  const s = b.getElementsByTagName(e)[0];
  s?.parentNode?.insertBefore(t, s);

  w.fbq("init", pixelId);
  w.fbq("track", "PageView");
  pixelInitialized = true;
}

/**
 * Gera um event_id único para deduplicação Pixel + CAPI.
 */
function generateEventId(): string {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

/**
 * Envia o evento para a Conversions API via seu backend (token fica só no servidor).
 */
function sendToCapi(
  eventId: string,
  eventName: string,
  eventSourceUrl: string,
  customData?: Record<string, string | number>
): void {
  const endpoint = getCapiEndpoint();
  if (!endpoint) return;

  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: eventSourceUrl,
      custom_data: customData ?? {},
    }),
    keepalive: true, // permite o request completar mesmo se o usuário sair
  }).catch(() => {
    // falha silenciosa; o Pixel já registrou
  });
}

/**
 * Dispara um evento de conversão:
 * - Meta Pixel (navegador), com eventID para deduplicação
 * - Conversions API (via seu backend), se VITE_CAPI_ENDPOINT estiver configurado
 */
export function trackConversion(
  eventName: "Lead" | "Contact" | "ViewContent" | "InitiateCheckout" | string,
  params?: Record<string, string | number>
): void {
  if (typeof window === "undefined") return;

  const eventId = generateEventId();
  const eventSourceUrl = window.location.href;
  const pixelParams = { ...params, eventID: eventId };

  if (window.fbq) {
    window.fbq("track", eventName, pixelParams);
  }

  sendToCapi(eventId, eventName, eventSourceUrl, params);
}
