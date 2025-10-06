import { Button } from "./ui/button";

export function Hero() {
  return (
    <>
      <section id="inicio" className="pt-16 pb-8 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center bg-cover pointer-events-none"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg')`,
            backgroundSize: 'cover'
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
                  <span style={{ color: '#027333', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>ACJ </span>
                  <span style={{ color: '#0D0D0D', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>Consultores</span>
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md" style={{ color: '#2D3132', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                  Especialistas en Seguridad e Higiene Laboral con enfoque innovador y tecnológico. 
                  Brindamos soluciones integrales de vanguardia para proteger a tu equipo y maximizar la eficiencia operacional.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="text-white border-0 px-8 py-6 text-lg"
                  style={{ backgroundColor: '#027333' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8DBF69';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#027333';
                  }}
                >
                  Solicitar Evaluación Gratuita
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg border-2"
                  style={{ 
                    borderColor: '#027333',
                    color: '#027333'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#027333';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#027333';
                  }}
                >
                  Conocer Servicios
                </Button>
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
              <span style={{ color: '#0D0D0D' }}>Nuestros </span>
              <span style={{ color: '#027333' }}>Fundamentos</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div 
              className="p-8 rounded-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-xl relative overflow-hidden text-center"
              style={{ backgroundColor: '#8DBF69' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-white">
                  Misión
                </h3>
                <p className="text-white/90 leading-relaxed text-center">
                  Proteger la vida y salud de los trabajadores mediante soluciones integrales 
                  e innovadoras en seguridad e higiene laboral, aplicando tecnologías de vanguardia 
                  y metodologías comprobadas que garanticen ambientes laborales seguros y productivos 
                  para el crecimiento sostenible de las organizaciones.
                </p>
              </div>
            </div>
            
            <div 
              className="p-8 rounded-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-xl relative overflow-hidden text-center"
              style={{ backgroundColor: '#027333' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-white">
                  Visión
                </h3>
                <p className="text-white/90 leading-relaxed text-center">
                  Ser la consultora de referencia en Argentina, reconocida por la excelencia 
                  y la innovación tecnológica en seguridad laboral, liderando la transformación 
                  digital del sector mediante soluciones inteligentes que establezcan nuevos 
                  estándares de protección y eficiencia operacional en la industria.
                </p>
              </div>
            </div>
            
            <div 
              className="p-8 rounded-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-xl relative overflow-hidden text-center"
              style={{ backgroundColor: '#8DBF69' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-white">
                  Valores
                </h3>
                <p className="text-white/90 leading-relaxed text-center">
                  Compromiso inquebrantable con la seguridad, profesionalismo de alto nivel, 
                  ética en cada decisión e innovación constante. Desarrollamos cada proyecto 
                  con pasión y dedicación, priorizando siempre la integridad de las personas 
                  y la excelencia en nuestros servicios especializados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}