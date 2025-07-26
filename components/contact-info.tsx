import { Mail, Phone, MapPin, Github, Linkedin, Clock } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "asmithabhavya.boddu@gmail.com",
    href: "mailto:asmithabhavya.boddu@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9347743465",
    href: "tel:+919347743465",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Narayanapuram, Peddapuram\nKakinada, Andhra Pradesh, 533-437",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "AsmithaBhavya06",
    href: "https://github.com/AsmithaBhavya06",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "asmitha-bhavya-7b65b6221",
    href: "https://www.linkedin.com/in/asmitha-bhavya-7b65b6221",
  },
]

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((detail) => {
            const IconComponent = detail.icon
            const content = (
              <div
                key={detail.label}
                className="flex items-start space-x-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
              >
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <IconComponent className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{detail.label}</h3>
                  <p className="text-slate-300 text-sm whitespace-pre-line">{detail.value}</p>
                </div>
              </div>
            )

            return detail.href ? (
              <Link key={detail.label} href={detail.href} className="block">
                {content}
              </Link>
            ) : (
              content
            )
          })}
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Social Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors group"
              >
                <div className="p-2 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                  <IconComponent className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{social.label}</h3>
                  <p className="text-slate-300 text-sm">{social.value}</p>
                </div>
              </Link>
            )
          })}
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl flex items-center">
            <Clock className="h-6 w-6 mr-3 text-purple-400" />
            Response Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300">
            I typically respond to emails within <span className="text-purple-400 font-semibold">24 hours</span>. For
            urgent matters, feel free to reach out via phone or LinkedIn.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
