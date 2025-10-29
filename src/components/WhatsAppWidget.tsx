"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export default function WhatsAppWidget() {
  return (
    <Link
      href="https://wa.me/5218119803808"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
        
        {/* Main button */}
        <div className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110">
          <MessageCircle className="h-8 w-8" />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm rounded-lg py-2 px-4 whitespace-nowrap">
          ¡Escríbenos por WhatsApp!
        </div>
      </div>
    </Link>
  )
}

