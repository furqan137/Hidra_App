'use client'

import { motion } from 'framer-motion'
import { Lock, Eye, Shield, Cloud } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-tight text-balance">
              Hide What
              <br />
              <span className="gradient-text">Matters Most</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-lg text-balance"
          >
            Protect your photos, videos, albums, and private memories with military-inspired privacy tools designed for modern mobile devices.
          </motion.p>

          {/* CTA Buttons */}
       <motion.div
  variants={itemVariants}
  className="flex flex-col sm:flex-row gap-4"
>
  {/* Download Button */}
  <motion.a
    href="https://github.com/furqan137/Hidra/releases/download/Hidra_v1.0.2/hidrav2.apk"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-foreground rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-primary/50 transition-all text-center"
  >
    Download APK
  </motion.a>

  {/* Learn More */}
  <motion.a
    href="#features"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 border border-primary/50 text-primary rounded-full font-semibold text-lg hover:bg-primary/10 transition-all text-center"
  >
    Learn More
  </motion.a>
</motion.div>

          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: Lock, label: 'Private Storage' },
              { icon: Eye, label: 'No Cloud Tracking' },
              { icon: Shield, label: 'Hidden Access' },
              { icon: Cloud, label: 'Secure Backup' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground/80">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Phone Mockups */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-full min-h-96 lg:min-h-screen flex items-center justify-center"
        >
          {/* Main Phone Mockup */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative w-64 h-96 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 p-2 shadow-2xl shadow-primary/50 glow-primary"
          >
            <div className="w-full h-full rounded-3xl bg-black overflow-hidden flex flex-col items-center justify-center">
              {/* Phone Screen Content */}
              <div className="absolute top-12 left-0 right-0 text-center">
                <div className="text-xs font-semibold text-primary">9:41</div>
              </div>
              <div className="flex flex-col items-center gap-6 mt-8">
                <Lock className="w-16 h-16 text-primary glow-primary" />
                <div className="text-center">
                  <p className="text-sm font-semibold text-white">Private Vault</p>
                  <p className="text-xs text-foreground/50 mt-2">All your secrets secured</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Phone Mockup */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 0.5 }}
            className="absolute right-0 top-20 w-56 h-80 rounded-3xl bg-gradient-to-br from-secondary/30 to-primary/30 p-2 shadow-xl shadow-secondary/50 glow-secondary"
          >
            <div className="w-full h-full rounded-3xl bg-black overflow-hidden flex flex-col items-center justify-center">
              <div className="absolute top-10 left-0 right-0 text-center">
                <div className="text-xs font-semibold text-secondary">9:41</div>
              </div>
              <div className="flex flex-col items-center gap-4 mt-4">
                <Shield className="w-12 h-12 text-secondary" />
                <div className="text-center">
                  <p className="text-xs font-semibold text-white">Secret Access</p>
                  <p className="text-xs text-foreground/50 mt-1">Hidden Mode</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
