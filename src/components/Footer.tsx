import { MessageCircle, Instagram } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useTranslation } from "@/hooks/useTranslation";

const navItems = [
  { key: "nav.home" as const, href: "#inicio" },
  { key: "nav.modules" as const, href: "#modulos" },
  { key: "nav.bonuses" as const, href: "#bonus" },
  { key: "nav.professor" as const, href: "#professor" },
  { key: "nav.testimonials" as const, href: "#depoimentos" },
  { key: "nav.offer" as const, href: "#oferta" },
  { key: "nav.faq" as const, href: "#faq" },
];

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="py-8 sm:py-10 md:py-12 section-dark border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-gold-gradient mb-3 sm:mb-4">
              {siteConfig.schoolName}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {siteConfig.schoolTagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Navegação</h4>
            <nav className="grid grid-cols-2 gap-1.5 sm:gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contato</h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                WhatsApp
              </a>
              <a
                href={siteConfig.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.schoolName}. {t("footer.rights")}.
          </p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs sm:text-sm px-3 sm:px-4 py-2"
          >
            <MessageCircle size={14} className="sm:w-4 sm:h-4 inline mr-1.5 sm:mr-2" />
            {t("header.whatsapp")}
          </a>
        </div>
      </div>
    </footer>
  );
}
