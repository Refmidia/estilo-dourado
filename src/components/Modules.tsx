import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Modules() {
  return (
    <section id="modulos" className="py-16 md:py-24 section-darker noise-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30 inline-block mb-4">
            Conteúdo Completo
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Módulos do <span className="text-gold-gradient">Curso</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conteúdo organizado em módulos para facilitar seu aprendizado e evolução
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {siteConfig.modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-premium p-6 group hover:border-primary/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-serif font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                  {module.number}
                </span>
                <PlayCircle className="text-primary/50 group-hover:text-primary transition-colors" size={24} />
              </div>
              
              <h3 className="font-serif text-lg font-semibold mb-3">
                {module.title}
              </h3>

              <ul className="space-y-2">
                {module.topics.map((topic, topicIndex) => (
                  <li 
                    key={topicIndex}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {topic}
                  </li>
                ))}
              </ul>
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
            Quero acesso aos módulos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
