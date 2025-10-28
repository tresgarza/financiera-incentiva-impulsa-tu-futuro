import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Financiera Incentiva - Crédito Vía Nómina 100% Digital",
  description:
    "Soluciones financieras ágiles, seguras y transparentes. Crédito vía nómina sin aval para colaboradores de empresas en México. Respuesta en 48 horas.",
  keywords: [
    "crédito vía nómina",
    "préstamos personales México",
    "crédito sin aval",
    "financiamiento empresarial",
    "SOFOM",
    "crédito digital",
  ],
  authors: [{ name: "Financiera Incentiva" }],
  openGraph: {
    title: "Financiera Incentiva | Tu Crédito Vía Nómina en 48 Horas ⚡",
    description: "💰 Crédito sin aval, sin buró | 🚀 Respuesta inmediata | ✅ 15 años de confianza | 14+ mil mexicanos ya confían en nosotros",
    url: "https://fincentiva.com.mx",
    siteName: "Financiera Incentiva",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_fincentiva_original-1761671469351.png?width=1200&height=630&resize=contain",
        width: 1200,
        height: 630,
        alt: "Financiera Incentiva - Crédito Vía Nómina",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financiera Incentiva | Tu Crédito Vía Nómina en 48 Horas ⚡",
    description: "💰 Crédito sin aval, sin buró | 🚀 Respuesta inmediata | ✅ 15 años de confianza",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo_fincentiva_original-1761671469351.png?width=1200&height=630&resize=contain"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <Toaster />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}