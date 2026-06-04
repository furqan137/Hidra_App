'use client'

import { motion } from 'framer-motion'
import { LockKeyhole, Album, Settings, EyeOff, HardDrive, Image as ImageIcon } from 'lucide-react'

export function AppExperience() {
  const screens = [
    {
      icon: LockKeyhole,
      title: 'Vault Screen',
      description: 'Your private vault with all secured files',
    },
    {
      icon: Album,
      title: 'Albums Screen',
      description: 'Organize media into private albums',
    },
    {
      icon: Settings,
      title: 'Settings Screen',
      description: 'Manage security and preferences',
    },
    {
      icon: EyeOff,
      title: 'Hidden Mode',
      description: 'Complete app concealment',
    },
    {
      icon: HardDrive,
      title: 'Backup Screen',
      description: 'Create and manage backups',
    },
    {
      icon: ImageIcon,
      title: 'Media Viewer',
      description: 'Beautiful viewing experience',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/3 -right-96 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />
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
            App <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Experience premium privacy features with an intuitive interface
          </p>
        </motion.div>

        {/* Screen Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              {/* Phone Frame */}
              <div className="relative mb-6 h-64 rounded-3xl overflow-hidden border-8 border-white/10 bg-gradient-to-br from-black to-black/50 shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black flex items-center justify-between px-6 text-xs text-white">
                  <span>9:41</span>
                  <span className="text-center flex-1">●●●●●</span>
                </div>

                {/* Screen Content */}
                <div className="w-full h-full flex flex-col items-center justify-center pt-8 pb-4">
                  <screen.icon className="w-16 h-16 text-primary mb-4" />
                  <p className="text-center text-white text-sm font-semibold">{screen.title}</p>
                </div>
              </div>

              {/* Info Card */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 group-hover:bg-white/10 group-hover:border-primary/50 transition-all">
                <h3 className="font-heading font-semibold mb-2">{screen.title}</h3>
                <p className="text-sm text-foreground/60">{screen.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center p-8 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-xl"
        >
          <p className="text-lg text-foreground/80 mb-4">
            Ready to experience true privacy?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-foreground rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Download Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
