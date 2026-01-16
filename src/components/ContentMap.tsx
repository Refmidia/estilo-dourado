import { motion } from "framer-motion";
import { CheckCircle, Target } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function ContentMap() {
  return (
    <section id="metodo" className="py-16 md:py-24 section-dark noise-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30 inline-block mb-4">
            O Método
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            O que você vai <span className="text-gold-gradient">aprender</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um método completo e estruturado para você dominar a arte da barbearia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Learning Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {siteConfig.learningPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/30 transition-colors"
              >
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={22} />
                <span className="text-foreground">{point}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Course Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium p-6 md:p-8 border-gold-gradient"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">Mapa do Curso</h3>
                <p className="text-sm text-muted-foreground">Sua jornada até o sucesso</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-medium">Fundamentos</p>
                  <p className="text-sm text-muted-foreground">Base sólida para começar</p>
                </div>
              </div>

              <div className="w-px h-6 bg-primary/30 ml-5" />

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-medium">Técnicas Práticas</p>
                  <p className="text-sm text-muted-foreground">Cortes clássicos e modernos</p>
                </div>
              </div>

              <div className="w-px h-6 bg-primary/30 ml-5" />

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-medium">Especialização</p>
                  <p className="text-sm text-muted-foreground">Barba, química e pigmentação</p>
                </div>
              </div>

              <div className="w-px h-6 bg-primary/30 ml-5" />

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <p className="font-medium">Seu Negócio</p>
                  <p className="text-sm text-muted-foreground">Gestão e empreendedorismo</p>
                </div>
              </div>
            </div>

            <a
              href="#modulos"
              className="btn-gold w-full text-center mt-8 block"
            >
              Ver todos os módulos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
