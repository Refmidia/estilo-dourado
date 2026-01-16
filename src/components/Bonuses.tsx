import { motion } from "framer-motion";
import { Gift, Clock } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Bonuses() {
  return (
    <section id="bonus" className="py-16 md:py-24 section-dark noise-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30 inline-block mb-4">
            Bônus Exclusivos
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Bônus e <span className="text-gold-gradient">Presentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Além de todo o conteúdo do curso, você ainda recebe esses bônus exclusivos
          </p>
        </motion.div>

        {/* Urgency banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-8 text-primary"
        >
          <Clock size={18} />
          <span className="text-sm font-medium">Bônus disponíveis por tempo limitado</span>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {siteConfig.bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-premium p-6 relative overflow-hidden group"
            >
              {/* Value badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {bonus.value}
                </span>
              </div>

              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Gift className="text-primary" size={24} />
              </div>

              <h3 className="font-semibold text-lg mb-2">{bonus.title}</h3>
              <p className="text-sm text-muted-foreground">{bonus.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#oferta" className="btn-gold text-lg px-10 py-4 gold-glow-hover">
            Garantir meus bônus
          </a>
        </motion.div>
      </div>

      {/* Certificate section */}
      <div id="certificado" className="mt-16 md:mt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium p-8 md:p-12 border-gold-gradient text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <svg
                className="text-primary"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Certificado <span className="text-gold-gradient">Profissional</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Ao concluir o curso, você recebe um certificado profissional que comprova 
              suas habilidades e pode ser usado no seu currículo e redes sociais.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-sm bg-muted/50 px-4 py-2 rounded-full">
                ✓ Reconhecido nacionalmente
              </span>
              <span className="text-sm bg-muted/50 px-4 py-2 rounded-full">
                ✓ Validação online
              </span>
              <span className="text-sm bg-muted/50 px-4 py-2 rounded-full">
                ✓ Download em PDF
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
