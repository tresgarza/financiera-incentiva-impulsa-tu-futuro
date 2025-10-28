"use client"

import Image from "next/image"
import { Shield, Users, Target, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import InstagramFeed from "@/components/InstagramFeed"

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857] text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center opacity-10" />
          <div className="container relative mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Comprometidos con el futuro financiero de México
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Nuestra historia se basa en la confianza, la innovación y el compromiso con nuestros clientes.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Misión y Visión */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 border-[#10b981]">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                  <p className="text-gray-600">
                    Ofrecer soluciones financieras accesibles y transparentes que impulsen el bienestar y crecimiento de los colaboradores y empresas en México, a través de tecnología y un servicio excepcional.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#10b981]">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center mb-6">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                  <p className="text-gray-600">
                    Ser la financiera digital líder y de mayor confianza en el país, reconocida por nuestra innovación, agilidad y el impacto positivo en la vida de nuestros clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-600">
                Una historia de crecimiento y confianza
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    year: "2010",
                    title: "Fundación",
                    description: "Nacemos en Monterrey para acercar crédito fácil y humano a más personas."
                  },
                  {
                    year: "2014",
                    title: "Nueva identidad",
                    description: "Adoptamos el nombre Financiera Incentiva y reforzamos nuestro compromiso con la transparencia."
                  },
                  {
                    year: "2022",
                    title: "Crédito automotriz",
                    description: "Lanzamos nuestro segundo gran producto: financiamiento de autos pensado para quienes necesitan una nueva oportunidad."
                  },
                  {
                    year: "2024",
                    title: "Comienza la transformación digital",
                    description: "Iniciamos la modernización integral de procesos y contratos, reduciendo el papel al mínimo."
                  },
                  {
                    year: "2025",
                    title: "Sistema 100% digital",
                    description: "Hoy todo el viaje del cliente se realiza en línea, desde la solicitud hasta la firma, manteniendo la cercanía que nos distingue."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center text-white text-xl font-bold">
                      {item.year}
                    </div>
                    <div className="flex-1 pt-4">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Nuestros Valores
              </h2>
              <p className="text-lg text-gray-600">
                Los principios que guían nuestro trabajo diario
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Confianza",
                  description: "Construimos relaciones duraderas basadas en la transparencia y el compromiso con nuestros clientes."
                },
                {
                  icon: Users,
                  title: "Cercanía",
                  description: "Mantenemos un trato humano y personalizado, entendiendo las necesidades únicas de cada persona."
                },
                {
                  icon: TrendingUp,
                  title: "Innovación",
                  description: "Utilizamos tecnología de vanguardia para ofrecer servicios ágiles y accesibles."
                }
              ].map((value, index) => (
                <Card key={index} className="border-2 hover:border-[#10b981] transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center mb-6 mx-auto">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-to-br from-[#10b981] to-[#047857] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Nuestro Impacto
              </h2>
              <p className="text-lg text-white/90">
                Años de experiencia respaldados por resultados
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: "15,000+", label: "Créditos Otorgados" },
                { value: "$500M+", label: "Millones Dispersados" },
                { value: "14", label: "Años de Experiencia" },
                { value: "97%", label: "Satisfacción" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-white/90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <InstagramFeed username="fincentivacreditos" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}