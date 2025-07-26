"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Award, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    degree: "B.Tech - Computer Science Engineering",
    institution: "Amity University Noida",
    period: "2021 - Present",
    grade: "89.4 CGPA",
    status: "Current",
  },
  {
    degree: "Intermediate Education (11th & 12th)",
    institution: "Sri Chaitanya Junior College, Andhra Pradesh",
    period: "2019 - 2021",
    grade: "97.7%",
    status: "Completed",
  },
  {
    degree: "10th Class",
    institution: "LEMS, Andhra Pradesh",
    period: "2018 - 2019",
    grade: "98.0%",
    status: "Completed",
  },
]

export default function Education() {
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
            Educational Background
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Strong academic foundation with consistent excellence across all levels
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card
              key={edu.degree}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl mb-2">{edu.degree}</CardTitle>
                      <p className="text-purple-300 font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="flex items-center text-slate-400 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-green-400">
                      <Award className="h-4 w-4 mr-2" />
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      edu.status === "Current" ? "bg-green-600/20 text-green-300" : "bg-blue-600/20 text-blue-300"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
