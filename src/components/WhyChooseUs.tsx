import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, MapPin, Users, Award, Briefcase } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useTranslation } from "@/hooks/useTranslation";

export function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section id="porque" className="py-16 md:py-24 section-darker noise-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30 inline-block mb-4">
            {t("why.title")}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gold-gradient">{t("why.reasons")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {siteConfig.whyChooseUs.map((reason, index) => {
            let icon = CheckCircle;
            if (reason.includes("Google Maps")) icon = MapPin;
            else if (reason.includes("Instagram") || reason.includes("seguidores")) icon = TrendingUp;
            else if (reason.includes("trabalhos")) icon = Award;
            else if (reason.includes("alunos") || reason.includes("Estágio")) icon = Users;
            else if (reason.includes("franquia") || reason.includes("carreira")) icon = Briefcase;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-premium p-4 sm:p-5 md:p-6 flex items-start gap-3 sm:gap-4"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {icon === CheckCircle && <CheckCircle className="text-primary" size={20} />}
                  {icon === MapPin && <MapPin className="text-primary" size={20} />}
                  {icon === TrendingUp && <TrendingUp className="text-primary" size={20} />}
                  {icon === Award && <Award className="text-primary" size={20} />}
                  {icon === Users && <Users className="text-primary" size={20} />}
                  {icon === Briefcase && <Briefcase className="text-primary" size={20} />}
                </div>
                <p className="text-xs sm:text-sm text-foreground font-medium">{reason}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
