'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Target, Lightbulb, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
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
            <motion.div
              className="flex flex-col items-center text-center gap-8"
              initial="initial"
              animate="animate"
              transition={{
                staggerChildren: 0.15,
                delayChildren: 0.1,
              }}
            >
              <motion.h1
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                About
                <span className="block gradient-text mt-2">
                  Lumos Digital
                </span>
              </motion.h1>
              <motion.p
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
              >
                A modern digital marketing and branding agency obsessed with building business growth and digital authority for our clients.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <section className="w-full py-24 md:py-48 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Lumos Digital was founded with a mission: to help businesses build real digital authority and sustainable growth. We saw countless companies struggling with outdated marketing approaches, inconsistent branding, and content that wasn&apos;t resonating with their audience.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  We assembled a team of creative strategists, designers, videographers, and growth hackers who understand what it takes to win in the digital space. From cafes to real estate firms, from startups to established brands, we&apos;ve helped over 200+ businesses scale their revenue, grow their following, and build market authority.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, Lumos Digital is trusted by entrepreneurs and business leaders who know that growth comes from smart strategy, creative excellence, and obsessive optimization. We&apos;re not here to sell you services—we&apos;re here to build your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="w-full py-24 md:py-48 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Vision */}
              <div className="p-8 rounded-lg border border-border/50 bg-card/50 premium-shadow-hover scale-hover backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-10 h-10 text-accent" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world&apos;s most trusted partner in AI and data solutions, empowering organizations to unlock unlimited potential through intelligent technology and data-driven insights.
                </p>
              </div>

              {/* Mission */}
              <div className="p-8 rounded-lg border border-border/50 bg-card/50 premium-shadow-hover scale-hover backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-10 h-10 text-accent" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver innovative AI and data solutions that transform businesses, drive growth, and create measurable value. We&apos;re committed to excellence, integrity, and the success of every client partnership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape our relationships with clients and team members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: 'Innovation',
                  description: 'We constantly push boundaries and explore new possibilities in AI and data technology.',
                },
                {
                  title: 'Integrity',
                  description: 'Transparency and honesty are at the core of every client interaction and decision.',
                },
                {
                  title: 'Excellence',
                  description: 'We deliver superior quality in every project, exceeding expectations consistently.',
                },
                {
                  title: 'Collaboration',
                  description: 'We believe in partnership, working closely with clients as true strategic allies.',
                },
              ].map((value, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-background hover:border-accent/50 transition-colors text-center">
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Lumos Digital</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here&apos;s what sets us apart from the competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Proven Track Record',
                  description: 'With 400+ successful projects and 90%+ client satisfaction rate, our results speak for themselves.',
                },
                {
                  title: 'Expert Team',
                  description: 'Our team brings decades of combined experience in AI, data science, and enterprise technology.',
                },
                {
                  title: 'Custom Solutions',
                  description: 'We don&apos;t believe in one-size-fits-all. Every solution is tailored to your unique needs.',
                },
                {
                  title: 'Long-term Partnership',
                  description: 'We&apos;re invested in your success. Support doesn&apos;t end after deployment; it&apos;s just beginning.',
                },
                {
                  title: 'Cutting-edge Technology',
                  description: 'We stay at the forefront of AI and data technology, ensuring you have access to the best tools.',
                },
                {
                  title: 'Transparent Communication',
                  description: 'Clear, honest communication throughout the project keeps you informed and in control.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visionary leaders driving innovation and transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Alex Chen', role: 'CEO & Founder', bio: 'Former VP of AI at Tech Corp, visionary leader with 15+ years in AI innovation.' },
                { name: 'Sarah Williams', role: 'CTO & Co-Founder', bio: 'Stanford PhD in Machine Learning, pioneering work in deep learning and data systems.' },
                { name: 'Michael Rodriguez', role: 'VP of Client Success', bio: 'Enterprise strategist with proven track record of delivering transformational results.' },
              ].map((member, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-background text-center hover:border-accent/50 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-yellow-400 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s Build the Future Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the companies transforming their operations with Lumos Digital. Contact us to explore how we can help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              Get In Touch <ArrowRight size={24} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
