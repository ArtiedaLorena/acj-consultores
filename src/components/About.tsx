"use client";

import { CheckCircle } from "lucide-react";
import trainingImage1 from "/images/SI01.jpg";
import trainingImage4 from "/images/SI04.jpg";
import trainingImage7 from "/images/SI07.jpg";
import trainingImage9 from "/images/SI09.jpg";
import trainingImage11 from "/images/SI11.jpg";
import trainingImage12 from "/images/SI12.jpg";

export function About() {
  const achievements = [
    "Equipo altamente especializado y certificado",
    "Tecnología innovadora de última generación",
    "Cobertura estratégica en constante expansión",
    "Certificaciones internacionales y formación continua",
    "Excelencia reconocida por nuestros clientes",
  ];

  const images = [
    trainingImage1,
    trainingImage4,
    trainingImage7,
    trainingImage9,
    trainingImage11,
    trainingImage12,
  ];

  return (
    <section
      id="nosotros"
      className="py-20"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Texto */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#0D0D0D" }}
              >
                Sobre <span style={{ color: "#027333" }}>ACJ</span> Consultores
              </h2>

              <p className="text-lg" style={{ color: "#6F7372" }}>
                Somos una empresa joven y dinámica, integrada por un equipo
                multidisciplinario de profesionales con amplia experiencia en
                distintas ramas de la consultoría. Nos especializamos en brindar
                servicios de seguridad e higiene laboral, acompañando a las
                organizaciones en el cumplimiento de las normativas vigentes y
                en la creación de entornos de trabajo seguros, saludables y
                sostenibles en el tiempo. Creemos firmemente que el trabajo no
                es solo una necesidad económica, sino también una expresión
                humana fundamental. Es el espacio donde las personas se
                desarrollan, se vinculan y contribuyen al crecimiento colectivo.
                Por eso, nuestra labor se centra en proteger y cuidar a los
                trabajadores, garantizando su bienestar y promoviendo una
                cultura preventiva dentro de cada empresa. En ACJ, comprendemos
                que una correcta gestión en seguridad e higiene no solo protege
                vidas, sino que también optimiza la productividad y fortalece la
                rentabilidad de las organizaciones. Cada mejora en las
                condiciones de trabajo representa una inversión directa en la
                eficiencia y sostenibilidad del negocio.
              </p>
              <p className="text-base" style={{ color: "#6F7372" }}>
                Con una mirada moderna y humana, trabajamos día a día para ser
                un aliado estratégico de las empresas, aportando soluciones
                concretas que construyan lugares de trabajo más seguros,
                saludables y productivos.
              </p>
            </div>

            {/* Logros */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} style={{ color: "#027333" }} />
                  <span style={{ color: "#0D0D0D" }}>{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mosaico de imágenes */}
          <div className="grid grid-cols-2 gap-2 h-full">
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg h-full">
                <img
                  src={img}
                  alt={`Imagen ${index + 1} - ACJ Consultores`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
