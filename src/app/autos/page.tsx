"use client"

import { useEffect, useState } from "react"
import { Car, Shield, Clock, DollarSign, FileText, CheckCircle, Building2, TrendingUp, Phone, Mail, MapPin, Globe, Calculator } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AutosPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.observe-animation')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSimuladorClick = () => {
    window.open("https://autos.fincentiva.com.mx", "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857] text-white">
          {/* Animated effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083')] bg-cover bg-center opacity-10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
          
          <div className="container relative mx-auto px-4 py-24 md:py-32">
            <div className={`max-w-4xl mx-auto text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                <Car className="h-5 w-5" />
                <span className="font-semibold">Crédito Automotriz</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Crédito Automotriz Fincentiva
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Financia tu auto de forma rápida, segura y transparente
              </p>
              <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
                En <strong>Fincentiva</strong> te ayudamos a estrenar tu auto sin complicaciones.
                Somos una <strong>SOFOM con más de 15 años de experiencia</strong> en créditos automotrices y vía nómina, 
                comprometida con ofrecerte financiamiento flexible, atención personalizada y procesos 100% digitales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-[#047857] hover:bg-gray-100 hover:scale-105 font-semibold text-lg px-8 py-6 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={handleSimuladorClick}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Ir al Simulador
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Por qué elegir Fincentiva */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 observe-animation opacity-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                ¿Por qué elegir Fincentiva?
              </h2>
            </div>

            {/* Para Clientes */}
            <div className="max-w-6xl mx-auto mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center observe-animation opacity-0">Para clientes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: DollarSign, title: "Hasta el 70% de financiamiento", desc: "Del valor del vehículo" },
                  { icon: Car, title: "Enganche desde el 30%", desc: "Accesible y flexible" },
                  { icon: Clock, title: "Plazos de 12 a 48 meses", desc: "Elige el que mejor te convenga" },
                  { icon: Shield, title: "Seguro del auto incluido", desc: "Tu inversión protegida" },
                  { icon: FileText, title: "Proceso digital", desc: "Cotiza, aplica y firma en línea" },
                  { icon: CheckCircle, title: "Sin aval ni intermediarios", desc: "Proceso directo y transparente" }
                ].map((benefit, index) => (
                  <Card 
                    key={index} 
                    className="border-2 hover:border-[#10b981] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 observe-animation opacity-0 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold mb-2 group-hover:text-[#10b981] transition-colors duration-300">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Para Agencias */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center observe-animation opacity-0">Para agencias:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: TrendingUp, title: "Aumenta tus ventas", desc: "Ofrece crédito directo a tus clientes" },
                  { icon: Clock, title: "Proceso ágil", desc: "Sin riesgo financiero" },
                  { icon: Building2, title: "Acompañamiento personalizado", desc: "Para tus vendedores" }
                ].map((benefit, index) => (
                  <Card 
                    key={index} 
                    className="border-2 hover:border-[#10b981] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 observe-animation opacity-0 group"
                    style={{ animationDelay: `${(index + 6) * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold mb-2 group-hover:text-[#10b981] transition-colors duration-300">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Cómo funciona el proceso
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    number: "1",
                    title: "Cotiza en segundos",
                    description: "El cliente elige su auto y calcula su plan de financiamiento en nuestro simulador digital."
                  },
                  {
                    number: "2",
                    title: "Envía tu documentación",
                    description: "Solo necesitas: INE, comprobante de ingresos (3 meses), comprobante de domicilio y solicitud firmada."
                  },
                  {
                    number: "3",
                    title: "Evaluación y aprobación",
                    description: "Analizamos tu perfil y capacidad de pago en tiempo récord."
                  },
                  {
                    number: "4",
                    title: "Firma del contrato y entrega del vehículo",
                    description: "Firma electrónica y desembolso inmediato. La unidad se entrega con GPS instalado y seguro activo."
                  },
                  {
                    number: "5",
                    title: "Pagos mensuales claros y puntuales",
                    description: "Todos los pagos son fijos y sin cargos ocultos."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center text-white text-2xl font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#10b981] to-[#047857] text-white hover:opacity-90 font-semibold text-lg px-8 py-6"
                  onClick={handleSimuladorClick}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Cotizar Ahora
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Condiciones Financieras */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Condiciones Financieras Principales
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-[#10b981]">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#10b981] to-[#047857] text-white">
                          <th className="py-4 px-6 text-left font-bold">Concepto</th>
                          <th className="py-4 px-6 text-left font-bold">Detalle</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { concepto: "Enganche mínimo", detalle: "30%" },
                          { concepto: "Monto financiado", detalle: "$100,000 – $500,000 MXN" },
                          { concepto: "Plazo", detalle: "12 a 48 meses" },
                          { concepto: "Comisión por apertura", detalle: "3%" },
                          { concepto: "Tasa de interés fija anual", detalle: "Competitiva (según perfil y plazo)" },
                          { concepto: "Seguro de auto", detalle: "Incluido en el financiamiento" },
                          { concepto: "Cobertura", detalle: "Vehículos modelo 2016 a 2024" }
                        ].map((row, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="py-4 px-6 font-semibold">{row.concepto}</td>
                            <td className="py-4 px-6 text-gray-700">{row.detalle}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#10b981] to-[#047857] text-white hover:opacity-90 font-semibold text-lg px-8 py-6"
                  onClick={handleSimuladorClick}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Simular mi Crédito
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seguridad y Transparencia */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-[#10b981]">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold">
                      Seguridad y transparencia
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Fincentiva es una <strong>Sociedad Financiera de Objeto Múltiple (SOFOM ENR)</strong>, 
                    registrada ante la <strong>CONDUSEF</strong> y la <strong>Secretaría de Economía</strong>, 
                    con contratos de adhesión autorizados y un servicio orientado a la <strong>protección del usuario</strong>.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Tu crédito y tu información están respaldados bajo los más altos estándares de cumplimiento y confidencialidad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                ¿Listo para comenzar?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-2 border-[#10b981]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-[#10b981] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-2">Ubicación</h4>
                        <p className="text-gray-600">San Antonio 2340, Lomas de San Francisco, Monterrey, N.L.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#10b981]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-[#10b981] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-2">Teléfono</h4>
                        <p className="text-gray-600">+52 (81) 1737 8485</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#10b981]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-[#10b981] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-2">Correo</h4>
                        <p className="text-gray-600 text-sm break-all">
                          amedina@fincentiva.com.mx<br />
                          digital@fincentiva.com.mx
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#10b981]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Globe className="h-6 w-6 text-[#10b981] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-2">Sitio Web</h4>
                        <a href="https://www.fincentiva.com.mx" className="text-[#10b981] hover:underline">
                          www.fincentiva.com.mx
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#10b981] to-[#047857] text-white hover:opacity-90 font-semibold text-lg px-8 py-6"
                  onClick={handleSimuladorClick}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Ir al Simulador
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Message */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fincentiva: Crédito que te mueve
            </h2>
            <p className="text-xl text-gray-600 italic">
              "Tu agencia crece. Tu cliente avanza. Nosotros lo hacemos posible."
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}