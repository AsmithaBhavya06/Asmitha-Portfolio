import type { Metadata } from "next"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact - Asmitha Bhavya",
  description: "Get in touch with Asmitha Bhavya for collaboration opportunities and inquiries.",
}

export default function Contact() {
  return (
    <main className="min-h-screen pt-20">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </main>
  )
}
