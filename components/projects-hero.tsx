"use client"

import { useEffect, useState } from "react"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function ProjectsHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Innovative solutions showcasing expertise in AI, machine learning, and cutting-edge software development
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                <Code className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Technical Excellence</h3>
                <p className="text-slate-400 text-sm text-center">Built with modern technologies and best practices</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                <Lightbulb className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Innovation</h3>
                <p className="text-slate-400 text-sm text-center">Creative solutions to real-world problems</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                <Rocket className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Impact</h3>
                <p className="text-slate-400 text-sm text-center">Meaningful applications with practical benefits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
