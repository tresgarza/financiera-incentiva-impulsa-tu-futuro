"use client"

import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, TrendingUp, Shield, Users, Sparkles, CheckCircle, ChevronRight, Building2, CreditCard, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)
  const [counts, setCounts] = useState({ credits: 0, dispersed: 0, years: 0, satisfaction: 0 })

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        credits: Math.floor(15000 * progress),
        dispersed: Math.floor(500 * progress),
        years: Math.floor(15 * progress),
        satisfaction: Math.floor(97 * progress),
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setCounts({ credits: 15000, dispersed: 500, years: 15, satisfaction: 97 })
      }
    }, stepDuration)
  }
  const logos = [
    { name: "Cadtoner", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Logo_empresa_cadtoner-1761674379320.png?width=300&height=300&resize=contain", size: "normal" },
    { name: "CartoTec", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_empresa_cartotec-1761674379088.png?width=300&height=300&resize=contain", size: "large" },
    { name: "CTR Scientific", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_empresa_ctr-1761675424298.png?width=300&height=300&resize=contain", size: "large" },
    { name: "Etimex", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_empresa_etimex-1761674379157.png?width=300&height=300&resize=contain", size: "normal" },
    { name: "Fortezza", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_empresa_fortezza-1761674379196.png?width=300&height=300&resize=contain", size: "normal" },
    { name: "LECO", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_empresa_leco-1761675424246.png?width=300&height=300&resize=contain", size: "large" },
    { name: "Logistorage", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_empresa_logistorage-1761674379372.png?width=300&height=300&resize=contain", size: "large" },
    { name: "Mulligans", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_empresa_mulligans-1761674379452.png?width=300&height=300&resize=contain", size: "normal" },
    { name: "Plastypel", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_empresa_plastypel-1761674379203.png?width=300&height=300&resize=contain", size: "normal" },
    { name: "Quanti", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_empresa_quanti-1761675424164.png?width=300&height=300&resize=contain", size: "large" },
    { name: "Litográfica Matamoros", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_empresa_matamoros-1761674379360.png?width=300&height=300&resize=contain", size: "normal" }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857] text-white">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070')] bg-cover bg-center opacity-10" />
          
          {/* Floating shapes for depth */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
          
          <div className="container relative mx-auto px-4 py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Crédito vía nómina 100% digital que impulsa tu futuro financiero
                </h1>
                <p className="text-lg md:text-xl text-white/90">
                  Brindamos soluciones financieras ágiles, seguras y transparentes a colaboradores de empresas en todo México. Cuando más lo necesitas, estamos para apoyarte.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#047857] hover:bg-gray-100 hover:scale-105 text-lg px-8 transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <Link href="https://credito.fincentiva.com.mx" target="_blank" rel="noopener noreferrer">
                      Solicitar Crédito
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-white text-[#047857] hover:bg-gray-100 hover:scale-105 text-lg px-8 transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <Link href="https://wa.me/5218119803808" target="_blank" rel="noopener noreferrer">Contáctanos</Link>
                  </Button>
                </div>
              </div>
              <div className={`relative hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#047857] rounded-2xl blur-2xl opacity-20 animate-pulse" />
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot-2025-10-28-at-12.57.41-p.m-1761677870927.png?width=8000&height=8000&resize=contain"
                  alt="Soluciones financieras Financiera Incentiva"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white" ref={statsRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: counts.credits, suffix: "K+", label: "Créditos Otorgados" },
                { value: counts.dispersed, suffix: "M+", label: "Millones Dispersados", prefix: "$" },
                { value: counts.years, suffix: "+", label: "Años de Experiencia" },
                { value: counts.satisfaction, suffix: "%", label: "Satisfacción" },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#047857] group-hover:text-[#10b981] transition-colors duration-300">
                    {stat.prefix}{stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 observe-animation opacity-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Nuestras Soluciones
              </h2>
              <p className="text-lg text-gray-600">
                Productos financieros diseñados para cada necesidad
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: CreditCard,
                  title: "Crédito Vía Nómina",
                  description: "Sin aval y sin consultar buró. Obtén tu dinero de forma rápida con descuento automático en tu nómina.",
                  features: ["Proceso 100% digital", "Respuesta en 48h", "Sin aval"],
                  href: "/colaboradores"
                },
                {
                  icon: Building2,
                  title: "Para Empresas",
                  description: "Fortalezca su equipo ofreciendo una solución financiera que mejora su calidad de vida y aumenta su lealtad.",
                  features: ["Cero riesgo financiero", "Mejora clima laboral", "Proceso simplificado"],
                  href: "/empresas"
                },
                {
                  icon: TrendingUp,
                  title: "Crédito Automotriz",
                  description: "Financia el auto de tus sueños con planes flexibles y tasas preferenciales.",
                  features: ["Tasas preferenciales", "Planes hasta 60 meses", "Autos nuevos y seminuevos"],
                  href: "https://autos.fincentiva.com.mx"
                },
              ].map((service, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-[#10b981] observe-animation opacity-0 bg-white/80 backdrop-blur-sm hover:bg-white"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#10b981] transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm group/item">
                          <CheckCircle className="h-4 w-4 text-[#10b981] mr-2 group-hover/item:scale-125 transition-transform duration-300" />
                          <span className="group-hover/item:translate-x-1 transition-transform duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="ghost" 
                      className="text-[#047857] hover:text-[#10b981] p-0 group/btn"
                      asChild
                    >
                      <Link href={service.href} target={service.href.startsWith('http') ? '_blank' : undefined}>
                        Saber más
                        <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-[#10b981] to-[#047857] text-white relative overflow-hidden">
          {/* Animated background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
          
          <div className="container relative mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="observe-animation opacity-0">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  ¿Por qué elegir Financiera Incentiva?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: Sparkles,
                      title: "Respuesta en menos de 48 horas",
                      description: "Mientras otros procesos tardan semanas, nuestro sistema especializado en nómina te da certeza inmediata."
                    },
                    {
                      icon: Shield,
                      title: "14 años construyendo confianza",
                      description: "Operamos como SOFOM ENR desde 2010, con registro ante CONDUSEF y reportes a Buró de Crédito."
                    },
                    {
                      icon: Users,
                      title: "Especialización que da resultados",
                      description: "Nuestro enfoque exclusivo en crédito vía nómina nos permite aprobar solicitudes que otros rechazan."
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-white/90">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative observe-animation opacity-0">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur-2xl" />
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                  alt="Team Success"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Empresas que Confían en Nosotros */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 observe-animation opacity-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Algunas de las empresas que confían en nosotros
              </h2>
              <p className="text-base text-gray-600">
                Más de 50 empresas líderes ya ofrecen bienestar financiero a sus colaboradores
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto observe-animation opacity-0">
              <Card className="border-2 border-[#10b981]/20 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    {/* Fila Superior - 6 logos */}
                    <div className="flex flex-wrap gap-6 justify-center items-center">
                      {logos.slice(0, 6).map((logo, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-center p-3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer"
                        >
                          <Image
                            src={logo.url}
                            alt={logo.name}
                            width={logo.size === "large" ? 120 : 80}
                            height={logo.size === "large" ? 60 : 40}
                            className={logo.size === "large" ? "object-contain h-14 w-auto" : "object-contain h-10 w-auto"}
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Fila Inferior - 6 logos */}
                    <div className="flex flex-wrap gap-6 justify-center items-center">
                      {logos.slice(6, 12).map((logo, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-center p-3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer"
                        >
                          <Image
                            src={logo.url}
                            alt={logo.name}
                            width={logo.size === "large" ? 120 : 80}
                            height={logo.size === "large" ? 60 : 40}
                            className={logo.size === "large" ? "object-contain h-14 w-auto" : "object-contain h-10 w-auto"}
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 observe-animation opacity-0">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Instagram className="h-8 w-8 text-[#10b981] animate-pulse" />
                <h2 className="text-3xl md:text-5xl font-bold">
                  Síguenos en Instagram
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                Mantente al día con nuestras últimas noticias, consejos financieros y actualizaciones
              </p>
              <Button 
                variant="outline" 
                className="border-[#10b981] text-[#047857] hover:bg-[#10b981]/10 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                asChild
              >
                <Link href="https://www.instagram.com/fincentivacreditos/" target="_blank" rel="noopener noreferrer">
                  @fincentivacreditos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="max-w-6xl mx-auto observe-animation opacity-0">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-4 md:p-8 border-2 border-[#10b981]/20 transition-all duration-300">
                <Script 
                  src="https://assets.juicer.io/embed.js" 
                  strategy="lazyOnload"
                />
                <link 
                  href="https://assets.juicer.io/embed.css" 
                  media="all" 
                  rel="stylesheet" 
                  type="text/css" 
                />
                <ul className="juicer-feed" data-feed-id="fincentivacreditos" data-per="6"></ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 observe-animation opacity-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Listo para transformar tu futuro financiero?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Nuestros expertos están listos para ayudarte. Contáctanos hoy y descubre 
                  cómo podemos impulsar tu crecimiento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#10b981] to-[#047857] hover:from-[#059669] hover:to-[#065f46] text-lg px-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <Link href="https://credito.fincentiva.com.mx" target="_blank" rel="noopener noreferrer">
                      Solicitar Crédito
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8 border-2 hover:scale-105 transition-all duration-300 hover:border-[#10b981] hover:bg-[#10b981]/10"
                    asChild
                  >
                    <Link href="/nosotros">Conocer Más</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}