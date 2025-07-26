"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const featuredProjects = [
  {
    title: "Deep Learning Eye-Driven Mouse Cursor",
    description:
      "Revolutionary system enabling hands-free computer control through eye tracking using advanced deep learning algorithms.",
    tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
    period: "Aug 2024 - Oct 2024",
    highlights: ["Real-time eye tracking", "Machine learning optimization", "Accessibility innovation"],
  },
  {
    title: "Advanced Image Classification System",
    description:
      "CNN model built with TensorFlow and Keras for accurate image classification using the CIFAR-10 dataset.",
    tech: ["Python", "TensorFlow", "Keras", "CNN"],
    period: "Oct 2023 - Nov 2023",
    highlights: ["High accuracy classification", "Optimized neural architecture", "Scalable deployment"],
  },
  {
    title: "Intelligent Sentiment Analysis",
    description: "NLP-powered system for analyzing and predicting sentiment in text reviews with high accuracy.",
    tech: ["Python", "NLP", "Machine Learning", "Scikit-learn"],
    period: "May 2023 - Jul 2023",
    highlights: ["Natural language processing", "Real-time analysis", "Business intelligence"],
  },
]

export default function FeaturedProjects() {
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
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Innovative solutions showcasing expertise in AI, machine learning, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                <CardDescription className="text-slate-400">{project.period}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center text-sm text-slate-400">
                      <div className="w-1 h-1 bg-purple-400 rounded-full mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" variant="outline" className="border-slate-600 text-black hover:bg-slate-800 px-8 py-3 rounded-full transition-all duration-300">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
