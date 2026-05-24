import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-card/50 backdrop-blur-xl text-card-foreground premium-shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl glow-accent mb-4">
              <Image
                src="/app-icon.png"
                alt="Lumos Digital Logo"
                width={32}
                height={32}
                className="rounded glow-accent"
              />
              <span className="gradient-text">Lumos</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming businesses with innovative AI and data solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-muted-foreground hover:text-accent transition-colors">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:info@lumosdigitalmedia.in" className="text-muted-foreground hover:text-accent transition-colors">
                  info@lumosdigitalmedia.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:+919787582488" className="text-muted-foreground hover:text-accent transition-colors">
                  +91 97875 82488
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Lumos Digital. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
