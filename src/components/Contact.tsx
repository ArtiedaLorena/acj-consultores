import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader } from "./ui/card";
import imgContact from "./images/contacto.jpg";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-20"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {/* Imagen de fondo con overlay moderno */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imgContact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      ></div>

      {/* Capa difuminada para el efecto moderno */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

      {/* Contenido principal */}
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#0D0D0D" }}
          >
            Contáctanos
          </h2>
      
        </div>

        {/* Formulario integrado con fondo glass */}
        <Card
          className="backdrop-blur-md bg-white/90 shadow-xl border-0 rounded-2xl"
        >
          <CardHeader>
            <p className="text-center text-sm md:text-base" style={{ color: "#6F7372" }}>
              Completá el formulario y nos pondremos en contacto con vos en menos de 24 horas.
            </p>
          </CardHeader>

          <CardContent className="space-y-8 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#0D0D0D" }}
                >
                  Nombre *
                </label>
                <Input
                  placeholder="Tu nombre completo"
                  className="border-2"
                  style={{ borderColor: "#e5e7eb" }}
                  onFocus={(e) => (e.target.style.borderColor = "#8DBF69")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#0D0D0D" }}
                >
                  Empresa *
                </label>
                <Input
                  placeholder="Nombre de tu empresa"
                  className="border-2"
                  style={{ borderColor: "#e5e7eb" }}
                  onFocus={(e) => (e.target.style.borderColor = "#8DBF69")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#0D0D0D" }}
                >
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="border-2"
                  style={{ borderColor: "#e5e7eb" }}
                  onFocus={(e) => (e.target.style.borderColor = "#8DBF69")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#0D0D0D" }}
                >
                  Teléfono
                </label>
                <Input
                  placeholder="+54 11 1234-5678"
                  className="border-2"
                  style={{ borderColor: "#e5e7eb" }}
                  onFocus={(e) => (e.target.style.borderColor = "#8DBF69")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#0D0D0D" }}
              >
                Mensaje *
              </label>
              <Textarea
                placeholder="Contanos sobre tu empresa y qué servicios necesitas..."
                rows={5}
                className="border-2"
                style={{ borderColor: "#e5e7eb" }}
                onFocus={(e) => (e.target.style.borderColor = "#8DBF69")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>

            <Button
              size="lg"
              className="w-full text-white text-lg py-6 rounded-lg transition-all duration-300 shadow-md"
              style={{ backgroundColor: "#24733F" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#8DBF69")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#24733F")
              }
            >
              Enviar Consulta
            </Button>

            <p
              className="text-xs text-center"
              style={{ color: "#6F7372" }}
            >
              Al enviar este formulario, acepta que nos pongamos en contacto
              con usted para proporcionarle información sobre nuestros
              servicios.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
