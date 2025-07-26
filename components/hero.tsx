"use client"

import { useEffect, useState } from "react"
import { ArrowDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Asmitha Bhavya
          </h1>
          <div className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            <span className="inline-block animate-typing">AI/ML Engineer & Software Developer</span>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about leveraging cutting-edge technologies to develop innovative solutions. Specializing in
            artificial intelligence, machine learning, and scalable software systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View My Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-black hover:bg-slate-800 px-8 py-3 rounded-full transition-all duration-300"
              >
                Get In Touch
              </Button>
            </Link>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-slate-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
