"use client"

import type React from "react"

import { useState } from "react"
import { Send, User, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    // Show success message (you can implement toast notifications here)
    alert("Message sent successfully! I'll get back to you soon.")
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white text-2xl flex items-center">
          <MessageSquare className="h-6 w-6 mr-3 text-purple-400" />
          Send a Message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-slate-300 text-sm font-medium">
                Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-slate-300 text-sm font-medium">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-slate-300 text-sm font-medium">
              Subject *
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
              placeholder="What's this about?"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-slate-300 text-sm font-medium">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 resize-none"
              placeholder="Tell me about your project, idea, or just say hello!"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Sending...
              </div>
            ) : (
              <div className="flex items-center">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
