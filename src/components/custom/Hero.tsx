import smoothScroll from "@/utils/smoothscroll";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import img from "../../assets/hero.webp";

export const Hero = () => {
  return (
    <section
      className="flex items-center justify-center w-full px-4 md:px-6 py-2"
      id="hero"
    >
      <div className="w-full max-w-7xl">
        <motion.div
          className="flex bg-gradient-to-br from-primary/80 to-primary rounded-3xl overflow-hidden shadow-2xl min-h-[85dvh]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Content Section */}
            <div className="my-auto flex-1 p-6 sm:p-8 md:p-12 lg:p-16 text-primary-foreground relative order-first">
              {/* Main Heading */}

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Soluções em climatização para empresas e residências
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6 md:mb-10 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Instalação, manutenção e limpeza de ar-condicionado com
                qualidade, agilidade e ótimo custo-benefício.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {/* Primary CTA */}
                <motion.button
                  className="group relative bg-white text-primary px-4 py-2 md:px-6 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start cursor-pointer"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => smoothScroll("contact")}
                  whileHover={{ scale: 1.02 }}
                >
                  <span>Solicitar Orçamento</span>
                  <motion.div
                    className="bg-accent text-accent-foreground p-3 rounded-full over"
                    whileHover={{ rotate: 45 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-base md:text-lg underline underline-offset-4 transition-all duration-300 w-full sm:w-auto text-center sm:text-left cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => smoothScroll("about")}
                >
                  Quem somos?
                </motion.button>
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
              className="flex-1 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] order-last"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <img
                src={img}
                alt="Técnico especializado em climatização realizando instalação profissional"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-l from-primary/30 via-transparent to-transparent lg:from-transparent lg:via-transparent lg:to-emerald-800/20"></div>

              {/* Floating Badge */}
              <motion.div
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 90,
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="text-primary/70 font-bold text-xs sm:text-sm">
                  +300 clientes
                </div>
                <div className="text-primary/50 text-xs">satisfeitos</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
