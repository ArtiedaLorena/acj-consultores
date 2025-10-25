import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesData } from "../data/servicesData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const navigate = useNavigate();

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#0D0D0D" }}
          >
            Nuestros Servicios
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6F7372" }}>
            Soluciones integrales en seguridad e higiene laboral para proteger a
            tu equipo y asegurar el cumplimiento normativo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group transform hover:scale-[1.02] h-[320px]"
              >
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay con gradiente para legibilidad */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/80 transition-all duration-300"
                  />
                </div>

                {/* Contenido */}
                <div className="relative h-full flex flex-col p-5 text-white">
                  {/* Icono y título */}
                  <div className="flex items-start space-x-3 mb-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "#8DBF69" }}
                    >
                      <IconComponent size={24} color="white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-white text-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Descripción */}
                  <div className="flex-1 mb-4">
                    <p className="text-white/90 text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Botón centrado en la parte inferior */}
                  <div className="flex justify-center mt-auto">
                    <button
                      onClick={() => navigate(`/servicio/${service.id}`)}
                      className="flex items-center gap-2 px-5 py-2 rounded-lg text-white text-sm border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200 group/button"
                    >
                      <span>Más info</span>
                      <ArrowRight
                        size={14}
                        className="group-hover/button:translate-x-1 transition-transform duration-200"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
