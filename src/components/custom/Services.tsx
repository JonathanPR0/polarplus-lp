import { motion } from "framer-motion";
import { Settings, Sparkles, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Instalação",
      description:
        "Realizamos a instalação de sistemas de ar-condicionado utilizando as melhores práticas.",
      icon: Wrench,
      delay: 0.2,
    },
    {
      id: 2,
      title: "Manutenção e Reparo",
      description:
        "Manutenção preventiva e reparo rápido para manter seus sistemas funcionando perfeitamente.",
      icon: Settings,
      delay: 0.4,
    },
    {
      id: 3,
      title: "Limpeza e Sanitização",
      description:
        "Limpeza profunda e serviços de higienização para serpentinas, bandejas e filtros.",
      icon: Sparkles,
      delay: 0.6,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium">
              Serviços
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Nossos principais serviços
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Serviços profissionais de climatização sob medida para suas necessidades, garantindo
            conforto e eficiência ideais para seu espaço.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 lg:gap-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                className="group relative text-center"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.3,
                  delay: service.delay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -5 }}
              >
                {/* Separador vertical entre cards (exceto o último) */}
                {index < services.length - 1 && (
                  <div className="hidden md:block absolute top-0 -right-8 lg:-right-16 w-px h-full bg-border/50" />
                )}

                <div className="relative z-10 px-4 py-4 md:py-8">
                  {/* Icon Container */}
                  <motion.div
                    className="mb-8 flex justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: service.delay + 0.2,
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full">
                      <IconComponent className="w-12 h-12 lg:w-16 lg:h-16 text-accent" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-2 md:space-y-4">
                    <motion.h3
                      className="text-xl lg:text-2xl font-bold text-foreground  transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: service.delay + 0.1 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground leading-relaxed text-sm lg:text-base max-w-xs mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: service.delay + 0.2 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
