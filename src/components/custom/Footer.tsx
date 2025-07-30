import { normalizePhoneNumber } from "@/utils/normalizer";
import smoothScroll from "@/utils/smoothscroll";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import polarLogo from "../../assets/logo.webp";
import contactInfo from "../../consts/contactInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-16 pb-6 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="grid gap-5 col-span-1 md:col-span-1">
            <img src={polarLogo} alt="Polar Plus" className="h-10 w-auto" loading="lazy" />
            <p className="text-muted-foreground mb-4 max-w-xs">
              Soluções em climatização para empresas e residências, garantindo conforto e bem-estar.
            </p>
          </div>

          {/* Menu */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li
                className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                onClick={() => smoothScroll("services")}
              >
                Serviços
              </li>
              <li
                className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                onClick={() => smoothScroll("about")}
              >
                Quem Somos
              </li>
              <li
                className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                onClick={() => smoothScroll("faq")}
              >
                FAQ
              </li>
              <li
                className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                onClick={() => smoothScroll("contact")}
              >
                Contato
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li
                className="flex items-start gap-2 cursor-pointer"
                onClick={() => {
                  window.location.href = `mailto:${contactInfo.email}`;
                }}
              >
                <Mail className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-muted-foreground hover:text-accent transition-colors">
                  {contactInfo.email}
                </span>
              </li>
              <li
                className="flex items-start gap-2 cursor-pointer"
                onClick={() => {
                  const whatsappURL = `https://wa.me/${contactInfo.phoneNumber}`;
                  window.open(whatsappURL, "_blank");
                }}
              >
                <FaWhatsapp className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                  {normalizePhoneNumber(contactInfo.phoneNumber.split("55")[1])}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                  Natal, RN - Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-border/30 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Polar Plus. Todos os direitos reservados.
          </p>
          <div className="text-xs text-muted-foreground/70">
            Desenvolvido por{" "}
            <a
              href="https://github.com/JonathanPR0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Jonathan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
