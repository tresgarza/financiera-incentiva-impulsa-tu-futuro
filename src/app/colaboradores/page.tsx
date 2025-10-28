"use client"

import Link from "next/link"
import Image from "next/image"
import { CreditCard, Car, Home, Plane, GraduationCap, CheckCircle, ArrowRight, FileText, DollarSign, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ColaboradoresPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857] text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070')] bg-cover bg-center opacity-10" />
          <div className="container relative mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Tu bienestar financiero, a solo unos clics
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Descubre lo fácil que es obtener el impulso económico que necesitas, directamente en tu nómina.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#047857] hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link href="https://credito.fincentiva.com.mx" target="_blank" rel="noopener noreferrer">
                  Solicita tu Crédito Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Nuestras Soluciones */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Nuestras Soluciones para Ti
              </h2>
              <p className="text-lg text-gray-600">
                Elige el crédito que se adapta a tus necesidades
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: CreditCard,
                  title: "Crédito Vía Nómina",
                  description: "Sin aval y sin consultar buró. Obtén tu dinero de forma rápida con descuento automático en tu nómina.",
                  features: ["Sin aval ni garantías", "Respuesta en menos de 48h", "Incluye seguro de vida sin costo"],
                  link: "https://credito.fincentiva.com.mx",
                  buttonText: "Más Información"
                },
                {
                  icon: Car,
                  title: "Crédito Automotriz",
                  description: "Financia el auto de tus sueños con planes flexibles y tasas preferenciales por ser parte de una empresa con convenio.",
                  features: ["Planes hasta 60 meses", "Tasas preferenciales", "Autos nuevos y seminuevos"],
                  link: "https://autos.fincentiva.com.mx",
                  buttonText: "Consultar Planes"
                }
              ].map((solution, index) => (
                <Card key={index} className="border-2 hover:border-[#10b981] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center mb-6">
                      <solution.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-[#10b981] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#10b981] to-[#047857] hover:from-[#059669] hover:to-[#065f46]"
                      asChild
                    >
                      <Link href={solution.link} target="_blank" rel="noopener noreferrer">
                        {solution.buttonText}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requisitos para Solicitar Crédito */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Requisitos para Solicitar Crédito
              </h2>
              <p className="text-lg text-gray-600">
                Todo lo que necesitas para comenzar tu solicitud
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="border-2 border-[#10b981] shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-8">
                    {/* Registro */}
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">1. Regístrate en el Portal</h3>
                        <p className="text-gray-600 mb-2">
                          Accede a{" "}
                          <Link 
                            href="https://credito.fincentiva.com.mx" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#10b981] font-semibold hover:underline"
                          >
                            credito.fincentiva.com.mx
                          </Link>
                          {" "}con el código de tu empresa y tu número de teléfono.
                        </p>
                      </div>
                    </div>

                    {/* Simular */}
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">2. Simula y Solicita tu Crédito</h3>
                        <p className="text-gray-600">
                          Utiliza nuestro simulador en el portal web para ver tu plan de pagos personalizado.
                        </p>
                      </div>
                    </div>

                    {/* Documentación */}
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">3. Envía tu Documentación</h3>
                        <p className="text-gray-600 mb-4">Comparte con tu asesor los siguientes documentos:</p>
                        <ul className="space-y-2">
                          {[
                            "Copia de identificación oficial vigente (INE o pasaporte)",
                            "Comprobante de domicilio reciente (no mayor a 3 meses)",
                            "Recibos de nómina del último mes",
                            "2 referencias personales"
                          ].map((doc, idx) => (
                            <li key={idx} className="flex items-start text-gray-600">
                              <CheckCircle className="h-5 w-5 text-[#10b981] mr-2 flex-shrink-0 mt-0.5" />
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Condiciones Financieras */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Condiciones Financieras
              </h2>
              <p className="text-lg text-gray-600">
                Créditos flexibles diseñados para ti
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Monto",
                  value: "$5,000 - $50,000",
                  description: "Créditos desde 5 mil hasta 50 mil pesos",
                  icon: DollarSign
                },
                {
                  title: "Plazo",
                  value: "Hasta 12 meses",
                  description: "Hasta 52 semanas para pagar",
                  icon: Clock
                },
                {
                  title: "Forma de Pago",
                  value: "Vía Nómina",
                  description: "Descuento directo en tu nómina",
                  icon: CreditCard
                },
                {
                  title: "Antigüedad",
                  value: "Mínimo 1 año",
                  description: "Trabajando en la empresa",
                  icon: Users
                }
              ].map((condition, index) => (
                <Card key={index} className="border-2 hover:border-[#10b981] transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center mb-4 mx-auto">
                      <condition.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800">{condition.title}</h3>
                    <p className="text-2xl font-bold text-[#10b981] mb-2">{condition.value}</p>
                    <p className="text-sm text-gray-600">{condition.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Flujo del Proceso */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Flujo del Proceso
              </h2>
              <p className="text-lg text-gray-600">
                Tu crédito en 7 pasos simples y rápidos
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  step: "1",
                  title: "Ingresa al Portal",
                  description: "El empleado ingresa a credito.fincentiva.com.mx"
                },
                {
                  step: "2",
                  title: "Simula tu Crédito en Segundos",
                  description: "Ingresa el monto, plazo y frecuencia de pago que mejor se adapte a tus necesidades."
                },
                {
                  step: "3",
                  title: "Visualiza tu Plan de Amortización",
                  description: "Revisa tu tabla de pagos detallada y asegúrate de que se ajusta a tu presupuesto."
                },
                {
                  step: "4",
                  title: "Sube tu Documentación Digital",
                  description: "Carga tus documentos de forma segura desde cualquier dispositivo."
                },
                {
                  step: "5",
                  title: "Evaluación y Aprobación",
                  description: "Recibe la evaluación y aprobación por parte del equipo de Fincentiva."
                },
                {
                  step: "6",
                  title: "Firma Electrónica",
                  description: "Firma el contrato y mandato irrevocable de forma electrónica. Sin papeleo."
                },
                {
                  step: "7",
                  title: "Depósito Directo",
                  description: "El crédito se deposita directamente en tu cuenta de nómina. ¡Listo para usar!"
                }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-[#10b981] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center text-white text-xl font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tu Futuro Empieza Hoy */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Tu Futuro Empieza Hoy
                </h2>
                <h3 className="text-2xl font-semibold text-[#10b981] mb-4">
                  Un Aliado Financiero que Entiende tus Metas
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Sabemos que tienes grandes planes. Ya sea consolidar deudas, remodelar tu casa, planear unas vacaciones o invertir en tu educación, nuestro crédito de nómina está diseñado para darte el impulso que necesitas de una forma sencilla, rápida y transparente.
                </p>
                <p className="text-lg text-gray-600">
                  Olvídate de procesos complicados y burocracia. Con nosotros, tienes el control de tus finanzas al alcance de tu mano.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/TRES-1761672133873.jpg?width=8000&height=8000&resize=contain"
                  alt="Equipo colaborando"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ¿Cuál es tu Próximo Proyecto? */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                ¿Cuál es tu Próximo Proyecto?
              </h2>
              <p className="text-lg text-gray-600">
                Impulsa tus sueños con nuestras soluciones
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: CreditCard,
                  title: "Consolida tus Deudas",
                  description: "Unifica todos tus pagos en uno solo con una tasa preferencial y pon en orden tus finanzas personales."
                },
                {
                  icon: Home,
                  title: "Renueva tu Hogar",
                  description: "Dale a tu espacio el cambio que necesita. Remodela tu cocina, amplía una habitación o crea tu oficina en casa."
                },
                {
                  icon: Plane,
                  title: "Vacaciones Soñadas",
                  description: "Viaja a ese destino que siempre has querido. Crea recuerdos inolvidables con tu familia sin desequilibrar tu presupuesto."
                },
                {
                  icon: GraduationCap,
                  title: "Educación e Inversión",
                  description: "Invierte en tu futuro o el de tus hijos. Paga una maestría, un diplomado o el curso que te ayudará a crecer."
                }
              ].map((project, index) => (
                <Card key={index} className="border-2 hover:border-[#10b981] transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center mb-4 mx-auto">
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Así de Sencillo - 4 Pasos */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Así de Sencillo
              </h2>
              <p className="text-lg text-gray-600">
                Tu solicitud en 4 pasos interactivos
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: "1",
                  title: "Ingresa con tu código de empresa",
                  description: "Accede a nuestro portal exclusivo con el código que te proporcionó tu empresa y tu número de teléfono. Tu viaje hacia el bienestar financiero comienza aquí."
                },
                {
                  step: "2",
                  title: "Simula tu crédito y elige tu plan",
                  description: "Utiliza nuestro simulador interactivo para explorar diferentes montos y plazos. Elige el plan de pagos que mejor se adapte a tu presupuesto y necesidades."
                },
                {
                  step: "3",
                  title: "Sube tus documentos y firma en línea",
                  description: "Digitaliza y sube tus documentos de forma segura. Revisa tu contrato y fírmalo electrónicamente desde cualquier dispositivo. Sin papeleo, sin filas."
                },
                {
                  step: "4",
                  title: "Recibe tu dinero en tu cuenta",
                  description: "Una vez aprobado, el dinero se deposita directamente en tu cuenta de nómina. ¡Así de fácil! Los pagos se descontarán automáticamente."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-[#10b981] to-[#047857] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                ¿Listo para dar el siguiente paso?
              </h2>
              <p className="text-lg md:text-xl text-white/90">
                Solicita tu crédito hoy y comienza a hacer realidad tus proyectos
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#047857] hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link href="https://credito.fincentiva.com.mx" target="_blank" rel="noopener noreferrer">
                  Solicitar Crédito Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}