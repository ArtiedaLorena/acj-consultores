import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+54 11 4123-4567",
      description: "Lun a Vie 8:00 - 18:00"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@acjconsultores.com.ar",
      description: "Respuesta en 24hs"
    },
    {
      icon: MapPin,
      title: "Oficina Principal",
      value: "Av. Corrientes 1234, CABA",
      description: "Buenos Aires, Argentina"
    },
    {
      icon: Clock,
      title: "Horarios",
      value: "Lunes a Viernes",
      description: "8:00 - 18:00 hs"
    }
  ];

  return (
    <section id="contacto" className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0D0D0D' }}>
            Contactanos
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6F7372' }}>
            Contactanos para una consulta gratuita 
            y descubre cómo podemos mejorar la seguridad de tu empresa.
          </p>
        </div>

       

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-lg">
              <CardHeader >
                <CardTitle className="text-center text-2xl" style={{ color: '#0D0D0D' }}>
                  Solicitar Consulta Gratuita
                </CardTitle>
                <p className="text-center" style={{ color: '#6F7372' }}>
                  Completa el formulario y nos pondremos en contacto con vos en menos de 24 horas.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#0D0D0D' }}>
                      Nombre *
                    </label>
                    <Input 
                      placeholder="Tu nombre completo"
                      className="border-2"
                      style={{ borderColor: '#e5e7eb' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#8DBF69';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#0D0D0D' }}>
                      Empresa *
                    </label>
                    <Input 
                      placeholder="Nombre de tu empresa"
                      className="border-2"
                      style={{ borderColor: '#e5e7eb' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#8DBF69';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#0D0D0D' }}>
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="tu@email.com"
                      className="border-2"
                      style={{ borderColor: '#e5e7eb' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#8DBF69';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#0D0D0D' }}>
                      Teléfono
                    </label>
                    <Input 
                      placeholder="+54 11 1234-5678"
                      className="border-2"
                      style={{ borderColor: '#e5e7eb' }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#8DBF69';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-6" style={{ color: '#0D0D0D' }}>
                    Mensaje *
                  </label>
                  <Textarea 
                    placeholder="Contanos sobre tu empresa y qué servicios necesitas..."
                    rows={5}
                    className="border-2"
                    style={{ borderColor: '#e5e7eb' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#8DBF69';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                    }}
                  />
                </div>

                <Button 
                  size="lg"
                  className="w-full text-white border-0 text-lg py-8"
                  style={{ backgroundColor: '#027333' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8DBF69';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#027333';
                  }}
                >
                  Enviar Consulta
                </Button>

                <p className="text-xs text-center" style={{ color: '#6F7372' }}>
                  Al enviar este formulario, acepta que nos pongamos en contacto con usted 
                  para proporcionarle información sobre nuestros servicios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
    </section>
  );
}