"use client"

import { useEffect, useRef } from "react"
import { FileText, Calendar, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const publications = [
  {
    title: "Live Audio Recognition and Text Conversion System",
    conference:
      "IEEE - 2025 2nd International Conference on Computational Intelligence, Communication Technology and Networking (CICTN)",
    year: "2025",
    type: "Conference Paper",
    description:
      "Research paper on advanced audio processing and real-time text conversion using machine learning algorithms.",
    keywords: ["Audio Processing", "Machine Learning", "Real-time Systems", "Speech Recognition"],
  },
]

export default function Publications() {
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
            Publications & Research
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Contributing to the academic community through innovative research and publications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <Card
              key={pub.title}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-white text-xl mb-2">{pub.title}</CardTitle>
                    <p className="text-purple-300 font-medium mb-2">{pub.conference}</p>
                    <div className="flex items-center space-x-4 text-slate-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {pub.year}
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        {pub.type}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 leading-relaxed">{pub.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword) => (
                    <span key={keyword} className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full">
                      {keyword}
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
