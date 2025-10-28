"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#047857] to-[#065f46] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Financiera Incentiva</h3>
            <p className="text-sm text-white/80">
              Financiera Incentiva, S.A.P.I. de C.V., SOFOM E.N.R.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  San Antonio 2340, Col. Lomas de San Francisco<br />
                  Monterrey, N.L., C.P. 64710
                </span>
              </div>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/colaboradores" className="text-white/80 hover:text-white transition-colors">
                  Crédito Vía Nómina
                </Link>
              </li>
              <li>
                <Link href="https://autos.fincentiva.com.mx" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  Crédito Automotriz
                </Link>
              </li>
              <li>
                <Link href="/empresas" className="text-white/80 hover:text-white transition-colors">
                  Soluciones Empresariales
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nosotros" className="text-white/80 hover:text-white transition-colors">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white/80">
                    <strong className="text-white">WhatsApp:</strong>{" "}
                    <a href="https://wa.me/528119803808" className="hover:text-white transition-colors">
                      +52 81 1980 3808
                    </a>
                  </div>
                  <div className="text-white/80 mt-1">
                    <strong className="text-white">Llamada/Oficina:</strong>{" "}
                    <a href="tel:8182180477" className="hover:text-white transition-colors">
                      81 8218 0477
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:digital@fincentiva.com.mx" className="text-white/80 hover:text-white transition-colors">
                  digital@fincentiva.com.mx
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <strong className="text-white">Horarios de Atención:</strong><br />
                  Lunes a Viernes 9:00 AM a 5:00 PM
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal and Regulatory Info */}
        <div className="border-t border-white/20 mt-8 pt-8 space-y-6">
          {/* SOFOM Legal Text */}
          <div className="text-xs text-white/70 leading-relaxed max-w-5xl">
            <p className="mb-3">
              Financiera Incentiva, S.A.P.I. de C.V., SOFOM, E.N.R., está constituido y operando con carácter de SOFOM E.N.R. para lo cual no requiere autorización de la Secretaría de Hacienda y Crédito Público, y está sujeto a la supervisión de la Comisión Nacional Bancaria y de Valores, únicamente para lo dispuesto en el art. 56 de la Ley General de Organizaciones y Actividades Auxiliares de Crédito.
            </p>
            <p className="mb-3">
              El Buró de Entidades Financieras contiene información de Financiera Incentiva, S.A.P.I. de C.V., SOFOM, E.N.R., sobre nuestro desempeño frente a los usuarios por la prestación de productos y servicios.
              Te invitamos a consultarlo en la página{" "}
              <a 
                href="https://www.buro.gob.mx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/90 underline"
              >
                https://www.buro.gob.mx
              </a>
              {" "}o nuestra página de internet{" "}
              <a 
                href="https://fincentiva.com.mx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/90 underline"
              >
                https://fincentiva.com.mx
              </a>
            </p>
            <p>
              <strong className="text-white">Titular de la UNE</strong> | Adolfo Medina Figueroa |{" "}
              <a 
                href="mailto:amedina@fincentiva.com.mx"
                className="text-white hover:text-white/90 underline"
              >
                amedina@fincentiva.com.mx
              </a>
            </p>
          </div>

          {/* Registration Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm border-t border-white/10 pt-6">
            <div className="text-white/80 space-y-1">
              <p>Registro CONDUSEF: 4563-450-038762</p>
              <p>Reportamos a Buró de Crédito</p>
            </div>
            <div className="text-white/80 text-left md:text-right">
              <p>© 2025 Financiera Incentiva. Todos los derechos reservados.</p>
              <div className="flex flex-wrap gap-3 mt-2">
                <a 
                  href="https://fincentiva-feb21-2025-front.vercel.app/docs/aviso-privacidad.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline"
                >
                  Política de Privacidad
                </a>
                <span>|</span>
                <a 
                  href="https://fincentiva-feb21-2025-front.vercel.app/docs/Disposiciones-Legales.docx.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline"
                >
                  Términos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}