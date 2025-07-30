import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

const App = () => {
  // Verifica se está na rota raiz
  const isRoot =
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html";
  return isRoot ? <LandingPage /> : <NotFound />;
};

export default App;
