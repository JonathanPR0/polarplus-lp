import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto custa a instalação de ar-condicionado?",
      answer:
        "Os custos de instalação variam dependendo do tipo de sistema, tamanho do ambiente e complexidade da instalação. Oferecemos avaliações gratuitas no local e preços transparentes sem taxas ocultas. Entre em contato para um orçamento personalizado.",
    },
    {
      question: "Vocês oferecem garantia nos serviços?",
      answer:
        "Sim! Todas as nossas instalações são realizamos conforme as normas do fabricante, e oferecemos nossa própria garantia de 90 dias. Reparos e serviços de manutenção também incluem cobertura de garantia.",
    },

    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer:
        "Aceitamos dinheiro, cartões de crédito, cartões de débito, PIX, transferências bancárias e oferecemos planos de pagamento flexíveis para instalações maiores.",
    },
    {
      question:
        "Com que frequência devo fazer manutenção no meu sistema de AC?",
      answer:
        "Recomendamos manutenção profissional a cada 6 meses para desempenho ideal e eficiência energética. A manutenção regular previne grandes quebras, estende a vida útil do sistema e mantém a cobertura da garantia.",
    },
    {
      question: "Vocês fazem manutenção em todas as marcas de ar-condicionado?",
      answer:
        "Sim, nossa equipe é treinados para trabalhar em todas as principais marcas de AC incluindo Samsung, LG, Midea, Carrier e mais.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-block mb-4"
          >
            <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium">
              FAQ
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Perguntas Frequentes
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Obtenha respostas para perguntas comuns sobre nossos serviços,
            preços e políticas.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-lg shadow-md border-0 overflow-hidden"
                >
                  <AccordionTrigger
                    className="px-6 py-4 text-left hover:no-underline
                    font-semibold text-foreground cursor-pointer"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
