import Button from "@/components/ui/button";
import { motion } from "framer-motion";
import { Undo2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

const NotFound = () => {
  const location = useLocation();
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  // Generate snowflakes
  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes: Snowflake[] = [];
      for (let i = 0; i < 50; i++) {
        flakes.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * -window.innerHeight,
          size: Math.random() * 3 + 2,
          speed: Math.random() * 0.8 + 0.3, // Velocidade reduzida: 0.3-1.1 (era 1-3)
          opacity: Math.random() * 0.6 + 0.4,
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 1 - 0.5, // Rotação mais lenta: -0.5 a 0.5 (era -1 a 1)
        });
      }
      setSnowflakes(flakes);
    };

    generateSnowflakes();
    window.addEventListener("resize", generateSnowflakes);

    return () => window.removeEventListener("resize", generateSnowflakes);
  }, []);

  // Animate snowflakes
  useEffect(() => {
    const animateSnowflakes = () => {
      setSnowflakes((prevFlakes) =>
        prevFlakes.map((flake) => ({
          ...flake,
          y: flake.y > window.innerHeight ? -10 : flake.y + flake.speed,
          x: flake.x + Math.sin(flake.y * 0.005) * 0.3, // Movimento lateral mais sutil
          rotation: flake.rotation + flake.rotationSpeed,
        })),
      );
    };

    const interval = setInterval(animateSnowflakes, 80); // Intervalo aumentado: 80ms (era 50ms)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary  to-blue-300 relative overflow-hidden">
      {/* Snowflakes */}
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute pointer-events-none"
          style={{
            left: flake.x,
            top: flake.y,
            opacity: flake.opacity,
            transform: `rotate(${flake.rotation}deg)`,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="bg-white rounded-full"
            style={{
              width: flake.size,
              height: flake.size,
              boxShadow: `0 0 ${flake.size * 2}px rgba(255, 255, 255, 0.3)`,
            }}
          />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="text-center z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-8xl sm:text-9xl font-bold mb-4 text-white drop-shadow-2xl">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-xl sm:text-2xl text-blue-100 mb-2 font-medium">
            Oops! Página não encontrada
          </p>
          <p className="text-blue-200 text-sm sm:text-base">
            Parece que você se perdeu
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl border-2 border-white/20 backdrop-blur-sm"
            onClick={() => (window.location.href = "/")}
          >
            <Undo2 size={20} className="mr-2" />
            Retornar para a página inicial
          </Button>
        </motion.div>
      </motion.div>

      {/* Ground snow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

      {/* Additional atmospheric effects */}
      <motion.div
        className="absolute inset-0 bg-white/5"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default NotFound;
