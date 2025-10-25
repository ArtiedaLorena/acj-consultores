import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { getServiceById } from "../data/servicesData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = id ? getServiceById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4" style={{ color: "#0D0D0D" }}>
            Servicio no encontrado
          </h2>
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const section = document.getElementById("servicios");
                section?.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }}
            className="px-6 py-3 rounded-lg text-white"
            style={{ backgroundColor: "#027333" }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <ImageWithFallback
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const section = document.getElementById("servicios");
                  section?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="flex items-center gap-2 text-white mb-6 hover:gap-3 transition-all duration-300"
            >
              <ArrowLeft size={24} />
              <span>Volver a servicios</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#8DBF69" }}
              >
                <IconComponent size={32} color="white" />
              </div>
              <h1 className="text-4xl md:text-5xl text-white">
                {service.title}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 max-w-3xl"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="mb-6" style={{ color: "#027333" }}>
                Descripción del Servicio
              </h2>
              <div className="space-y-4">
                {service.detailedDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    className="leading-relaxed"
                    style={{ color: "#6F7372" }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="mb-6" style={{ color: "#027333" }}>
                Beneficios
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={24}
                      className="flex-shrink-0 mt-1"
                      style={{ color: "#8DBF69" }}
                    />
                    <span style={{ color: "#6F7372" }}>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="sticky top-8 space-y-6"
            >
              {/* Features Card */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="mb-4" style={{ color: "#0D0D0D" }}>
                  Servicios Incluidos
                </h3>
                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#027333" }}
                      />
                      <span style={{ color: "#6F7372" }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div
                className="rounded-xl p-6 text-white"
                style={{ backgroundColor: "#027333" }}
              >
                <h3 className="mb-4 text-white">¿Necesitas este servicio?</h3>
                <p className="mb-6 text-white/90">
                  Contáctanos para recibir una cotización personalizada y
                  adaptada a tus necesidades.
                </p>
                <div className="space-y-3">
                  <a
                    href="/#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/");
                      setTimeout(() => {
                        document
                          .getElementById("contacto")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                    className="flex items-center justify-center gap-2 bg-white text-center rounded-lg px-4 py-3 hover:scale-105 transition-transform duration-200"
                    style={{ color: "#027333" }}
                  >
                    <Mail size={20} />
                    <span>Solicitar Cotización</span>
                  </a>
                  <a
                    href="https://wa.me/5491112345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-white text-white text-center rounded-lg px-4 py-3 hover:bg-white/10 transition-all duration-200"
                  >
                    <Phone size={20} />
                    <span>Contactar por WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Related Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const section = document.getElementById("servicios");
                  section?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="px-8 py-4 rounded-lg text-white hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: "#027333" }}
            >
              Ver Todos los Servicios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
