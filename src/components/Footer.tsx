import { MessageCircle, Instagram } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Módulos", href: "#modulos" },
  { label: "Bônus", href: "#bonus" },
  { label: "Professor", href: "#professor" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Oferta", href: "#oferta" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
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
                  {item.label}
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
            © {new Date().getFullYear()} {siteConfig.schoolName}. Todos os direitos reservados.
          </p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm"
          >
            <MessageCircle size={16} className="inline mr-2" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
