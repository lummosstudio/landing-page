'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Check, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Packages() {
  const packages = [
    {
      name: 'Content Creator',
      price: '₹25,000',
      period: '/month',
      description: 'Perfect for creators and solopreneurs building personal brand',
      featured: false,
      features: [
        '2x Instagram Reels weekly',
        'Social media content calendar',
        'Basic branding guidance',
        'Monthly growth strategy call',
        'Email support',
        'Monthly performance report',
        '1 promotional photoshoot',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Growth Agency',
      price: '₹75,000',
      period: '/month',
      description: 'Full-service marketing for businesses serious about scaling',
      featured: true,
      features: [
        'Complete digital marketing strategy',
        '4x quality Reels + 12x carousel posts',
        'Meta & Google Ads management',
        'Website SEO & GMB optimization',
        'Lead generation campaigns',
        'Monthly strategy & optimization calls',
        'Priority email/WhatsApp support',
        'Professional content photoshoots',
        'Monthly performance analytics',
        'A/B testing and optimization',
        'Quarterly brand positioning review',
      ],
      cta: 'Scale Now',
    },
    {
      name: 'Premium Agency',
      price: 'Custom',
      period: '',
      description: 'White-glove service for enterprises and high-growth companies',
      featured: false,
      features: [
        'Dedicated account manager',
        'Full creative production team',
        'Custom strategy and planning',
        'Video production (monthly)',
        'Advanced paid advertising',
        'Influencer partnerships',
        'Email marketing automation',
        'CRM setup and management',
        'Weekly strategy sessions',
        'Priority 24/5 support',
        'Custom analytics dashboards',
        'Quarterly business reviews',
        'Brand ambassador program',
        'Unlimited revisions',
      ],
      cta: 'Contact Sales',
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
                Simple, Transparent
                <span className="block gradient-text mt-2">
                  Pricing
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Flexible plans designed for creators, growing businesses, and enterprises. Choose your growth trajectory.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-lg border transition-all duration-300 overflow-hidden flex flex-col ${
                    pkg.featured
                      ? 'border-accent md:scale-105 md:z-10 shadow-2xl'
                      : 'border-border hover:border-accent/50'
                  } ${
                    pkg.featured ? 'bg-card' : 'bg-card'
                  }`}
                >
                  {/* Featured Badge */}
                  {pkg.featured && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-yellow-400 text-black px-4 py-2 text-center font-semibold text-sm flex items-center justify-center gap-2">
                      <Star size={16} />
                      Most Popular
                    </div>
                  )}

                  {/* Content */}
                  <div className={`p-8 flex-1 flex flex-col ${pkg.featured ? 'pt-16' : ''}`}>
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>

                    {/* Pricing */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">{pkg.price}</span>
                        {pkg.period && <span className="text-muted-foreground">{pkg.period}</span>}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-3">
                          <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="/contact"
                      className={`w-full py-3 rounded-lg font-semibold text-center transition-all ${
                        pkg.featured
                          ? 'bg-accent text-accent-foreground hover:opacity-90'
                          : 'border border-accent text-accent hover:bg-accent/10'
                      }`}
                    >
                      {pkg.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Feature Comparison</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compare all the features and services included in each package.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold text-accent">Growth</th>
                    <th className="text-center py-4 px-4 font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Team Members', starter: '5', growth: 'Unlimited', premium: 'Unlimited' },
                    { name: 'Support Hours', starter: 'Business', growth: '24/5', premium: '24/7' },
                    { name: 'Dedicated Specialists', starter: '1', growth: '3', premium: '5+' },
                    { name: 'Strategy Reviews', starter: 'Quarterly', growth: 'Monthly', premium: 'Weekly' },
                    { name: 'Custom Development', starter: 'Limited', growth: 'Full-stack', premium: 'Enterprise' },
                    { name: 'API Access', starter: 'Yes', growth: 'Yes', premium: 'Yes' },
                    { name: 'Custom Integrations', starter: '—', growth: 'Yes', premium: 'Yes' },
                    { name: 'Training & Workshops', starter: 'Self-service', growth: 'Included', premium: 'Unlimited' },
                    { name: 'SLA Guarantee', starter: '—', growth: '—', premium: 'Yes' },
                    { name: 'Custom Contracts', starter: '—', growth: '—', premium: 'Yes' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-background/50 transition-colors">
                      <td className="py-4 px-4 font-medium">{row.name}</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">{row.starter}</td>
                      <td className="text-center py-4 px-4 text-accent font-semibold">{row.growth}</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'Can I switch plans anytime?',
                  a: 'Absolutely! You can upgrade or downgrade your plan anytime. Changes take effect at the beginning of your next billing cycle.',
                },
                {
                  q: 'What if I need something custom?',
                  a: 'Our Premium package is fully customizable. Contact our sales team to discuss your specific requirements and we&apos;ll create the perfect solution.',
                },
                {
                  q: 'Do you offer discounts for annual commitments?',
                  a: 'Yes! We offer 15% discount for annual prepayment across all packages. Contact us for details.',
                },
                {
                  q: 'Is setup and training included?',
                  a: 'Yes! All packages include initial setup and training. Growth and Premium plans include ongoing training and support.',
                },
                {
                  q: 'What about data security and compliance?',
                  a: 'All packages include enterprise-grade security, GDPR compliance, and data encryption. Premium includes additional compliance certifications.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
                  <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose your plan and let&apos;s begin your transformation journey. Our team is ready to support your success.
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
