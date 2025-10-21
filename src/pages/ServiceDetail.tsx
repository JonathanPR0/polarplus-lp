import contactInfo from "@/consts/contactInfo";
import axios from "axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaClipboardCheck, FaClock, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo.png";

interface Category {
  name: string;
  id: string;
}

interface Service {
  id: string;
  invoiceId: string;
  description: string;
  category?: Category;
  scheduledServiceDate: string;
  serviceDate: string;
  warantyExpirationDate: string;
  uuidList: string[];
  createdAt: string;
}

interface ApiResponse {
  service: Service;
}

const API_URL = import.meta.env.VITE_API_URL;
const WHATSAPP_NUMBER = contactInfo.phoneNumber; // Substitua pelo número da empresa

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [remainingWarrantyDays, setRemainingWarrantyDays] = useState<number | null>(null);
  const today = new Date();

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const response = await axios.get<ApiResponse>(`${API_URL}/services/${id}`);
        setService(response.data.service);

        // Calcular dias restantes de garantia
        if (response.data.service.warantyExpirationDate) {
          const warrantyDate = new Date(response.data.service.warantyExpirationDate);
          const today = new Date();
          const diffTime = warrantyDate.getTime() - today.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          setRemainingWarrantyDays(diffDays > 0 ? diffDays : 0);
        }

        setLoading(false);
      } catch {
        setError("Erro ao carregar os detalhes do serviço. Por favor, tente novamente.");
        setLoading(false);
      }
    };

    if (id) {
      fetchService();
    }
  }, [id]);

  const formatDate = (dateString: string | undefined): string => {
    if (!dateString) return "Não informado";
    return format(new Date(dateString), "dd/MM/yyyy", { locale: ptBR });
  };

  const handleContactWhatsApp = () => {
    // Prepara a mensagem pré-formatada
    const message = service
      ? `Olá, gostaria de mais informações sobre o serviço de ${service.category?.name.toLocaleLowerCase()} realizado no dia ${formatDate(service.serviceDate)}`
      : "Olá, gostaria de mais informações sobre os serviços da Polar Plus";

    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Abre em uma nova aba
    window.open(whatsappUrl, "_blank");
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-6"></div>
        <p className="text-gray-600 font-medium text-lg">Carregando detalhes do serviço...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 gap-6">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <svg
            className="w-16 h-16 text-red-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h2 className="text-xl font-bold text-red-600 mb-2">Ocorreu um erro</h2>
          <p className="mb-6 text-gray-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors w-full"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Serviço não encontrado</h2>
          <p className="text-gray-600 mb-6">
            O serviço que você está procurando não existe ou foi removido.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-600 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors w-full"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <img
          src={logo}
          alt="Logo Polar plus"
          className="w-40 mx-auto mt-4 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Cabeçalho */}
          <div className="bg-primary p-6 text-primary-foreground">
            <h1 className="text-2xl font-bold">Detalhes do Serviço</h1>
          </div>

          {/* Corpo */}
          <div className="flex flex-col gap-4 p-6">
            {/* Descrição e categoria */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-lg font-semibold">Descrição</h2>
                <p className="mt-1 text-gray-900">{service.description}</p>
              </div>

              <div>
                <h2 className="font-semibold">Categoria</h2>
                <span className="mt-1 inline-flex items-center px-3 py-1 rounded-full font-medium bg-blue-100 text-blue-800">
                  {service.category?.name || "Não categorizado"}
                </span>
              </div>
            </div>

            {/* Datas */}
            <div className="bg-gray-50 rounded-lg p-5">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                Datas Importantes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaCalendarAlt className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Agendado para</h3>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <p className="mt-1 text-gray-900">
                        {formatDate(service.scheduledServiceDate)}
                      </p>
                      {service.scheduledServiceDate && (
                        <span
                          className={`inline-flex text-sm items-center px-2 py-1 rounded font-medium ${
                            new Date(service.scheduledServiceDate) > today
                              ? "bg-blue-100 text-slate-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {new Date(service.scheduledServiceDate) > today
                            ? `Em ${Math.ceil((new Date(service.scheduledServiceDate).getTime() - today.getTime()) / (1000 * 60 * 60 * 24))} dias`
                            : "Atrasado"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaClipboardCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Executado em</h3>
                    <p className="mt-1 text-gray-900">{formatDate(service.serviceDate)}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaShieldAlt className="h-5 w-5 text-violet-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Garantia até</h3>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <p className="mt-1 text-gray-900">
                        {formatDate(service.warantyExpirationDate)}
                      </p>
                      {remainingWarrantyDays !== null && (
                        <span
                          className={`inline-flex text-sm items-center px-2 py-1 rounded font-medium ${
                            remainingWarrantyDays > 30
                              ? "bg-green-100 text-green-800"
                              : remainingWarrantyDays > 0
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {remainingWarrantyDays > 0
                            ? `${remainingWarrantyDays} dias restantes`
                            : "Expirada"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaClock className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Criado em</h3>
                    <p className="mt-1 text-gray-900">{formatDate(service.createdAt)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ação para contato */}
            <button
              onClick={handleContactWhatsApp}
              className="w-full md:w-auto flex items-center justify-center bg-green-600 hover:bg-green-600/90 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all transform"
            >
              <FaWhatsapp className="mr-2 text-lg sm:text-xl" size={28} />
              Entrar em Contato pelo WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
