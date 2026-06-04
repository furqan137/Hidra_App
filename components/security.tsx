'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Smartphone, Cloud, EyeOff } from 'lucide-react'

export function Security() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Authentication Protection',
      description: 'Multiple layers of authentication to keep your vault secure',
    },
    {
      icon: Smartphone,
      title: 'Biometric Security',
      description: 'Fingerprint and face recognition for instant access',
    },
    {
      icon: Smartphone,
      title: 'Private Local Storage',
      description: 'All files encrypted and stored only on your device',
    },
    {
      icon: Shield,
      title: 'Backup Protection',
      description: 'Military-grade encryption for all backups',
    },
    {
      icon: EyeOff,
      title: 'Secret Access Mode',
      description: 'Hide the app completely from your device',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="security" className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Built Around <span className="gradient-text">Privacy</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Industry-leading security measures to protect what matters most
          </p>
        </motion.div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left - Featured Shield */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Animated Shield */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 border border-secondary/20 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary shadow-2xl"
                >
                  <Shield className="w-16 h-16 text-foreground" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Security Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-foreground/60">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Security Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center p-8 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-xl"
        >
          <p className="text-lg text-foreground/80 mb-2">
            <span className="font-heading font-semibold">End-to-End Encrypted</span> • All communications and data transfers are protected
          </p>
          <p className="text-sm text-foreground/60">
            Your privacy is our priority. Hidra uses industry-standard encryption protocols to ensure complete protection.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
