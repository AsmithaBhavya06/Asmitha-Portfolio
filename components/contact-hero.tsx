"use client"

import { useEffect, useState } from "react"
import { Mail, MessageCircle, Coffee } from "lucide-react"

export default function ContactHero() {
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
              Let's Connect
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on innovative projects, or simply chat about
              technology and AI. Let's build something amazing together!
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                <Mail className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Email Me</h3>
                <p className="text-slate-400 text-sm text-center">Quick response guaranteed</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                <MessageCircle className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Let's Chat</h3>
                <p className="text-slate-400 text-sm text-center">Open to discussions</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                <Coffee className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Collaborate</h3>
                <p className="text-slate-400 text-sm text-center">Ready for new projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
