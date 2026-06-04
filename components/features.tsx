'use client'

import { motion } from 'framer-motion'
import { LockKeyhole, EyeOff, RotateCw, Lock, Album, HardDrive, Smartphone, Image as ImageIcon } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: LockKeyhole,
      title: 'Private Vault',
      description: 'Store personal photos and videos in a protected vault.',
      color: 'from-primary to-secondary',
    },
    {
      icon: EyeOff,
      title: 'Hidden App Mode',
      description: 'Hide the application behind a secret access experience.',
      color: 'from-secondary to-primary',
    },
    {
      icon: RotateCw,
      title: 'Secret Dial Access',
      description: 'Unlock your private space using a custom secret dial code.',
      color: 'from-primary to-secondary',
    },
    {
      icon: Lock,
      title: 'PIN & Biometric',
      description: 'Protect your content using multiple security layers.',
      color: 'from-secondary to-primary',
    },
    {
      icon: Album,
      title: 'Private Albums',
      description: 'Organize photos and videos into secure private collections.',
      color: 'from-primary to-secondary',
    },
    {
      icon: HardDrive,
      title: 'Secure Backup',
      description: 'Create encrypted backups and restore your content anytime.',
      color: 'from-secondary to-primary',
    },
    {
      icon: Smartphone,
      title: 'Offline Privacy',
      description: 'Your files stay on your device. No cloud dependency.',
      color: 'from-primary to-secondary',
    },
    {
      icon: ImageIcon,
      title: 'Modern Media Viewer',
      description: 'Beautiful viewing experience for photos and videos.',
      color: 'from-secondary to-primary',
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
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-balance">
            Powerful Features for <span className="gradient-text">Total Privacy</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything you need to keep your personal media secure and hidden
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.color} transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2 text-balance">{feature.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{feature.description}</p>
              </div>

              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl bg-gradient-to-br ${feature.color} group-hover:-z-10 transition-all duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
