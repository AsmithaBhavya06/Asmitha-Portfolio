"use client"

import { useEffect, useRef } from "react"
import { Code, Database, Brain, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "C++", "C Language", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "NLP", "Generative AI"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Data & Databases",
    icon: Database,
    skills: ["Data Science", "MySQL", "Data Structures", "Data Analysis", "Big Data"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Technologies & Tools",
    icon: Globe,
    skills: ["TensorFlow", "Keras", "OpenCV", "Salesforce", "Git", "Linux"],
    color: "from-orange-500 to-red-500",
  },
]

const languages = [
  { name: "English", level: "Advanced" },
  { name: "Telugu", level: "Advanced" },
  { name: "Hindi", level: "Intermediate" },
  { name: "French", level: "Intermediate" },
]

export default function TechnicalSkills() {
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
            Technical Expertise
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning multiple domains of technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.title}
                className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full hover:bg-purple-600/20 hover:text-purple-300 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((lang, index) => (
              <div
                key={lang.name}
                className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-white font-medium">{lang.name}</h4>
                <p className="text-slate-400 text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
