'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Zap, TrendingUp, Shield, Users, Sparkles, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedCard, AnimatedSection, AnimatedItem } from '@/components/animated-section'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background gradient with premium layering */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/25 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none"></div>
          </div>

          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="initial"
              animate="animate"
              className="flex flex-col items-center text-center gap-6"
              transition={{
                staggerChildren: 0.15,
                delayChildren: 0.1,
              }}
            >
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/50 bg-accent/10 glow-accent scale-hover"
              >
                <Sparkles size={16} className="text-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">Digital Growth Agency</span>
              </motion.div>

              <motion.h1
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                Build Authority.
                <span className="block gradient-text mt-2">
                  Scale Revenue.
                </span>
              </motion.h1>

              <motion.p
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
              >
                Smart marketing strategies, creative content, and data-driven optimization to grow your business and build lasting brand authority.
              </motion.p>

              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
                className="flex flex-col sm:flex-row gap-4 mt-12"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold glow-accent-hover scale-hover flex items-center justify-center gap-2"
                  >
                    Let&apos;s Grow <ArrowRight size={20} />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <Link
                    href="/works"
                    className="px-8 py-4 rounded-lg border border-accent/60 text-accent font-semibold hover:border-accent hover:bg-accent/5 transition-all scale-hover"
                  >
                    View Our Work
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-24 md:py-48 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Growth-Focused Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital marketing and branding solutions to accelerate your business growth.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                staggerChildren: 0.1,
                delayChildren: 0.05,
              }}
            >
              {[
                {
                  icon: TrendingUp,
                  title: 'Digital Marketing',
                  description: 'Strategy-driven campaigns that drive qualified leads and measurable growth.',
                },
                {
                  icon: Users,
                  title: 'Social Media Management',
                  description: 'Content creation and community growth across Instagram, Facebook, LinkedIn.',
                },
                {
                  icon: Zap,
                  title: 'Meta & Google Ads',
                  description: 'Performance advertising with optimized targeting and ROI tracking.',
                },
                {
                  icon: Sparkles,
                  title: 'Branding & Design',
                  description: 'Complete visual identity systems that communicate your brand authority.',
                },
                {
                  icon: Code2,
                  title: 'Website Development',
                  description: 'High-converting websites optimized for user experience and conversions.',
                },
                {
                  icon: TrendingUp,
                  title: 'Video Production',
                  description: 'Cinematic storytelling for brand narratives and product demonstrations.',
                },
                {
                  icon: Sparkles,
                  title: 'Reels & Short-Form',
                  description: 'Professional editing for Instagram Reels, TikTok, and YouTube Shorts.',
                },
                {
                  icon: Shield,
                  title: 'SEO & GMB',
                  description: 'Local authority building and organic search optimization.',
                },
                {
                  icon: Users,
                  title: 'Personal Branding',
                  description: 'Establish yourself as a thought leader in your industry.',
                },
                {
                  icon: Zap,
                  title: 'Lead Generation',
                  description: 'Build qualified pipeline with targeted lead generation campaigns.',
                },
                {
                  icon: Code2,
                  title: 'Promotional Shoots',
                  description: 'Professional photography and videography for products and services.',
                },
                {
                  icon: Sparkles,
                  title: 'Content Strategy',
                  description: 'Data-driven content plans aligned with your business growth goals.',
                },
              ].map((service, idx) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.3, ease: 'easeOut' },
                    }}
                    className="p-8 rounded-lg border border-border bg-background/50 hover:border-accent/50 transition-all duration-300 group premium-shadow-hover backdrop-blur-sm"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <Icon className="w-14 h-14 text-accent mb-6" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-24 md:py-48 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Lumos Digital</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Partner with experts who understand your challenges and deliver results.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                staggerChildren: 0.12,
                delayChildren: 0.05,
              }}
            >
              {[
                {
                  title: 'Customized Strategy',
                  description: 'We develop growth strategies tailored to your specific industry and business goals.',
                },
                {
                  title: 'Real Business Growth',
                  description: 'Focused on measurable results: leads, revenue, brand visibility, and market authority.',
                },
                {
                  title: 'Creative Excellence',
                  description: 'Award-quality content, design, and video production that stands out in the market.',
                },
                {
                  title: 'Trend-Based Marketing',
                  description: 'We stay ahead of platform changes and marketing trends to keep you competitive.',
                },
                {
                  title: 'Data-Driven Optimization',
                  description: 'Every campaign optimized based on real performance metrics and analytics.',
                },
                {
                  title: 'Long-Term Partnership',
                  description: 'We&apos;re invested in your success with ongoing support and continuous improvement.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { opacity: 0, x: idx % 2 === 0 ? -20 : 20 },
                    animate: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  className="p-8 rounded-lg border border-border/50 bg-card/50 hover:border-accent/50 transition-all duration-300 group premium-shadow-hover backdrop-blur-sm"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-yellow-400/20 flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-accent font-bold text-lg">{idx + 1}</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-24 md:py-48 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to ensure successful project delivery and results.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                staggerChildren: 0.15,
                delayChildren: 0.1,
              }}
            >
              {[
                { step: '01', title: 'Consultation & Analysis', desc: 'Deep dive into your business, audience, and growth opportunities' },
                { step: '02', title: 'Strategic Planning', desc: 'Build a custom roadmap aligned with your revenue goals' },
                { step: '03', title: 'Creative Production', desc: 'Create compelling content, design, and marketing assets' },
                { step: '04', title: 'Campaign Execution', desc: 'Launch campaigns with precision targeting and optimization' },
                { step: '05', title: 'Growth Optimization', desc: 'Analyze results and scale what works for maximum ROI' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="relative group"
                >
                  <div className="text-center">
                    <motion.div
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent/30 to-yellow-400/20 text-accent font-bold text-2xl mb-6 glow-accent group-hover:shadow-lg transition-shadow"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: '0 0 30px rgba(56, 182, 255, 0.3)',
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  {idx < 4 && (
                    <motion.div
                      className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent via-yellow-400 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8, delay: idx * 0.15 + 0.3 }}
                      style={{ originX: 0 }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Preview Section */}
        <section className="w-full py-24 md:py-48 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Case Studies & Portfolio</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                See how we&apos;ve helped businesses scale revenue, build authority, and dominate their markets.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                staggerChildren: 0.1,
                delayChildren: 0.05,
              }}
            >
              {[1, 2, 3].map((idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{
                    y: -15,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  className="group cursor-pointer overflow-hidden rounded-lg border border-border/50 bg-card/50 hover:border-accent/50 transition-all duration-300 h-72 premium-shadow-hover backdrop-blur-sm"
                >
                  <div className="w-full h-full bg-gradient-to-br from-accent/15 to-yellow-400/10 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 flex items-center justify-center"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-accent font-semibold">View Project</span>
                    </motion.div>
                    <div className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Code2 className="w-16 h-16 text-accent/40 mx-auto mb-3 group-hover:text-accent/60 transition-colors" />
                      </motion.div>
                      <p className="text-muted-foreground">Project {idx}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center">
              <Link
                href="/works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
              >
                View All Projects <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-24 md:py-48 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real feedback from companies we&apos;ve helped transform.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                staggerChildren: 0.1,
                delayChildren: 0.05,
              }}
            >
              {[
                {
                  quote: 'Within 3 months, our Instagram grew from 2K to 45K followers. Their content strategy is game-changing.',
                  author: 'Priya Sharma',
                  role: 'Founder, Cafe Bliss',
                },
                {
                  quote: 'Our hotel bookings increased by 65% after they optimized our Google Ads. Worth every penny.',
                  author: 'Rajesh Patel',
                  role: 'Manager, Heritage Hotels',
                },
                {
                  quote: 'The branding work completely transformed how people perceive our real estate business. Highly professional team.',
                  author: 'Ananya Gupta',
                  role: 'CEO, Premium Properties',
                },
              ].map((testimonial, idx) => (
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
                  className="p-8 rounded-lg border border-border/50 bg-background/50 hover:border-accent/30 transition-all duration-300 group premium-shadow-hover backdrop-blur-sm"
                >
                  <motion.div
                    className="flex gap-1 mb-6"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                    transition={{
                      staggerChildren: 0.05,
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          initial: { opacity: 0, scale: 0 },
                          animate: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="text-yellow-400 text-lg"
                      >
                        ★
                      </motion.span>
                    ))}
                  </motion.div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none"></div>
          </div>

          <motion.div
            className="container mx-auto max-w-4xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              staggerChildren: 0.15,
              delayChildren: 0.1,
            }}
          >
            <motion.h2
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              Ready to Scale Your Business?
            </motion.h2>
            <motion.p
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Let&apos;s build your growth strategy. Schedule a consultation with our team to discuss your goals and unlock new opportunities.
            </motion.p>
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-lg bg-accent text-accent-foreground font-semibold text-lg glow-accent-hover"
              >
                Let&apos;s Grow <ArrowRight size={24} />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
