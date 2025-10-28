"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_fincentiva_original-1761671469351.png?width=8000&height=8000&resize=contain"
              alt="Financiera Incentiva"
              width={180}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/colaboradores" 
              className="text-sm font-medium transition-colors hover:text-[#10b981]"
            >
              Para Colaboradores
            </Link>
            <Link 
              href="/empresas" 
              className="text-sm font-medium transition-colors hover:text-[#10b981]"
            >
              Para Empresas
            </Link>
            <Link 
              href="/autos" 
              className="text-sm font-medium transition-colors hover:text-[#10b981]"
            >
              Crédito Automotriz
            </Link>
            <Link 
              href="/nosotros" 
              className="text-sm font-medium transition-colors hover:text-[#10b981]"
            >
              Nuestra Historia
            </Link>
            <Button 
              className="bg-gradient-to-r from-[#10b981] to-[#047857] hover:from-[#059669] hover:to-[#065f46] text-white"
              asChild
            >
              <Link href="https://credito.fincentiva.com.mx" target="_blank" rel="noopener noreferrer">
                Solicitar Crédito
              </Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link 
                  href="/colaboradores" 
                  className="text-lg font-medium transition-colors hover:text-[#10b981]"
                >
                  Para Colaboradores
                </Link>
                <Link 
                  href="/empresas" 
                  className="text-lg font-medium transition-colors hover:text-[#10b981]"
                >
                  Para Empresas
                </Link>
                <Link 
                  href="/autos" 
                  className="text-lg font-medium transition-colors hover:text-[#10b981]"
                >
                  Crédito Automotriz
                </Link>
                <Link 
                  href="/nosotros" 
                  className="text-lg font-medium transition-colors hover:text-[#10b981]"
                >
                  Nuestra Historia
                </Link>
                <Button 
                  className="bg-gradient-to-r from-[#10b981] to-[#047857] hover:from-[#059669] hover:to-[#065f46] text-white"
                  asChild
                >
                  <Link href="https://credito.fincentiva.com.mx" target="_blank" rel="noopener noreferrer">
                    Solicitar Crédito
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}