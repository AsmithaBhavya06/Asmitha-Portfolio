import { Suspense } from "react"
import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Skills />
        <FeaturedProjects />
        <Experience />
      </Suspense>
    </main>
  )
}
