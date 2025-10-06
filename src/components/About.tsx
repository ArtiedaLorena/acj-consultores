import { CheckCircle } from "lucide-react";
import trainingImage1 from './images/SI.jpg';
import trainingImage2 from './images/SI2.jpg';
import trainingImage3 from './images/SI3.jpg';

export function About() {
  const achievements = [
    "Equipo altamente especializado y certificado",
    "Tecnología innovadora de última generación",
    "Cobertura estratégica en constante expansión",
    "Certificaciones internacionales y formación continua",
    "Excelencia reconocida por nuestros clientes"
  ];

  return (
    <section id="nosotros" className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#0D0D0D' }}>
                Sobre ACJ Consultores
              </h2>
              <p className="text-lg" style={{ color: '#6F7372' }}>
                Somos una consultora especializada y dinámica en seguridad e higiene laboral, 
                comprometida con la innovación y la protección integral de los trabajadores mediante 
                tecnologías de vanguardia y metodologías de última generación.
              </p>
              <p className="text-base" style={{ color: '#6F7372' }}>
                Nuestro enfoque integral basado en la excelencia técnica nos permite brindar 
                soluciones personalizadas y efectivas que se adaptan a las necesidades específicas 
                de cada industria, garantizando los más altos estándares de calidad y profesionalismo.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} style={{ color: '#027333' }} />
                  <span style={{ color: '#0D0D0D' }}>{achievement}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={trainingImage1}
                    alt="Capacitación en prevención de incendios - ACJ Consultores"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="p-4 rounded-lg text-center"
                  style={{ backgroundColor: '#8DBF69' }}
                >
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-white text-sm">Empresas Asesoradas</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div 
                  className="p-4 rounded-lg text-center"
                  style={{ backgroundColor: '#027333' }}
                >
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-white text-sm">Años de Experiencia</div>
                </div>
                <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={trainingImage2}
                    alt="Capacitación en prevención y emergencias - ACJ Consultores"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional image showcase */}
        <div className="mt-16 text-center hidden md:block">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={trainingImage3}
                alt="Seguridad en obras y construcción - ACJ Consultores"
                className="w-full h-80 object-cover"
              />
            </div>
            <p className="mt-4 text-sm italic" style={{ color: '#6F7372' }}>
              Supervisión y capacitación en seguridad para obras y construcción
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}