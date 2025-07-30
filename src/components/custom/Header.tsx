import smoothScroll from "@/utils/smoothscroll";
import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoImg from "../../assets/logo.webp";
import Button from "../ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Serviços", href: "services" },
    { label: "Sobre", href: "about" },
    { label: "Contato", href: "contact" },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.4,
        ease: [0, 0, 0.2, 1],
      },
    },
  };

  const itemVariants: Variants = {
    closed: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0, 0, 0.2, 1],
      },
    },
  };

  const staggerContainer: Variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <>
      <header className="flex items-center justify-center font-medium sticky top-0 w-full z-50 bg-background">
        <div className="container mx-auto px-4 sm:px-6 w-full max-w-7xl">
          {/* Main navigation */}
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logoImg} alt="Polar Plus - Logo" className="h-6 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-sm">
              {navItems.map((item) => (
                <p
                  key={item.label}
                  onClick={() => smoothScroll(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                >
                  {item.label}
                </p>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button size="lg" onClick={() => smoothScroll("contact")}>
                Solicitar Orçamento
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div animate={isMenuOpen ? "open" : "closed"} transition={{ duration: 0.3 }}>
                {isMenuOpen ? (
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={30} className="text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={30} className="text-foreground" />
                  </motion.div>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Background Overlay */}
            <motion.div
              className="absolute inset-0 bg-background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Menu Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
              <motion.nav
                className="flex flex-col items-center space-y-8"
                variants={staggerContainer}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navItems.map((item) => (
                  <motion.p
                    key={item.label}
                    variants={itemVariants}
                    className="text-foreground text-3xl sm:text-4xl font-bold hover:text-accent transition-colors duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsMenuOpen(false);
                      smoothScroll(item.href);
                    }}
                  >
                    {item.label}
                  </motion.p>
                ))}
                <motion.div
                  variants={itemVariants} // Usa os variants corretamente
                  initial="closed" // Estado inicial
                  animate="open" // Estado ao abrir o menu
                  exit="closed" // Estado ao fechar o menu
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full p-4"
                  transition={{ duration: 0.5 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 py-8 w-full"
                    onClick={() => {
                      setIsMenuOpen(false);
                      smoothScroll("contact");
                    }}
                  >
                    Solicitar Orçamento
                  </Button>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
