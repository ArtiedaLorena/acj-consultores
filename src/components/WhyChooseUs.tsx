import { Award, Clock, Users2, Zap } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Experiencia Comprobada",
      description: "Más de 15 años brindando soluciones de seguridad e higiene con resultados exitosos.",
      stat: "15+ años"
    },
    {
      icon: Clock,
      title: "Respuesta Rápida",
      description: "Atención inmediata a emergencias y consultas. Disponibilidad 24/7 para situaciones críticas.",
      stat: "24/7"
    },
    {
      icon: Users2,
      title: "Equipo Especializado",
      description: "Profesionales certificados con amplia experiencia en diferentes sectores industriales.",
      stat: "100% cert."
    },
    {
      icon: Zap,
      title: "Soluciones Integrales",
      description: "Desde la evaluación inicial hasta la implementación completa y seguimiento continuo.",
      stat: "360°"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0D0D0D' }}>
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6F7372' }}>
            Nos diferenciamos por nuestro compromiso, profesionalismo y resultados comprobados 
            en el sector de seguridad e higiene laboral.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="text-center group">
                {/* Icon and Stat */}
                <div className="relative mb-6">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#027333' }}
                  >
                    <IconComponent size={36} color="white" />
                  </div>
                  <div 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: '#8DBF69' }}
                  >
                    {reason.stat}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#0D0D0D' }}>
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6F7372' }}>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#027333' }}>
              500+
            </div>
            <div className="text-sm" style={{ color: '#6F7372' }}>
              Empresas Asesoradas
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#027333' }}>
              95%
            </div>
            <div className="text-sm" style={{ color: '#6F7372' }}>
              Reducción de Incidentes
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#027333' }}>
              100%
            </div>
            <div className="text-sm" style={{ color: '#6F7372' }}>
              Cumplimiento Normativo
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#027333' }}>
              24/7
            </div>
            <div className="text-sm" style={{ color: '#6F7372' }}>
              Soporte Disponible
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}