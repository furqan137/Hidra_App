'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Download } from 'lucide-react'
import Image from 'next/image'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
        {/* Logo */}
<Link href="/" className="flex items-center gap-3 group">
  <Image
    src="/logo.png"
    alt="Hidra"
    width={48}
    height={48}
    priority
    className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
  />

  <span className="text-xl font-heading font-bold gradient-text">
    Hidra
  </span>
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Features', href: '#features' },
              { label: 'Security', href: '#security' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Support', href: '/support' },
            ].map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Download Button */}
        {/* Download Button */}
<motion.a
  href="https://github.com/furqan137/Hidra/releases/download/Hidra_v1.0.2/hidrav2.apk"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-foreground rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
>
  <Download size={16} />
  Download APK
</motion.a>

        </div>
      </div>
    </motion.nav>
  )
}
