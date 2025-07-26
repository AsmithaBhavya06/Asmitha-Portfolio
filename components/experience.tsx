"use client"

import { useEffect, useRef } from "react"
import { Building, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Fidelity International",
    period: "Jan 2025 - Present",
    description:
      "Working on open rewrite and secure email relay systems, contributing to enterprise-level software solutions.",
    skills: ["Software Development", "Email Systems", "Security", "Enterprise Solutions"],
  },
  {
    title: "Software Engineer Intern",
    company: "Brillanz Software Solutions",
    period: "May 2024 - July 2024",
    description:
      "Developed and implemented a comprehensive proctoring system project, enhancing online examination security.",
    skills: ["Full Stack Development", "System Design", "Security", "Project Management"],
  },
  {
    title: "Salesforce Developer Intern",
    company: "Salesforce",
    period: "May 2024 - July 2024",
    description:
      "Worked extensively with Apex, Visualforce, and Lightning Web Components to meet diverse client requirements.",
    skills: ["Salesforce", "Apex", "Lightning Web Components", "Visualforce", "CRM"],
  },
]

export default function Experience() {
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
            Professional Experience
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Building expertise through hands-on experience at leading technology companies
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.company}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-white text-xl mb-2">{exp.title}</CardTitle>
                    <CardDescription className="flex items-center text-purple-300 text-lg">
                      <Building className="h-4 w-4 mr-2" />
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center text-slate-400 mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
