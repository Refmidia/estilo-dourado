import { useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Importar as imagens dos módulos
import introducaoImage from "@/assets/Cursos/introdução.png";
import operacionalImage from "@/assets/Cursos/Operacional-da-Barbearia.png";
import ferramentasImage from "@/assets/Cursos/Ferramentas-de-barbeiro.png";
import tecnicasCorteImage from "@/assets/Cursos/TÉCNICAS-DE-CORTE.png";
import freestyleImage from "@/assets/Cursos/Freestyle.png";
import tecnicasBarbaImage from "@/assets/Cursos/Técnicas-de-Barba.png";
import barbaTerapiaImage from "@/assets/Cursos/barba-terapia.png";
import quimicaImage from "@/assets/Cursos/quimica.png";
import tecnicasCorteAsiaticoImage from "@/assets/Cursos/Técnicas-de-corte-asiático.png";
import conclusaoImage from "@/assets/Cursos/Conclusão-do-Curso.png";

// Função para obter o nome da imagem baseado no título do módulo
function getModuleImage(title: string): string {
  const imageMap: Record<string, string> = {
    "Introdução": introducaoImage,
    "Operacional da Barbearia": operacionalImage,
    "Ferramentas de Barbeiro (Kit Profissional Incluso)": ferramentasImage,
    "Técnicas de Corte": tecnicasCorteImage,
    "Freestyle": freestyleImage,
    "Técnicas de Barba": tecnicasBarbaImage,
    "Barba Terapia": barbaTerapiaImage,
    "Química": quimicaImage,
    "Técnicas de Corte Asiático": tecnicasCorteAsiaticoImage,
    "Conclusão do Curso": conclusaoImage,
  };
  
  return imageMap[title] || "/placeholder.svg";
}

export function Modules() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {siteConfig.modules.map((module, index) => (
            <Dialog key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <DialogTrigger asChild>
                  <button className="w-full relative overflow-hidden rounded-lg card-premium border-gold-gradient hover:border-primary/50 transition-all duration-300 group">
                    {/* Imagem do módulo */}
                    <div className="aspect-square w-full relative">
                      <img
                        src={getModuleImage(module.title)}
                        alt={`Módulo ${module.number} - ${module.title}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback para uma imagem placeholder se não existir
                          (e.target as HTMLImageElement).src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    
                    {/* Botão para ver detalhes */}
                    <div className="absolute top-2 right-2">
                      <div className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-2 transition-all duration-300 group-hover:scale-110">
                        <Info size={20} />
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                {/* Modal com detalhes do módulo */}
                <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[85vh] sm:max-h-[80vh] overflow-y-auto p-4 sm:p-6">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary">
                      Módulo {module.number} - {module.title}
                    </DialogTitle>
                    <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
                      Detalhes e procedimentos deste módulo
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Conteúdo do módulo:</h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li 
                          key={topicIndex}
                          className="text-xs sm:text-sm text-foreground flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/30"
                        >
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span className="flex-1">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </motion.div>
            </Dialog>
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
