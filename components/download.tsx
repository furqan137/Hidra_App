'use client'

import { motion } from 'framer-motion'
import { Apple, Play } from 'lucide-react'

export function Download() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4 text-balance">
            Start Protecting Your <span className="gradient-text">Privacy Today</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
            Take control of your personal media with Hidra. Download now and experience true privacy.
          </p>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-background rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-white/20 transition-all"
            >
              <Apple className="w-5 h-5" />
              Download on App Store
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-foreground rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/50 transition-all"
            >
              <Play className="w-5 h-5" />
              Google Play Coming Soon
            </motion.button>
          </motion.div>

          {/* Version Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-foreground/50 mt-8"
          >
            v1.0 • iOS 14.0+ • Available now
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
