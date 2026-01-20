import { motion } from "framer-motion";
import { 
  UserPlus, 
  TrendingUp, 
  Scissors, 
  Building, 
  RefreshCw, 
  DollarSign 
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap: Record<string, any> = {
  UserPlus,
  TrendingUp,
  Scissors,
  Building,
  RefreshCw,
  DollarSign,
};

export function ForWho() {
  return (
    <section className="py-16 md:py-24 section-dark noise-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30 inline-block mb-4">
            Público Ideal
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Para quem é este <span className="text-gold-gradient">curso</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Se você se identifica com algum desses perfis, este curso foi feito para você
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {siteConfig.targetAudience.map((item, index) => {
            const Icon = iconMap[item.icon];
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
                  {Icon && <Icon className="text-primary" size={20} />}
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
