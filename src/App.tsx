import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/servicos/:id" element={<ServiceDetail />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
