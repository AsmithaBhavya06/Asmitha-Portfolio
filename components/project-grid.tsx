"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Github, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Deep Learning Eye-Driven Mouse Cursor",
    description:
      "Revolutionary accessibility system that enables hands-free computer control through advanced eye tracking technology using deep learning algorithms.",
    longDescription:
      "This innovative project combines computer vision and deep learning to create a system that tracks eye movements in real-time and translates them into mouse cursor movements. The system uses advanced neural networks to accurately detect eye position and movement patterns, providing a seamless hands-free computing experience for users with mobility challenges.",
    tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Deep Learning", "NumPy"],
    period: "Aug 2024 - Oct 2024",
    category: "AI/ML",
    features: [
      "Real-time eye tracking with 99% accuracy",
      "Adaptive calibration system",
      "Low-latency response time (<50ms)",
      "Cross-platform compatibility",
      "Accessibility-focused design",
    ],
    challenges: [
      "Optimizing real-time performance",
      "Handling varying lighting conditions",
      "Ensuring accuracy across different users",
    ],
    impact: "Enhances accessibility for users with mobility impairments",
  },
  {
    title: "Advanced Image Classification System",
    description:
      "Sophisticated CNN model built with TensorFlow and Keras for high-accuracy image classification using the CIFAR-10 dataset.",
    longDescription:
      "A comprehensive image classification system that leverages convolutional neural networks to achieve state-of-the-art accuracy on the CIFAR-10 dataset. The project includes data preprocessing, model architecture optimization, and deployment strategies.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Data Science", "Matplotlib"],
    period: "Oct 2023 - Nov 2023",
    category: "Machine Learning",
    features: [
      "Custom CNN architecture design",
      "Data augmentation techniques",
      "Model optimization and tuning",
      "Comprehensive evaluation metrics",
      "Visualization of training progress",
    ],
    challenges: ["Preventing overfitting", "Optimizing model architecture", "Balancing accuracy and efficiency"],
    impact: "Achieved 92% accuracy on CIFAR-10 test set",
  },
  {
    title: "Intelligent Sentiment Analysis System",
    description:
      "Advanced NLP-powered system for analyzing and predicting sentiment in text reviews with high accuracy and real-time processing capabilities.",
    longDescription:
      "A comprehensive sentiment analysis solution that processes text data to determine emotional tone and sentiment. The system uses natural language processing techniques and machine learning algorithms to provide accurate sentiment predictions.",
    tech: ["Python", "NLP", "Scikit-learn", "NLTK", "Pandas", "Machine Learning"],
    period: "May 2023 - Jul 2023",
    category: "NLP",
    features: [
      "Multi-class sentiment classification",
      "Real-time text processing",
      "Preprocessing pipeline",
      "Model comparison and evaluation",
      "Interactive web interface",
    ],
    challenges: [
      "Handling sarcasm and context",
      "Processing diverse text formats",
      "Maintaining high accuracy across domains",
    ],
    impact: "Enables businesses to understand customer feedback at scale",
  },
  {
    title: "Proctoring System Project",
    description:
      "Comprehensive online examination security system developed during internship at Brillanz Software Solutions.",
    longDescription:
      "A full-stack proctoring system designed to ensure the integrity of online examinations. The system includes real-time monitoring, automated detection of suspicious activities, and comprehensive reporting features.",
    tech: ["Full Stack Development", "Computer Vision", "Web Technologies", "Database Design", "Security"],
    period: "May 2024 - July 2024",
    category: "Full Stack",
    features: [
      "Real-time video monitoring",
      "Automated suspicious activity detection",
      "Secure exam environment",
      "Comprehensive reporting dashboard",
      "Multi-user role management",
    ],
    challenges: ["Ensuring system security", "Real-time processing requirements", "Scalable architecture design"],
    impact: "Deployed for secure online examinations",
  },
]

export default function ProjectGrid() {
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
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                        {project.category}
                      </Badge>
                      <div className="flex items-center text-slate-400 text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.period}
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-slate-400">{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Overview</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.longDescription}</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-slate-300">
                        <Star className="h-3 w-3 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full hover:bg-purple-600/20 hover:text-purple-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-400">
                      <strong className="text-purple-300">Impact:</strong> {project.impact}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-purple-400">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-purple-400">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
