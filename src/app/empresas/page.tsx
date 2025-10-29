"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Shield, Users, Award, Lock, TrendingUp, Zap, FileText, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { toast } from "sonner"

export default function EmpresasPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [empleados, setEmpleados] = useState(250)
  const [productividad, setProductividad] = useState(5)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    empresa: "",
    contacto: "",
    email: "",
    telefono: "",
    mensaje: ""
  })

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
  
  const calcularROI = () => {
    return empleados * (productividad / 100) * 15000
  }
  
  const roi = calcularROI()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.empresa || !formData.contacto || !formData.email || !formData.telefono) {
      toast.error("Por favor complete todos los campos requeridos")
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor ingrese un correo electrónico válido")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("¡Solicitud enviada exitosamente! Nos pondremos en contacto pronto.")
        // Reset form
        setFormData({
          empresa: "",
          contacto: "",
          email: "",
          telefono: "",
          mensaje: ""
        })
      } else {
        toast.error(data.error || "Error al enviar la solicitud. Por favor intente nuevamente.")
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error("Error al enviar la solicitud. Por favor intente nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSolicitarConvenio = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactoSection = document.getElementById('contacto')
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
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
          {/* Animated effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center opacity-10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
          
          <div className="container relative mx-auto px-4 py-24 md:py-32">
            <div className={`max-w-4xl mx-auto text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Afiliación Empresarial Fincentiva
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Crédito vía nómina sin riesgos para tu empresa. Ayudamos a las empresas a mejorar el bienestar financiero de sus colaboradores sin afectar su flujo ni asumir ningún riesgo.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#047857] hover:bg-gray-100 hover:scale-105 text-lg px-8 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleSolicitarConvenio}
              >
                Solicitar Convenio
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
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

        {/* Beneficios para la Empresa Afiliada */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 observe-animation opacity-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Beneficios para la Empresa Afiliada
              </h2>
              <p className="text-lg text-gray-600">
                ¿Por qué asociarse con Fincentiva?
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Lock,
                  title: "Cero Riesgo Financiero",
                  description: "Tu empresa no funge como aval ni obligado solidario. Fincentiva asume completamente la evaluación, otorgamiento, cobranza y seguimiento del crédito."
                },
                {
                  icon: Users,
                  title: "Apoyo al Bienestar Laboral",
                  description: "Ofrece a tus colaboradores acceso a créditos inmediatos para resolver imprevistos o alcanzar metas personales, sin comprometer su liquidez."
                },
                {
                  icon: Zap,
                  title: "Operación Simple y Automatizada",
                  description: "Nos coordinamos directamente con tu área de Recursos Humanos para gestionar los descuentos vía nómina de forma segura."
                }
              ].map((benefit, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:border-[#10b981] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 observe-animation opacity-0 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#10b981] transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requisitos para Afiliar */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 observe-animation opacity-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Requisitos para Afiliar tu Empresa
              </h2>
              <p className="text-lg text-gray-600">
                Para formalizar la afiliación, se firma un Convenio de Prestación de Servicios Crediticios y Financieros
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-[#10b981] hover:shadow-2xl transition-shadow duration-500 observe-animation opacity-0 group">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-[#10b981] transition-colors duration-300">Documentos Requeridos:</h3>
                  <div className="space-y-4">
                    {[
                      "Acta Constitutiva y Poder Notarial del representante legal",
                      "Identificación oficial del representante legal",
                      "RFC y comprobante de domicilio fiscal de la empresa",
                      "Constancia de situación fiscal actualizada",
                      "Carta de autorización de descuentos vía nómina",
                      "Datos bancarios para referencia (no se cargan fondos)",
                      "Firmas del convenio y anexos"
                    ].map((req, index) => (
                      <div key={index} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle2 className="h-6 w-6 text-[#10b981] flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-300" />
                        <p className="text-gray-700">{req}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cómo Funciona el Esquema */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 observe-animation opacity-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Cómo Funciona el Esquema de Crédito Vía Nómina
              </h2>
              <p className="text-lg text-gray-600">
                Proceso simple y transparente de principio a fin
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  step: "1",
                  title: "Firma del Convenio de Afiliación",
                  description: "La empresa y Fincentiva formalizan el acuerdo para autorizar los descuentos."
                },
                {
                  step: "2",
                  title: "Promoción Interna",
                  description: "Fincentiva proporciona materiales digitales para comunicar el beneficio a los empleados."
                },
                {
                  step: "3",
                  title: "Solicitud del Colaborador",
                  description: "El empleado aplica directamente en credito.fincentiva.com.mx con su documentación digital."
                },
                {
                  step: "4",
                  title: "Validación por Recursos Humanos",
                  description: "La empresa confirma la relación laboral y autoriza el descuento del monto aprobado."
                },
                {
                  step: "5",
                  title: "Desembolso Inmediato",
                  description: "Fincentiva deposita el crédito en la cuenta del colaborador."
                },
                {
                  step: "6",
                  title: "Descuentos Automáticos",
                  description: "La empresa realiza la retención según la frecuencia de nómina (semanal, quincenal o mensual) y transfiere a Fincentiva."
                },
                {
                  step: "7",
                  title: "Liberación y Cierre",
                  description: "Una vez liquidado el crédito, Fincentiva notifica a Recursos Humanos para detener los descuentos."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 items-start group hover:translate-x-2 transition-transform duration-300 observe-animation opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#047857] flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#10b981] transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Responsabilidades de la Empresa */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 observe-animation opacity-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Responsabilidades de la Empresa Afiliada
              </h2>
              <p className="text-lg text-gray-600">
                Obligaciones claras y sencillas para un proceso transparente
              </p>
            </div>

            <div className="max-w-5xl mx-auto observe-animation opacity-0" style={{ animationDelay: '200ms' }}>
              <Card className="border-2 hover:shadow-2xl transition-shadow duration-500">
                <CardContent className="p-0 overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-[#10b981] to-[#047857] text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">Obligación</th>
                        <th className="px-6 py-4 text-left font-bold">Descripción</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        {
                          title: "Descontar vía nómina",
                          desc: "Retener la cantidad establecida en el mandato irrevocable del colaborador."
                        },
                        {
                          title: "Enterar los montos a Fincentiva",
                          desc: "Transferir las cantidades retenidas a la cuenta Banorte proporcionada dentro de los 3 días naturales posteriores al pago de nómina."
                        },
                        {
                          title: "Avisar bajas o licencias",
                          desc: "Notificar a Fincentiva dentro de los 3 días siguientes si un empleado causa baja, incapacidad o suspensión."
                        },
                        {
                          title: "Verificación de datos",
                          desc: "Facilitar la confirmación de datos laborales (nombre, puesto, antigüedad, sueldo)."
                        },
                        {
                          title: "Cero responsabilidad crediticia",
                          desc: "La empresa NO responde por adeudos de los empleados ni funge como garante."
                        }
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                          <td className="px-6 py-4 font-semibold hover:text-[#10b981] transition-colors duration-300">{row.title}</td>
                          <td className="px-6 py-4 text-gray-600">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Calculadora ROI */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 observe-animation opacity-0">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Calcule el Impacto Positivo
                </h2>
                <p className="text-lg text-gray-600">
                  Descubra cómo el bienestar financiero puede traducirse en productividad y retención. Ajuste los valores para ver un estimado del impacto en su organización.
                </p>
              </div>

              <Card className="border-2 border-[#10b981] hover:shadow-2xl transition-shadow duration-500 observe-animation opacity-0" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Número de Colaboradores: <span className="text-[#10b981] font-bold">{empleados.toLocaleString('es-MX')}</span>
                      </label>
                      <input 
                        type="range" 
                        min="50" 
                        max="5000" 
                        value={empleados}
                        onChange={(e) => setEmpleados(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10b981] hover:h-3 transition-all duration-300"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>50</span>
                        <span>5,000</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Aumento de Productividad Estimado: <span className="text-[#10b981] font-bold">{productividad}%</span>
                      </label>
                      <input 
                        type="range" 
                        min="1" 
                        max="20" 
                        value={productividad}
                        onChange={(e) => setProductividad(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10b981] hover:h-3 transition-all duration-300"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1%</span>
                        <span>20%</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#10b981] to-[#047857] text-white p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300 shadow-lg">
                      <p className="text-sm uppercase tracking-wide mb-2">Retorno Anual Estimado</p>
                      <p className="text-4xl md:text-5xl font-bold mb-2">
                        {roi.toLocaleString('es-MX', {
                          style: 'currency',
                          currency: 'MXN',
                          maximumFractionDigits: 0
                        })}
                      </p>
                      <p className="text-sm opacity-90">*Cifra ilustrativa basada en un salario promedio y la reducción de ausentismo.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Formulario de Contacto */}
        <section id="contacto" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 observe-animation opacity-0">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Contacto para Afiliaciones
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Complete el formulario y uno de nuestros asesores se pondrá en contacto para iniciar el proceso de afiliación.
                </p>
                
                <div className="bg-gradient-to-r from-[#10b981]/10 to-[#047857]/10 p-6 rounded-lg mb-8">
                  <div className="space-y-2 text-sm">
                    <p><strong>Correo:</strong> <a href="mailto:digital@fincentiva.com.mx" className="text-[#047857] hover:underline hover:text-[#10b981] transition-colors duration-300">digital@fincentiva.com.mx</a></p>
                    <p><strong>WhatsApp:</strong> <a href="https://wa.me/528119803808" className="text-[#047857] hover:underline hover:text-[#10b981] transition-colors duration-300">+52 81 1980 3808</a></p>
                    <p><strong>Llamada/Oficina:</strong> <a href="tel:8182180477" className="text-[#047857] hover:underline hover:text-[#10b981] transition-colors duration-300">81 8218 0477</a></p>
                    <p><strong>Horarios de Atención:</strong> Lunes a Viernes 9:00 AM a 5:00 PM</p>
                    <p><strong>Dirección:</strong> San Antonio 2340, Col. Lomas de San Francisco, Monterrey, N.L.</p>
                    <p><strong>Página:</strong> <a href="https://www.fincentiva.com.mx" className="text-[#047857] hover:underline hover:text-[#10b981] transition-colors duration-300">www.fincentiva.com.mx</a></p>
                  </div>
                </div>
              </div>

              <Card className="border-2 hover:shadow-2xl transition-shadow duration-500 observe-animation opacity-0" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                        Nombre de la Empresa *
                      </label>
                      <Input 
                        id="empresa" 
                        placeholder="Ej: Acme Corporation" 
                        value={formData.empresa}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="hover:border-[#10b981] transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="contacto" className="block text-sm font-medium mb-2">
                        Nombre del Contacto *
                      </label>
                      <Input 
                        id="contacto" 
                        placeholder="Ej: Juan Pérez" 
                        value={formData.contacto}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="hover:border-[#10b981] transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Correo Electrónico *
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="correo@empresa.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="hover:border-[#10b981] transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                        Teléfono *
                      </label>
                      <Input 
                        id="telefono" 
                        type="tel" 
                        placeholder="(81) 1234 5678" 
                        value={formData.telefono}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="hover:border-[#10b981] transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                        Mensaje (Opcional)
                      </label>
                      <Textarea 
                        id="mensaje" 
                        placeholder="Cuéntenos más sobre su empresa..." 
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="hover:border-[#10b981] transition-colors duration-300"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-[#10b981] to-[#047857] hover:from-[#059669] hover:to-[#065f46] hover:scale-105 hover:shadow-xl transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-12 text-center observe-animation opacity-0" style={{ animationDelay: '400ms' }}>
                <div className="bg-gradient-to-r from-[#10b981] to-[#047857] text-white p-8 rounded-lg hover:shadow-2xl transition-shadow duration-500">
                  <h3 className="text-2xl font-bold mb-3">Fincentiva: tu aliado financiero en Recursos Humanos</h3>
                  <p className="text-lg italic opacity-90">
                    "Apoyamos a tus colaboradores, fortalecemos el clima laboral y cuidamos la tranquilidad financiera de tu empresa."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}