import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Asmitha Bhavya
            </h3>
            <p className="text-slate-400 mb-4">
              AI/ML Engineer passionate about creating innovative solutions through cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/AsmithaBhavya06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/asmitha-bhavya-7b65b6221"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:asmithabhavya.boddu@gmail.com"
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-slate-400 hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-slate-400 hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="/projects" className="block text-slate-400 hover:text-purple-400 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="block text-slate-400 hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">asmithabhavya.boddu@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+91-9347743465</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span className="text-sm">
                  Narayanapuram, Peddapuram
                  <br />
                  Kakinada, Andhra Pradesh
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Asmitha Bhavya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
