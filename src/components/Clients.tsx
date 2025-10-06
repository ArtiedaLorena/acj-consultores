import { useEffect, useState } from "react";

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logos de empresas ficticias pero realistas
  const clientLogos = [
    { name: "TechCorp", logo: "TC" },
    { name: "Industrias del Sur", logo: "IDS" },
    { name: "Constructora Alpha", logo: "CA" },
    { name: "Logistics Pro", logo: "LP" },
    { name: "MetalWorks", logo: "MW" },
    { name: "FoodTech", logo: "FT" },
    { name: "BuildMax", logo: "BM" },
    { name: "TransGlobal", logo: "TG" },
    { name: "SafeIndustry", logo: "SI" },
    { name: "EcoManufacturing", logo: "EM" },
    { name: "PowerPlant Solutions", logo: "PPS" },
    { name: "ChemLab Industries", logo: "CLI" }
  ];

  const stats = [
    { number: "50+", label: "Empresas Asesoradas", color: "#027333" },
    { number: "5+", label: "Años de Experiencia", color: "#8DBF69" },
    { number: "15+", label: "Sectores Industriales", color: "#027333" },
    { number: "200+", label: "Trabajadores Capacitados", color: "#8DBF69" }
  ];

  // Auto-scroll del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % Math.ceil(clientLogos.length / 6)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [clientLogos.length]);

  return (
    <section id="clientes" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span style={{ color: '#0D0D0D' }}>Nuestros </span>
            <span style={{ color: '#027333' }}>Clientes</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#6F7372' }}>
            Empresas que confían en nosotros para proteger a su equipo y cumplir con las normativas de seguridad laboral.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.number}
              </div>
              <div className="text-sm" style={{ color: '#6F7372' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Carrusel de Logos */}
        <div className="relative overflow-hidden bg-white rounded-2xl py-12 shadow-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {Array.from({ length: Math.ceil(clientLogos.length / 6) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                  {clientLogos.slice(slideIndex * 6, (slideIndex + 1) * 6).map((client, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer group"
                    >
                      <div 
                        className="w-16 h-16 rounded-lg border-2 flex items-center justify-center mb-3 group-hover:shadow-lg transition-all duration-300 bg-white"
                        style={{ 
                          borderColor: index % 2 === 0 ? '#027333' : '#8DBF69'
                        }}
                      >
                        <span className="font-bold text-lg" style={{ color: index % 2 === 0 ? '#027333' : '#8DBF69' }}>
                          {client.logo}
                        </span>
                      </div>
                      <span 
                        className="text-xs text-center font-medium"
                        style={{ color: '#6F7372' }}
                      >
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(clientLogos.length / 6) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'scale-125' : 'opacity-50'
                }`}
                style={{ 
                  backgroundColor: currentIndex === index ? '#027333' : '#8DBF69'
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}