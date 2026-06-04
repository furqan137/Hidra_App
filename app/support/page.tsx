'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Mail, Clock, MessageSquare, HelpCircle, RotateCw, Settings } from 'lucide-react'
import { useState } from 'react'

export default function SupportPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const supportCategories = [
    {
      icon: HelpCircle,
      title: 'Backup Help',
      description: 'Learn how to create and manage backups',
      link: '#backup',
    },
    {
      icon: RotateCw,
      title: 'Restore Help',
      description: 'Instructions for restoring your vault',
      link: '#restore',
    },
    {
      icon: Settings,
      title: 'Account Help',
      description: 'Account settings and authentication',
      link: '#account',
    },
    {
      icon: MessageSquare,
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      link: '#troubleshooting',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <main className="bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-heading font-bold mb-6 text-balance">
              Need <span className="gradient-text">Help?</span>
            </h1>
            <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
              We&apos;re here to support you. Choose your support option below.
            </p>
          </motion.div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-2">Email Support</h3>
              <p className="text-foreground/60 mb-6">Get in touch with our support team</p>
              <a
                href="mailto:support@hidra.app"
                className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-secondary text-foreground rounded-full font-semibold hover:shadow-lg transition-all"
              >
                support@hidra.app
              </a>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-2">Response Time</h3>
              <p className="text-foreground/60 mb-6">We typically respond within</p>
              <p className="text-3xl font-heading font-bold gradient-text">24-48 Hours</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
              Quick Help <span className="gradient-text">Categories</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, i) => (
              <motion.a
                key={i}
                href={category.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all group"
              >
                <category.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-foreground/60">{category.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Help Sections */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Backup Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="backup"
          >
            <h3 className="text-3xl font-heading font-bold mb-4">Creating Backups</h3>
            <p className="text-foreground/70 mb-4">
              To create a backup of your vault, navigate to Settings and tap "Create Backup". Your encrypted backup will be saved to your device storage.
            </p>
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <p className="text-sm text-foreground/60">
                <strong>Tip:</strong> Create regular backups to ensure you never lose your important files.
              </p>
            </div>
          </motion.div>

          {/* Restore Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="restore"
          >
            <h3 className="text-3xl font-heading font-bold mb-4">Restoring Your Vault</h3>
            <p className="text-foreground/70 mb-4">
              To restore from a backup, go to Settings, select "Restore from Backup", and choose the backup file. Authenticate with your PIN or biometrics to proceed.
            </p>
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <p className="text-sm text-foreground/60">
                <strong>Important:</strong> Restoring will replace your current vault with the backed-up version.
              </p>
            </div>
          </motion.div>

          {/* Account Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="account"
          >
            <h3 className="text-3xl font-heading font-bold mb-4">Account Settings</h3>
            <p className="text-foreground/70 mb-4">
              You can update your PIN, enable biometric authentication, and manage app visibility from the Account Settings screen. Remember to keep your PIN secure and never share it.
            </p>
            <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
              <p className="text-sm text-foreground/60">
                <strong>Security:</strong> Use a strong PIN and enable biometric authentication for maximum security.
              </p>
            </div>
          </motion.div>

          {/* Troubleshooting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="troubleshooting"
          >
            <h3 className="text-3xl font-heading font-bold mb-4">Troubleshooting</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">App Won&apos;t Open?</h4>
                <p className="text-foreground/70 text-sm">
                  Try force-closing the app and reopening it. If the issue persists, uninstall and reinstall Hidra.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Forgot Your PIN?</h4>
                <p className="text-foreground/70 text-sm">
                  Unfortunately, due to security measures, there is no way to recover a forgotten PIN. You&apos;ll need to reinstall the app and restore from a backup if available.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Files Not Importing?</h4>
                <p className="text-foreground/70 text-sm">
                  Ensure Hidra has permission to access your photos and media. Check device settings and grant the necessary permissions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-foreground/40 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-foreground/40 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your issue or question..."
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder-foreground/40 focus:border-primary outline-none transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
