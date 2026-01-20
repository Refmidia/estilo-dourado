import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 section-darker noise-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30 inline-block mb-4">
            Prova Social
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            O que dizem nossos <span className="text-gold-gradient">alunos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas com o curso
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="card-premium p-8 md:p-12 text-center border-gold-gradient"
              >
                <Quote className="text-primary/30 mx-auto mb-6" size={48} />
                
                <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="text-primary fill-primary" size={20} />
                  ))}
                </div>

                <p className="font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border hover:border-primary flex items-center justify-center transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border hover:border-primary flex items-center justify-center transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#oferta" className="btn-gold text-lg px-10 py-4 gold-glow-hover">
            Quero entrar também
          </a>
        </motion.div>
      </div>
    </section>
  );
}
