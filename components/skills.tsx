"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"

const technicalSkills = [
  "Python",
  "Java",
  "C++",
  "C Language",
  "MySQL",
  "Machine Learning",
  "Deep Learning",
  "AI",
  "Data Science",
  "Neural Networks",
  "TensorFlow",
  "Keras",
  "Computer Vision",
  "Natural Language Processing",
  "Data Structures",
  "Networking",
]

const softSkills = [
  "Problem Solving",
  "Leadership",
  "Communication",
  "Team Collaboration",
  "Critical Thinking",
  "Adaptability",
  "Project Management",
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative AI and software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-slate-800/50 text-slate-300 hover:bg-purple-600/20 hover:text-purple-300 transition-all duration-300 px-4 py-2 text-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-slate-800/50 text-slate-300 hover:bg-pink-600/20 hover:text-pink-300 transition-all duration-300 px-4 py-2 text-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
