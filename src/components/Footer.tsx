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
    <footer className="py-12 section-dark border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold text-gold-gradient mb-4">
              {siteConfig.schoolName}
            </h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.schoolTagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href={siteConfig.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={18} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.schoolName}. {t("footer.rights")}.
          </p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm"
          >
            <MessageCircle size={16} className="inline mr-2" />
            {t("header.whatsapp")}
          </a>
        </div>
      </div>
    </footer>
  );
}
