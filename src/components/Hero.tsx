import { motion } from "framer-motion";
import { CheckCircle, Play } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import heroImage from "@/assets/hero-barber.jpg";

const badges = [
  "Acesso imediato",
  "Certificado incluso",
  "Do básico ao avançado",
  "Aulas práticas",
];

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center noise-overlay section-dark pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-alt opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30">
                Formação Profissional Completa
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Aprenda barbearia{" "}
              <span className="text-gold-gradient">do zero ao avançado</span>{" "}
              com método passo a passo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Conteúdo direto, organizado por módulos e com suporte para você
              evoluir rápido e se tornar um profissional de sucesso.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#oferta"
                className="btn-gold text-base md:text-lg px-8 py-4 text-center gold-glow-hover"
              >
                Quero me inscrever agora
              </a>
              <a
                href="#modulos"
                className="btn-gold-outline text-base md:text-lg px-8 py-4 text-center flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Ver módulos
              </a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-2 rounded-full"
                >
                  <CheckCircle size={16} className="text-primary" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-gold-gradient">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
              <img
                src={heroImage}
                alt="Barbeiro profissional em barbearia de luxo"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 z-20 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-primary">8+</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Módulos</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-primary">50+</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Aulas</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-primary">5k+</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Alunos</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
}
