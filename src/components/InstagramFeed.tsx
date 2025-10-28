"use client"

import { Instagram } from "lucide-react"

interface InstagramFeedProps {
  username?: string
}

export default function InstagramFeed({ username = "fincentivacreditos" }: InstagramFeedProps) {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#10b981] to-[#047857] text-white px-6 py-3 rounded-full mb-4">
          <Instagram className="h-5 w-5" />
          <span className="font-semibold">Síguenos en Instagram</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          @{username}
        </h3>
        <p className="text-gray-600">
          Mantente al día con nuestras últimas actualizaciones
        </p>
      </div>

      {/* Instagram Embed Widget */}
      <div className="relative w-full bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100">
        {/* Using Juicer.io embed - Free service for Instagram feeds */}
        <div 
          className="w-full min-h-[600px] md:min-h-[800px]"
          style={{ 
            background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
            padding: '20px'
          }}
        >
          <iframe
            src={`https://www.juicer.io/api/feeds/fincentivacreditos/iframe`}
            frameBorder="0"
            width="100%"
            height="800"
            style={{ 
              display: 'block',
              margin: '0 auto',
              border: 'none'
            }}
            title="Instagram Feed"
            loading="lazy"
          />
        </div>

        {/* Fallback - Direct link to Instagram */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
          <a
            href={`https://www.instagram.com/${username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Instagram className="h-5 w-5" />
            Ver perfil completo
          </a>
        </div>
      </div>

      {/* Alternative: Manual Grid with recent posts */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          El feed se actualiza automáticamente con nuestras últimas publicaciones.
        </p>
      </div>
    </div>
  )
}
