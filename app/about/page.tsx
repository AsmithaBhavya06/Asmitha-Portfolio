import type { Metadata } from "next"
import AboutHero from "@/components/about-hero"
import TechnicalSkills from "@/components/technical-skills"
import Education from "@/components/education"
import Publications from "@/components/publications"

export const metadata: Metadata = {
  title: "About - Asmitha Bhavya",
  description:
    "Learn more about Asmitha Bhavya, a dedicated software engineer passionate about AI and machine learning.",
}

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      <AboutHero />
      <TechnicalSkills />
      <Education />
      <Publications />
    </main>
  )
}
