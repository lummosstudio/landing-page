'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center gap-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Let&apos;s
                <span className="block gradient-text mt-2">
                  Work Together
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Ready to scale your business? Schedule a consultation with our growth strategy team to discuss your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Let&apos;s Schedule Your Growth Consultation</h2>
                {submitted ? (
                  <div className="p-6 rounded-lg bg-accent/10 border border-accent text-center">
                    <h3 className="text-lg font-semibold text-accent mb-2">Thank you!</h3>
                    <p className="text-muted-foreground">
                      We&apos;ve received your message and will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      Send Message <Send size={20} />
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Our team is available to answer your questions and discuss your project needs. Reach out using any of the methods below.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@lumosdigitalmedia.in" className="text-muted-foreground hover:text-accent transition-colors">
                        info@lumosdigitalmedia.in
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+919787582488" className="text-muted-foreground hover:text-accent transition-colors">
                        +91 97875 82488
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Available during business hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Remote-first, serving clients globally</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg border border-border bg-card hover:border-accent hover:bg-accent/10 flex items-center justify-center text-accent transition-all"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg border border-border bg-card hover:border-accent hover:bg-accent/10 flex items-center justify-center text-accent transition-all"
                    >
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time Section */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Fast Response',
                  description: 'We typically respond to inquiries within 24 hours',
                },
                {
                  title: 'Expert Consultation',
                  description: 'Free initial consultation to discuss your needs',
                },
                {
                  title: 'Global Support',
                  description: 'Serving clients across multiple time zones',
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent font-bold text-xl">{idx + 1}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Answers</h2>
              <p className="text-muted-foreground">Find answers to common questions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { q: 'How long does a typical project take?', a: 'Project timelines vary. A discovery call typically takes 1-2 weeks, and full implementation ranges from 2-6 months depending on scope.' },
                { q: 'What industries do you serve?', a: 'We serve a wide range of industries including finance, healthcare, retail, manufacturing, and more.' },
                { q: 'Do you work with startups?', a: 'Absolutely! We work with startups, scale-ups, and enterprises across all sizes.' },
                { q: 'Can you help with legacy systems?', a: 'Yes, we specialize in modernizing legacy systems and integrating them with modern AI solutions.' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-background hover:border-accent/50 transition-colors">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
