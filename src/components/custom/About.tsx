import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import polarLogo from "../../assets/polar-logo.webp";

const About = () => {
  return (
    <section className="py-16 lg:py-24 bg-primary" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-12">
          {/* Image Section - Left Side */}
          <motion.div
            className="flex justify-center mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              src={polarLogo}
              alt="Polar Plus Logo com ícone de urso"
              className="w-[60dvh] rounded-3xl relative z-10"
              loading="lazy"
            />
          </motion.div>

          {/* Text Section - Right Side */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left px-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="inline-block mb-4"
            >
              <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium">
                Quem somos?
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Conheça a Polar Plus
            </motion.h2>

            <motion.p
              className="text-lg text-primary-foreground/90 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Somos uma empresa especializada em instalação, manutenção e
              consertos em geral de ar-condicionado split e de janela,
              residencial e comercial.
            </motion.p>

            <motion.p
              className="text-lg text-primary-foreground/90 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Atuamos no mercado de Natal e grande Natal, realizando serviços
              com responsabilidade, qualidade e compromisso. Garantindo conforto
              e bem estar através da qualidade dos nossos serviços.
            </motion.p>

            <motion.button
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ x: 5 }}
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  const y =
                    contactSection.getBoundingClientRect().top +
                    window.scrollY -
                    64;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              Solicite um orçamento
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
