import { motion } from "framer-motion";
import { Award, Users, Clock, Trophy } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Professor() {
  const professor = siteConfig.professor;

  return (
    <section id="professor" className="py-16 md:py-24 section-dark noise-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30 inline-block mb-4">
            Seu Mentor
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Conheça seu <span className="text-gold-gradient">Professor</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Professor Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                <span className="text-2xl font-serif font-bold text-primary">
                  {professor.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">{professor.name}</h3>
                <p className="text-muted-foreground">{professor.title}</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {professor.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Clock className="text-primary" size={20} />
                <span className="text-sm">{professor.experience}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-primary" size={20} />
                <span className="text-sm">{professor.students}</span>
              </div>
            </div>

            <ul className="space-y-3">
              {professor.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Trophy className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Professor Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium p-8 border-gold-gradient text-center"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-6 flex items-center justify-center border-2 border-primary/30">
              <Award className="text-primary" size={48} />
            </div>

            <h4 className="font-serif text-xl font-semibold mb-2">
              Método Exclusivo
            </h4>
            <p className="text-muted-foreground mb-6">
              Aprenda com quem realmente entende do assunto e já formou milhares de profissionais de sucesso.
            </p>

            <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="text-2xl font-bold text-primary">15+</p>
                <p className="text-xs text-muted-foreground">Anos exp.</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">5k+</p>
                <p className="text-xs text-muted-foreground">Alunos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">3x</p>
                <p className="text-xs text-muted-foreground">Premiado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
