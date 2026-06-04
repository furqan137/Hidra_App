'use client'

import { motion } from 'framer-motion'
import { Upload, Album, Lock, EyeOff, HardDrive, Key } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Upload,
      title: 'Import Media',
      description: 'Import your photos and videos into Hidra',
    },
    {
      number: '02',
      icon: Album,
      title: 'Organize',
      description: 'Organize them into private albums',
    },
    {
      number: '03',
      icon: Lock,
      title: 'Protect',
      description: 'Protect with PIN or biometrics',
    },
    {
      number: '04',
      icon: EyeOff,
      title: 'Hide',
      description: 'Hide the app from your home screen',
    },
    {
      number: '05',
      icon: Key,
      title: 'Access',
      description: 'Access using your secret code',
    },
    {
      number: '06',
      icon: HardDrive,
      title: 'Backup',
      description: 'Create secure encrypted backups',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-96 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Simple steps to complete privacy in just minutes
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Card */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all h-full backdrop-blur-xl">
                {/* Step Number */}
                <div className="mb-4">
                  <span className="inline-block text-5xl font-heading font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text opacity-40 group-hover:opacity-100 transition-opacity">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-foreground/60">{step.description}</p>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>

              {/* Connecting Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-foreground rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-primary/50 transition-all"
          >
            Start Protecting Your Privacy
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
