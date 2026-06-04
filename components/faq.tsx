'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How does Hidra protect my files?',
      answer: 'Hidra uses military-grade AES-256 encryption to protect all your files. Every file is encrypted on your device and stored locally, ensuring complete privacy.',
    },
    {
      question: 'Does Hidra upload files to servers?',
      answer: 'No. All your files remain on your device. Hidra operates 100% offline - no files are ever uploaded to any servers or cloud services.',
    },
    {
      question: 'Can I hide the app?',
      answer: 'Yes! Hidra can be completely hidden from your device. You can access it using a secret dial code that only you know.',
    },
    {
      question: 'Can I backup my vault?',
      answer: 'Absolutely. Hidra includes encrypted backup functionality. You can create encrypted backups and restore your vault anytime.',
    },
    {
      question: 'Does Hidra support biometric authentication?',
      answer: 'Yes. Hidra supports both fingerprint and face recognition biometric authentication for quick and secure access.',
    },
    {
      question: 'Is Hidra available on all devices?',
      answer: 'Hidra is available on iOS and Android. We&apos;re working on expanding to additional platforms.',
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-foreground/60">
            Everything you need to know about Hidra
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-heading font-semibold text-balance">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10 overflow-hidden"
                  >
                    <p className="p-6 text-foreground/70 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl border border-primary/30 bg-primary/5 text-center backdrop-blur-xl"
        >
          <p className="text-foreground/80 mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <a
            href="/support"
            className="inline-block px-6 py-2 text-primary font-semibold hover:text-secondary transition-colors"
          >
            Contact Support →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
