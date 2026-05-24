'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Zap, TrendingUp, Shield, Code2, Users, Sparkles, Check } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategy-driven campaigns to generate qualified leads and measurable growth.',
      benefits: [
        'Marketing strategy and planning',
        'Campaign execution and optimization',
        'Lead generation funnels',
        'Conversion rate optimization',
        'Performance tracking and reporting',
      ],
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Content creation and community growth across all platforms.',
      benefits: [
        'Content calendar planning',
        'Daily posting and engagement',
        'Community management',
        'Follower growth strategies',
        'Social listening and analytics',
      ],
    },
    {
      icon: Zap,
      title: 'Meta & Google Ads',
      description: 'Performance advertising with optimized targeting and ROI tracking.',
      benefits: [
        'Campaign setup and optimization',
        'Audience targeting and segmentation',
        'A/B testing and creative optimization',
        'ROI tracking and analytics',
        'Budget optimization strategies',
      ],
    },
    {
      icon: Sparkles,
      title: 'Branding & Design',
      description: 'Complete visual identity systems that communicate your authority.',
      benefits: [
        'Logo and brand identity design',
        'Brand guidelines development',
        'Visual design and marketing materials',
        'Packaging and collateral design',
        'Brand positioning strategy',
      ],
    },
    {
      icon: Code2,
      title: 'Website Development',
      description: 'High-converting websites optimized for user experience and sales.',
      benefits: [
        'Responsive web design',
        'Conversion-focused development',
        'E-commerce solutions',
        'SEO-friendly architecture',
        'Website maintenance and support',
      ],
    },
    {
      icon: Sparkles,
      title: 'Video Production',
      description: 'Cinematic storytelling for brand narratives and product demos.',
      benefits: [
        'Concept development and scripting',
        'Professional filming and production',
        'Post-production and editing',
        'Animation and motion graphics',
        'Multi-platform video optimization',
      ],
    },
    {
      icon: Zap,
      title: 'Reels & Short-Form',
      description: 'Professional editing for Instagram Reels, TikTok, and YouTube Shorts.',
      benefits: [
        'Trend-based content creation',
        'Professional editing and effects',
        'Caption optimization',
        'Platform-specific formatting',
        'Viral content strategies',
      ],
    },
    {
      icon: Shield,
      title: 'SEO & GMB',
      description: 'Local authority building and organic search optimization.',
      benefits: [
        'Keyword research and strategy',
        'On-page and technical SEO',
        'Google My Business optimization',
        'Local search rankings',
        'Review management',
      ],
    },
    {
      icon: Users,
      title: 'Personal Branding',
      description: 'Establish yourself as a thought leader in your industry.',
      benefits: [
        'Personal brand strategy',
        'Content creation and distribution',
        'Speaking engagement opportunities',
        'Media and PR outreach',
        'Thought leadership positioning',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation',
      description: 'Build qualified pipeline with targeted campaigns.',
      benefits: [
        'Lead capture funnel design',
        'Lead qualification and nurturing',
        'CRM setup and automation',
        'Sales enablement materials',
        'Lead scoring and analytics',
      ],
    },
    {
      icon: Code2,
      title: 'Promotional Shoots',
      description: 'Professional photography and videography for products and services.',
      benefits: [
        'Product photography sessions',
        'Lifestyle and brand photography',
        'Behind-the-scenes video content',
        'Employee spotlight videos',
        'Professional image editing',
      ],
    },
    {
      icon: Sparkles,
      title: 'Content Strategy',
      description: 'Data-driven content plans aligned with your growth goals.',
      benefits: [
        'Content audit and analysis',
        'Editorial calendar development',
        'Blog writing and optimization',
        'Whitepapers and case studies',
        'Content performance tracking',
      ],
    },
  ]

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
                Marketing &
                <span className="block gradient-text mt-2">
                  Growth Services
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Complete digital marketing and branding solutions designed to accelerate your business growth and market authority.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full py-24 md:py-48 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                staggerChildren: 0.08,
                delayChildren: 0.05,
              }}
            >
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3, ease: 'easeOut' },
                    }}
                    className="p-8 rounded-lg border border-border/50 bg-background/50 hover:border-accent/50 transition-all duration-300 group premium-shadow-hover backdrop-blur-sm"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <Icon className="w-14 h-14 text-accent mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-accent">Key Benefits:</p>
                      {service.benefits.map((benefit, bidx) => (
                        <div key={bidx} className="flex items-start gap-3">
                          <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Delivery Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A proven methodology to ensure successful project delivery and exceptional results.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Assessment',
                  description: 'We thoroughly understand your business, challenges, goals, and technical landscape. Through detailed consultations and analysis, we identify opportunities and develop a comprehensive understanding of your needs.',
                },
                {
                  step: '02',
                  title: 'Strategy & Planning',
                  description: 'Our experts develop a detailed roadmap and strategy. We outline the solution architecture, technology stack, timeline, resources, and success metrics to ensure alignment with your goals.',
                },
                {
                  step: '03',
                  title: 'Development & Implementation',
                  description: 'Our team executes the plan with agile methodology and regular communication. We build, test, and refine the solution while keeping you informed of progress and milestones.',
                },
                {
                  step: '04',
                  title: 'Deployment & Optimization',
                  description: 'We deploy the solution with minimal disruption and provide comprehensive training. Post-launch, we monitor, optimize, and continuously improve based on performance data and feedback.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent/20">
                        <span className="text-accent font-bold">{item.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We leverage cutting-edge technologies and platforms to deliver enterprise-grade solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: 'AI & ML Frameworks',
                  tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LLMs (GPT, Claude)', 'Hugging Face'],
                },
                {
                  category: 'Data & Analytics',
                  tools: ['Apache Spark', 'Pandas', 'Tableau', 'Apache Airflow', 'Snowflake'],
                },
                {
                  category: 'Cloud & Infrastructure',
                  tools: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker'],
                },
              ].map((stack, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-background hover:border-accent/50 transition-colors">
                  <h3 className="font-semibold mb-4">{stack.category}</h3>
                  <ul className="space-y-2">
                    {stack.tools.map((tool, tidx) => (
                      <li key={tidx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {tool}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Transformation?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can drive growth and innovation for your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              Schedule a Consultation <ArrowRight size={24} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
