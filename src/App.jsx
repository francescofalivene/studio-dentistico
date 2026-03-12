import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MedicoPage from "./pages/MedicoPage";
import TrattamentoPage from "./pages/TrattamentoPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CasoLaserPage from "./pages/CasoLaserPage";
import ScrollToTop from "./ScrollToTop";
import TrattamentiPage from "./pages/TrattamentiPage";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medici/:id" element={<MedicoPage />} />
        <Route path="/trattamenti" element={<TrattamentiPage />} />
        <Route path="/trattamenti/:id" element={<TrattamentoPage />} />
        <Route path="/trattamenti/laser/:caso" element={<CasoLaserPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;