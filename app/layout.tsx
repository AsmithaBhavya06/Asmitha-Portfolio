import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Asmitha Bhavya - AI/ML Engineer & Software Developer",
  description:
    "Portfolio of Asmitha Bhavya, a passionate software engineer specializing in AI, machine learning, and innovative technology solutions.",
  keywords: ["AI Engineer", "Machine Learning", "Software Developer", "Deep Learning", "Python", "Portfolio"],
  authors: [{ name: "Asmitha Bhavya" }],
  openGraph: {
    title: "Asmitha Bhavya - AI/ML Engineer & Software Developer",
    description: "Portfolio showcasing innovative AI and software development projects",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="relative">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
