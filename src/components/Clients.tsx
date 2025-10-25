import { useEffect, useState } from "react";

import cormet from "./images/cormet_group.png";
import ias from "./images/ias.png";
import iveco from "./images/iveco.png";
import lainco from "./images/lainco_software.png";
import mercedes from "./images/mercedes_benz.png";
import mexichem from "./images/mexichem_amanco.jpg";
import obcitel from "./images/obcitel.png";
import jma from "./images/perfiles_jma.jpg";
import seven from "./images/seven_plast.png";
import sios from "./images/sios_sa.gif";
import surpiel from "./images/surpiel.png";
import serv from "./images/sew_eurodrive.gif";
export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logos de clientes para el carrusel
  const clientLogos = [
    cormet,
    ias,
    iveco,
    lainco,
    mercedes,
    mexichem,
    obcitel,
    jma,
    seven,
    sios,
    surpiel,
    serv,
  ];

  const logosPerSlide = 4; // Cantidad de logos por slide

  const stats = [
    { img: "./images/baliarda.png" },
    { img: "./images/tandanor.png" },
    { img: "./images/sitece.png" },
  ];

  // Auto-scroll del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % Math.ceil(clientLogos.length / logosPerSlide)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [clientLogos.length]);

  return (
    <section
      id="clientes"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span style={{ color: "#0D0D0D" }}>Nuestros </span>
            <span style={{ color: "#027333" }}>Clientes</span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: "#6F7372" }}
          >
            Socios estratégicos de las siguientes empresas,<br></br> que confían en
            nosotros como sus proveedores
          </p>
        </div>

        {/* Logos/Estadísticas de arriba */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 w-64 h-40"
            >
              <div className="flex items-center justify-center w-50 h-50 mb-4">
                <img
                  src={stat.img}
                  alt={`Logo ${index}`}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Carrusel de Logos */}
        <div className="relative overflow-hidden bg-white rounded-2xl py-6 shadow-lg">
          <div className="text-center mb-16">
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{ color: "#6F7372" }}
            >
              Empresas que confían en nosotros para proteger a su equipo <br></br>y
              cumplir con las normativas de seguridad laboral
            </p>
          </div>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({
              length: Math.ceil(clientLogos.length / logosPerSlide),
            }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                  {clientLogos
                    .slice(
                      slideIndex * logosPerSlide,
                      (slideIndex + 1) * logosPerSlide
                    )
                    .map((logo, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center"
                      >
                        <img
                          src={logo}
                          alt={`Cliente ${
                            slideIndex * logosPerSlide + index + 1
                          }`}
                          className="object-contain w-32 h-32 md:w-40 md:h-40"
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length: Math.ceil(clientLogos.length / logosPerSlide),
            }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "scale-125" : "opacity-50"
                }`}
                style={{
                  backgroundColor:
                    currentIndex === index ? "#027333" : "#8DBF69",
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
