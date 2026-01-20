import { motion } from "framer-motion";
import { CheckCircle, Play } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useTranslation } from "@/hooks/useTranslation";
import heroImage from "@/assets/hero-barber.png";

export function Hero() {
  const { t } = useTranslation();
  
  const badges = [
    t("hero.badges.immediate"),
    t("hero.badges.certificate"),
    t("hero.badges.basicToAdvanced"),
    t("hero.badges.practical"),
  ];

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
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight px-2 sm:px-0"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-primary mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0 font-semibold px-2 sm:px-0"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0"
            >
              {siteConfig.schoolTagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-2 sm:px-0"
            >
              <a
                href="#oferta"
                className="btn-gold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 text-center gold-glow-hover w-full sm:w-auto"
              >
                {t("hero.cta.primary")}
              </a>
              <a
                href="#modulos"
                className="btn-gold-outline text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 text-center flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Play size={18} className="sm:w-5 sm:h-5" />
                {t("hero.cta.secondary")}
              </a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start px-2 sm:px-0"
            >
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground bg-muted/30 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full"
                >
                  <CheckCircle size={14} className="sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span className="whitespace-nowrap">{badge}</span>
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
                className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] object-cover"
              />
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 z-20 bg-card/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-border"
              >
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-center">
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">10+</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{t("hero.stats.modules")}</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">{siteConfig.stats.studentsGraduated}</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{t("hero.stats.students")}</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">{siteConfig.stats.jobsCompleted}</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Trabalhos</p>
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
