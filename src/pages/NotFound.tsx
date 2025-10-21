import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname
    );
  }, []);

  // Animação para os elementos do quebra-cabeça
  const puzzlePieces = [
    { top: "10%", left: "15%", rotate: 15, delay: 0.2 },
    { top: "20%", left: "80%", rotate: -20, delay: 0.3 },
    { top: "70%", left: "10%", rotate: 45, delay: 0.5 },
    { top: "65%", left: "85%", rotate: -15, delay: 0.4 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background com formas geométricas modernas */}
      <div className="absolute inset-0 bg-blue-50 z-0">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path fill="#e0f2fe" d="M0,0 L100,0 L100,25 C75,40 50,10 25,25 L0,15 Z"></path>
          <path fill="#bae6fd" d="M0,100 L100,100 L100,80 C75,95 50,70 25,85 L0,80 Z"></path>
        </svg>
      </div>

      {/* Elementos decorativos estilo "quebra-cabeça" */}
      {puzzlePieces.map((piece, index) => (
        <motion.div
          key={index}
          className="absolute w-16 h-16 rounded-lg bg-gradient-to-br from-blue-400 to-primary opacity-20"
          style={{
            top: piece.top,
            left: piece.left,
          }}
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={{
            scale: 1,
            rotate: piece.rotate,
            opacity: 0.2,
            y: [0, -10, 0],
          }}
          transition={{
            delay: piece.delay,
            duration: 0.6,
            y: {
              repeat: Infinity,
              duration: 3 + index,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      <div className="z-10 max-w-md w-full mx-4 relative">
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <motion.div
              className="relative mx-auto mb-6 w-32 h-20 flex items-center justify-center"
              // initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-6xl font-bold text-primary">404</h1>
            </motion.div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Página não encontrada</h2>

            <p className="text-gray-500 mb-6">
              Esta página parece não existir ou foi movida para outro endereço.
            </p>

            <div className="space-y-3">
              <motion.button
                onClick={() => navigate("/")}
                className="w-full py-3 px-4 bg-primary hover:bg-primary/80 text-white font-medium rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ir para página inicial
              </motion.button>

              <motion.button
                onClick={() => navigate(-1)}
                className="w-full py-3 px-4 bg-transparent text-primary border border-primary font-medium rounded-lg hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Voltar à página anterior
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
