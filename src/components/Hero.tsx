import { Button } from "./ui/button";
import bgImage from "/images/industria.jpeg";

export function Hero() {
  return (
    <>
      <section
        id="inicio"
        className="pt-16 pb-8 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover pointer-events-none"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        ></div>

        {/* White overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/75 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center min-h-[500px]">
            {/* Content */}
            <div className="text-center space-y-8 max-w-4xl">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                  <span
                    style={{
                      color: "#24733F",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                    }}
                  >
                    ACJ{" "}
                  </span>
                  <span
                    style={{
                      color: "#0D0D0D",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                    }}
                  >
                    Consultores
                  </span>
                </h1>
                <p
                  className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md"
                  style={{
                    color: "#2D3132",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  Especialistas en Seguridad e Higiene Laboral con enfoque
                  innovador y tecnológico. Brindamos soluciones integrales de
                  vanguardia para proteger a tu equipo y maximizar la eficiencia
                  operacional.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#servicios">
                  <Button
                    size="lg"
                    className="text-white border-0 px-8 py-6 text-lg"
                    style={{ backgroundColor: "#027333" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#8DBF69";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#027333";
                    }}
                  >
                    Conocer servicios
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores - Moved to separate section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span style={{ color: "#0D0D0D" }}>Nuestros </span>
              <span style={{ color: "#24733F" }}>Fundamentos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div
              className="p-8 rounded-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-xl relative overflow-hidden text-center"
              style={{ backgroundColor: "#24733F" }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-white">Misión</h3>
                <p className="text-white/90 leading-relaxed text-center">
                  Ofrecer servicios de Seguridad e Higiene laboral con los más
                  altos estándares de calidad, aportando respuestas
                  personalizadas y efectivas a cada situación, en concordancia
                  con las exigencias y dinámicas del mercado actual.
                </p>
              </div>
            </div>

            <div
              className="p-8 rounded-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-xl relative overflow-hidden text-center"
              style={{ backgroundColor: "#428C5C" }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-white">Visión</h3>
                <p className="text-white/90 leading-relaxed text-center">
                  Aspiramos a ser referentes en Higiene y Seguridad Ocupacional,
                  destacándonos por la excelencia en nuestros servicios y el
                  compromiso con nuestros clientes, manteniendo siempre nuestros
                  valores y la esencia que nos define.
                </p>
              </div>
            </div>

            <div
              className="p-8 rounded-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-xl relative overflow-hidden text-center"
              style={{ backgroundColor: "#65A65B" }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-white">Valores</h3>
                <p className="text-white/90 leading-relaxed text-center">
                  Fomentamos la capacitación continua, aseguramos la calidad y
                  trazabilidad de nuestros servicios mediante protocolos y
                  sistemas internos, y aplicamos innovación tecnológica para
                  brindar soluciones seguras, eficientes y confiables a nuestros
                  clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
