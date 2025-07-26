"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Asmitha Bhavya
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  pathname === item.href ? "text-purple-400" : "text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-6">
              <Link href="https://github.com/AsmithaBhavya06" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-purple-400">
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/asmitha-bhavya-7b65b6221"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-purple-400">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="mailto:asmithabhavya.boddu@gmail.com">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-purple-400">
                  <Mail className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-purple-400 ${
                    pathname === item.href ? "text-purple-400" : "text-slate-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <Link href="https://github.com/AsmithaBhavya06" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-purple-400">
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/asmitha-bhavya-7b65b6221"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-purple-400">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="mailto:asmithabhavya.boddu@gmail.com">
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-purple-400">
                    <Mail className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
