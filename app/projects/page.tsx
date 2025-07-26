import type { Metadata } from "next"
import ProjectsHero from "@/components/projects-hero"
import ProjectGrid from "@/components/project-grid"

export const metadata: Metadata = {
  title: "Projects - Asmitha Bhavya",
  description: "Explore the innovative projects by Asmitha Bhavya in AI, machine learning, and software development.",
}

export default function Projects() {
  return (
    <main className="min-h-screen pt-20">
      <ProjectsHero />
      <ProjectGrid />
    </main>
  )
}
