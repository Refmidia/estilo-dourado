import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/siteConfig";

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 section-darker noise-overlay relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/30 inline-block mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Perguntas <span className="text-gold-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o curso
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {siteConfig.faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium px-6 border-border data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-left font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale com a gente!
          </p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline inline-flex items-center gap-2"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
