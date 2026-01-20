import { motion } from "framer-motion";
import { 
  BookOpen, 
  GraduationCap, 
  Gift, 
  Award, 
  MessageSquare, 
  CreditCard 
} from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    title: "O Método",
    description: "Conheça nossa metodologia exclusiva",
    href: "#metodo",
  },
  {
    icon: GraduationCap,
    title: "Módulos",
    description: "Veja todo o conteúdo do curso",
    href: "#modulos",
  },
  {
    icon: Gift,
    title: "Bônus e Presentes",
    description: "Materiais extras inclusos",
    href: "#bonus",
  },
  {
    icon: Award,
    title: "Certificado",
    description: "Certificação profissional",
    href: "#certificado",
  },
  {
    icon: MessageSquare,
    title: "Depoimentos",
    description: "O que dizem nossos alunos",
    href: "#depoimentos",
  },
  {
    icon: CreditCard,
    title: "Oferta e Inscrição",
    description: "Veja as condições especiais",
    href: "#oferta",
  },
];

export function Categories() {
  return (
    <section className="py-16 md:py-24 section-darker noise-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Navegue pelo <span className="text-gold-gradient">conteúdo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clique em uma categoria para ir direto ao conteúdo que mais interessa
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.href}
              href={category.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group card-premium p-4 sm:p-5 md:p-6 lg:p-8 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <category.icon size={24} className="sm:w-7 sm:h-7 md:w-7 md:h-7" />
              </div>
              <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2">
                {category.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                {category.description}
              </p>
              <span className="inline-flex items-center text-primary text-xs sm:text-sm font-medium group-hover:underline">
                Acessar →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
