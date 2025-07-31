import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { normalizePhoneNumber } from "@/utils/normalizer";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import contactInfo from "../../consts/contactInfo";

const ContactUs = () => {
  // Estado do formulário
  const [formData, setFormData] = useState({
    nome: "",
    tipoServico: "",
    endereco: "",
    descricao: "",
  });

  // Função para atualizar o estado
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para lidar com a mudança no select
  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      tipoServico: value,
    }));
  };

  // Validação do formulário
  const isFormValid = () => {
    return formData.nome && formData.tipoServico && formData.endereco;
  };

  // Função para enviar descricao para o WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }
    const message =
      `Olá! Meu nome é ${formData.nome}\n` +
      `Gostaria de solicitar um orçamento para um serviço ${formData.tipoServico}.\n` +
      `Moro no seguinte endereço: ${formData.endereco}\n` +
      `${formData.descricao ? `A seguir está uma breve descrição: ${formData.descricao}` : ""}`;

    const whatsappURL = `https://wa.me/${contactInfo.phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-16 lg:py-24 bg-primary" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
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
              Contato
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Solicite um orçamento
          </motion.h2>
          <motion.p
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soluções em climatização personalizadas para seu conforto. Solicite agora um orçamento
            sem compromisso.
          </motion.p>
        </motion.div>

        <div className="flex flex-col-reverse md:flex-row gap-5 lg:gap-8">
          {/* Formulário de Contato */}
          <motion.div
            className="flex-1 bg-primary-foreground/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex gap-5 md:gap-6 flex-col justify-between h-full"
            >
              <h3 className="text-2xl font-bold text-primary-foreground">Enviar Solicitação</h3>
              <div className="flex flex-col md:flex-row gap-3 md:gap-5 w-full">
                <div className="flex-1 flex flex-col gap-2">
                  <Label htmlFor="nome" className="text-primary-foreground">
                    Nome <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                    className="w-full bg-primary-foreground/20 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <Label htmlFor="tipoServico" className="text-primary-foreground">
                    Tipo de Serviço <span className="text-accent">*</span>
                  </Label>
                  <Select
                    required
                    onValueChange={handleSelectChange}
                    defaultValue={formData.tipoServico}
                  >
                    <SelectTrigger className="bg-primary-foreground/20 border-white/20 text-primary-foreground w-full">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="de instalação">Instalação</SelectItem>
                      <SelectItem value="de manutenção">Manutenção</SelectItem>
                      <SelectItem value="de limpeza">Limpeza</SelectItem>
                      <SelectItem value="específico">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="endereco" className="text-primary-foreground">
                  Endereço <span className="text-accent">*</span>
                </Label>
                <Input
                  id="endereco"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  placeholder="Seu endereço"
                  className="bg-primary-foreground/20 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>

              {/* Descricao */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="descricao" className="text-primary-foreground">
                  Descricao (opcional)
                </Label>
                <Textarea
                  id="descricao"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  placeholder="Conte-nos mais sobre suas necessidades..."
                  rows={5}
                  className="bg-primary-foreground/20 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/80 text-accent-foreground flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight size={20} />
              </Button>
            </form>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            className="flex-1 text-primary-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col justify-between bg-primary-foreground/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg gap-5 md:gap-6">
              <h3 className="text-2xl font-bold">Informações de Contato</h3>

              <div className="flex flex-col gap-5">
                {/* Telefone */}
                <motion.div
                  className="flex items-start gap-4"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-accent/20 p-3 rounded-full">
                    <FaWhatsapp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Telefone</h4>
                    <p
                      className="text-primary-foreground/80 hover:text-primary-foreground/70 cursor-pointer"
                      onClick={() => {
                        const whatsappURL = `https://wa.me/${contactInfo.phoneNumber}`;
                        window.open(whatsappURL, "_blank");
                      }}
                    >
                      {normalizePhoneNumber(contactInfo.phoneNumber.split("55")[1])}
                    </p>
                  </div>
                </motion.div>

                {/* E-mail */}
                <motion.div
                  className="flex items-start gap-4"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">E-mail</h4>
                    <p
                      onClick={() => (window.location.href = `mailto:${contactInfo.email}`)}
                      className="text-primary-foreground/80 hover:text-primary-foreground/70 cursor-pointer"
                    >
                      {contactInfo.email}
                    </p>
                  </div>
                </motion.div>

                {/* Área de Atendimento */}
                <motion.div
                  className="flex items-start gap-4"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-accent/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Área de Atendimento</h4>
                    <p className="text-primary-foreground/80 hover:text-primary-foreground/70 cursor-pointer">
                      Natal e Grande Natal
                    </p>
                  </div>
                </motion.div>

                {/* Horário de Funcionamento */}
                <motion.div
                  className="flex items-start gap-4"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Horário de Funcionamento</h4>
                    <p className="text-primary-foreground/80 hover:text-primary-foreground/70 cursor-pointer">
                      Seg-Sex: 8:00 - 17:00
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
