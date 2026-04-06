import { CalendarClock, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { trackConversion } from "@/lib/conversion";

const serviceHighlights = [
  "Atendimento com profissionais brasileiros",
  "Cortes modernos e clássicos",
  "Atendimento profissional e personalizado",
  "Confirmação rápida por mensagem",
];

const schedulingSteps = [
  "Toque em um dos botões abaixo.",
  "Envie seu nome e o melhor horário.",
  "Receba a confirmação do seu agendamento.",
];

export default function Agendamentos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-6 sm:py-10 max-w-md">
        <section className="border border-border rounded-2xl p-5 sm:p-6 section-darker">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
            <CalendarClock size={14} />
            Agendamentos
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
            Agende seu corte de cabelo
          </h1>

          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Escolha o canal que preferir para fazer seu agendamento.
          </p>

          <div className="mt-5 space-y-2">
            {serviceHighlights.map((item) => (
              <p key={item} className="text-sm text-foreground">
                - {item}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-4 border border-border rounded-2xl p-4 sm:p-5 bg-card">
          <h2 className="text-lg font-semibold">Como funciona</h2>
          <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
            {schedulingSteps.map((step, index) => (
              <li key={step}>
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-6 space-y-3">
          <a
            href={siteConfig.whatsappSchedulingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full py-4 text-base flex items-center justify-center gap-2"
            onClick={() =>
              trackConversion("Contact", {
                content_name: "Agendamento - WhatsApp",
              })
            }
          >
            <MessageCircle size={20} />
            Agendar via WhatsApp
          </a>

          <a
            href={siteConfig.lineLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline w-full py-4 text-base flex items-center justify-center gap-2"
            onClick={() =>
              trackConversion("Contact", {
                content_name: "Agendamento - LINE",
              })
            }
          >
            <Send size={20} />
            Agendar via LINE
          </a>
        </section>
      </main>
    </div>
  );
}
