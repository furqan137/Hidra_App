'use client'

import { motion } from 'framer-motion'
import { HardDrive, Shield, Eye, Cloud } from 'lucide-react'

export function SocialProof() {
  const stats = [
    {
      icon: HardDrive,
      stat: '100%',
      label: 'Local Storage',
    },
    {
      icon: Shield,
      stat: 'Military',
      label: 'Grade Privacy',
    },
    {
      icon: Eye,
      stat: '∞',
      label: 'Protected Files',
    },
    {
      icon: Cloud,
      stat: 'Instant',
      label: 'Backup & Restore',
    },
  ]

  const benefits = [
    {
      icon: HardDrive,
      title: 'Private Media Protection',
      description: 'Keep all your media secure and private',
    },
    {
      icon: Eye,
      title: 'Hidden Access System',
      description: 'Advanced hidden access technology',
    },
    {
      icon: Shield,
      title: 'Secure Backup Technology',
      description: 'Encrypted backups for peace of mind',
    },
    {
      icon: Cloud,
      title: 'Offline Storage',
      description: 'No internet required for privacy',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Trusted By <span className="gradient-text">Privacy-Focused Users</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-heading font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text mb-2">
                {item.stat}
              </div>
              <p className="text-sm text-foreground/60">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-primary/50 hover:from-white/10 hover:to-white/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-foreground/60">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
