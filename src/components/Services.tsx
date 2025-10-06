import { Shield, Users, Microscope, HardHat, ClipboardCheck, Zap } from "lucide-react";


export function Services() {
  const services = [
    {
      icon: Shield,
      title: "Higiene y Seguridad en el Trabajo",
      description: "Servicios integrales de higiene y seguridad laboral para proteger a tus trabajadores y cumplir con la normativa vigente.",
      features: ["Evaluación de riesgos", "Programa anual de prevención", "Legajo técnico", "Estadísticas de siniestralidad"]
    },
    {
      icon: Users,
      title: "Capacitación y Entrenamiento",
      description: "Programas de formación especializada en seguridad e higiene laboral adaptados a cada sector industrial.",
      features: ["Cursos de seguridad", "Entrenamientos prácticos", "Simulacros de emergencia", "Material didáctico especializado"]
    },
    {
      icon: Microscope,
      title: "Estudios de Ingeniería",
      description: "Análisis técnicos especializados y estudios de ingeniería para optimizar la seguridad en procesos industriales.",
      features: ["Análisis de procesos", "Estudios de factibilidad", "Diseño de sistemas", "Evaluación técnica"]
    },
    {
      icon: ClipboardCheck,
      title: "Auditorías de Seguridad",
      description: "Auditorías integrales para verificar el cumplimiento normativo y identificar oportunidades de mejora.",
      features: ["Auditorías internas", "Evaluación de cumplimiento", "Planes de mejora", "Seguimiento de acciones"]
    },
    {
      icon: Zap,
      title: "Servicios de Puesta a Tierra",
      description: "Diseño, instalación, medición y certificación de sistemas de puesta a tierra para garantizar la seguridad eléctrica.",
      features: ["Medición de resistencia", "Certificación oficial", "Diseño de sistemas", "Mantenimiento preventivo"]
    },
    {
      icon: HardHat,
      title: "Medicina Laboral",
      description: "Servicios médicos ocupacionales para mantener la salud y bienestar de los trabajadores en el ambiente laboral.",
      features: ["Exámenes preocupacionales", "Exámenes periódicos", "Seguimiento médico", "Aptitud laboral"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0D0D0D' }}>
            Nuestros Servicios
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6F7372' }}>
            Soluciones integrales en seguridad e higiene laboral para proteger a tu equipo 
            y asegurar el cumplimiento normativo.
          </p>
        </div>

        {/* Services Grid - Minimalist */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer transform hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#8DBF69' }}
                  >
                    <IconComponent size={24} color="white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold mb-2" style={{ color: '#0D0D0D' }}>
                      {service.title}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6F7372' }}>
                      {service.description}
                    </p>
                    
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <div 
                            className="w-1.5 h-1.5 rounded-full mr-2"
                            style={{ backgroundColor: '#027333' }}
                          ></div>
                          <span style={{ color: '#027333' }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div 
            className="inline-flex items-center px-8 py-4 rounded-lg text-white font-semibold text-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
            style={{ backgroundColor: '#027333' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#8DBF69';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#027333';
            }}
          >
            Solicitar Cotización Personalizada
          </div>
        </div>
      </div>
    </section>
  );
}