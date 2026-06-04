'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      label: 'Features',
      href: '#features',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
    {
      label: 'Terms',
      href: '/terms',
    },
    {
      label: 'Support',
      href: '/support',
    },
  ]

  const socialLinks = [
    { label: 'Twitter', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'GitHub', href: '#' },
  ]

  return (
    <footer className="border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
       {/* Brand */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <Link href="/" className="flex items-center mb-4">
    <Image
      src="/logo.png"
      alt="Hidra"
      width={180}
      height={60}
      className="h-12 w-auto object-contain"
      priority
    />
  </Link>

  <p className="text-sm text-foreground/60">
    Your Private Life. Hidden. Protected. Secure.
  </p>
</motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.slice(0, 2).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.slice(2).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <a
              href="mailto:support@hidra.app"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              support@hidra.app
            </a>
            <p className="text-xs text-foreground/40 mt-4">
              Response time: 24-48 hours
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-foreground/50">
            © {currentYear} Hidra. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/60 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

