import "./styles/globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Clients } from "./components/Clients";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ServicePage } from "./components/ServicePage";

// Página principal (home)
function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Clients />
      <WhyChooseUs />
      <Contact />
    </>
  );
}

// Componente principal con enrutamiento
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<HomePage />} />
          
          {/* Página individual de servicio */}
          <Route path="/servicio/:id" element={<ServicePage />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
