"use client"

import { useEffect, useState } from "react"
import { MapPin, GraduationCap, Award } from "lucide-react"

export default function AboutHero() {
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
              About Me
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Dedicated engineer with a passion for leveraging cutting-edge technologies to develop innovative
              solutions. Proficient in AI, neural networks, deep learning, and machine learning algorithms.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                <GraduationCap className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Education</h3>
                <p className="text-slate-400 text-sm text-center">
                  B.Tech CSE from Amity University Noida with 89.4 CGPA
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                <Award className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Achievements</h3>
                <p className="text-slate-400 text-sm text-center">IEEE Publications & Multiple Internships</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-slate-800/30 rounded-lg border border-slate-700">
                <MapPin className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-slate-400 text-sm text-center">Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
