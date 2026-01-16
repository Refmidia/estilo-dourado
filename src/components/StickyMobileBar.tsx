import { MessageCircle, Zap } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 safe-bottom">
      <div className="flex gap-3">
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-outline flex-1 py-3 flex items-center justify-center gap-2 text-sm"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a
          href="#oferta"
          className="btn-gold flex-1 py-3 flex items-center justify-center gap-2 text-sm"
        >
          <Zap size={18} />
          Inscreva-se
        </a>
      </div>
    </div>
  );
}
