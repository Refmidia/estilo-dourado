import { motion } from "framer-motion";
import { 
  CheckCircle, 
  MessageCircle, 
  Shield, 
  Clock, 
  Zap,
  CreditCard 
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const includes = [
  "Acesso imediato a todo o conteúdo",
  "10 módulos completos",
  "Certificado profissional",
  "Suporte via grupo exclusivo",
  "Atualizações vitalícias",
  "Todos os bônus inclusos",
  "Garantia de 7 dias",
];

export function Offer() {
  return (
    <section id="oferta" className="py-16 md:py-24 section-darker noise-overlay relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30 inline-block mb-4">
            Oferta Especial
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Acesso completo ao{" "}
            <span className="text-gold-gradient">{siteConfig.schoolName}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-premium p-8 md:p-12 border-gold-gradient gold-glow">

            {/* Price */}
            <div className="text-center mb-8 space-y-6">
              {/* Curso Profissional */}
              <div className="pb-6 border-b border-border">
                <h3 className="text-lg font-semibold mb-2 text-primary">💈 {siteConfig.pricing.professional.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">({siteConfig.pricing.professional.hours})</p>
                <p className="text-4xl md:text-5xl font-bold text-primary">
                  {siteConfig.pricing.professional.price} {siteConfig.pricing.professional.currency}
                </p>
              </div>
              
              {/* Curso VIP */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary">💈 {siteConfig.pricing.vip.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">({siteConfig.pricing.vip.hours})</p>
                <p className="text-4xl md:text-5xl font-bold text-primary">
                  {siteConfig.pricing.vip.price} {siteConfig.pricing.vip.currency}
                </p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-center">Formas de pagamento:</h4>
              <div className="grid grid-cols-2 gap-2">
                {siteConfig.paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-2 rounded-md">
                    <CheckCircle className="text-primary flex-shrink-0" size={16} />
                    {method}
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Informações: {siteConfig.contactPhone}
              </p>
            </div>

            {/* What's included */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-center">O que está incluído:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-primary flex-shrink-0" size={18} />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <a
                href={siteConfig.checkoutLink}
                className="btn-gold w-full text-center text-lg py-4 flex items-center justify-center gap-2 gold-glow-hover animate-glow"
              >
                <Zap size={20} />
                Quero me inscrever agora
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline w-full text-center py-4 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield size={18} className="text-primary" />
                Compra segura
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={18} className="text-primary" />
                Acesso imediato
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CreditCard size={18} className="text-primary" />
                Até 12x no cartão
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
