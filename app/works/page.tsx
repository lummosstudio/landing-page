'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Code2 } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Data Optimization',
      category: 'analytics',
      description: 'Implemented advanced analytics platform that increased conversion rates by 35%',
      image: 'Project 1',
      impact: '35% conversion increase',
    },
    {
      id: 2,
      title: 'AI-Powered Customer Service',
      category: 'ai',
      description: 'Custom chatbot solution handling 80% of support queries automatically',
      image: 'Project 2',
      impact: '80% automation rate',
    },
    {
      id: 3,
      title: 'Predictive Maintenance System',
      category: 'ml',
      description: 'ML model reducing equipment downtime by 45% for manufacturing client',
      image: 'Project 3',
      impact: '45% downtime reduction',
    },
    {
      id: 4,
      title: 'Financial Risk Analytics',
      category: 'analytics',
      description: 'Real-time risk assessment platform for investment firm',
      image: 'Project 4',
      impact: 'Real-time insights',
    },
    {
      id: 5,
      title: 'Healthcare Data Platform',
      category: 'security',
      description: 'HIPAA-compliant data platform serving 500K+ patient records',
      image: 'Project 5',
      impact: 'Full compliance',
    },
    {
      id: 6,
      title: 'Supply Chain Optimization',
      category: 'ml',
      description: 'Logistics optimization reducing delivery costs by 28%',
      image: 'Project 6',
      impact: '28% cost savings',
    },
    {
      id: 7,
      title: 'Marketing Attribution Engine',
      category: 'analytics',
      description: 'Multi-touch attribution model improving ROI measurement accuracy',
      image: 'Project 7',
      impact: 'Improved attribution',
    },
    {
      id: 8,
      title: 'Fraud Detection System',
      category: 'security',
      description: 'Real-time fraud prevention catching 99.2% of suspicious transactions',
      image: 'Project 8',
      impact: '99.2% accuracy',
    },
    {
      id: 9,
      title: 'Natural Language Processing',
      category: 'ai',
      description: 'Document classification system for legal tech company',
      image: 'Project 9',
      impact: '98% accuracy',
    },
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'security', name: 'Security' },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

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
                Our
                <span className="block gradient-text mt-2">
                  Works
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Explore our portfolio of successful projects and client transformations across various industries and technology domains.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-accent text-accent-foreground'
                      : 'border border-border text-foreground hover:border-accent/50'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-lg"
                >
                  {/* Image Area */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-accent/20 to-yellow-400/10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-accent font-semibold text-center px-4">View Project Details</span>
                    </div>
                    <Code2 className="w-16 h-16 text-accent/50 group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-colors flex-1">
                        {project.title}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium whitespace-nowrap ml-2">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                    <div className="pt-4 border-t border-border">
                      <div className="text-sm font-semibold text-accent mb-3">Key Impact:</div>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Case Study</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Deep dive into how we transformed a major enterprise operation.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-background">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="h-64 rounded-lg bg-gradient-to-br from-accent/20 to-yellow-400/10 flex items-center justify-center">
                  <Code2 className="w-24 h-24 text-accent/50" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Global Enterprise AI Transformation</h3>
                  <p className="text-muted-foreground">
                    A Fortune 500 company needed to modernize their legacy systems and leverage AI for competitive advantage. We implemented a comprehensive AI platform that integrated with their existing infrastructure.
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div>
                      <p className="text-3xl font-bold text-accent">40%</p>
                      <p className="text-sm text-muted-foreground">Efficiency Gain</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-accent">$50M</p>
                      <p className="text-sm text-muted-foreground">Cost Savings</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-accent">1,000+</p>
                      <p className="text-sm text-muted-foreground">Processes Automated</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-accent">99%</p>
                      <p className="text-sm text-muted-foreground">Uptime</p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and show you how we can drive similar results for your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              Start Your Project <ArrowRight size={24} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
