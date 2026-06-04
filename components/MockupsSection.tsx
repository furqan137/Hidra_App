'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const mockups = [
  {
    image: '/mockups/hidra-1.png',
    title: 'Private Vault Protection',
    description:
      'Keep your personal photos, videos and files hidden behind military-grade security and PIN protection.',
  },
  {
    image: '/mockups/hidra-2.png',
    title: 'Secure Media Storage',
    description:
      'Import and protect sensitive media inside a beautifully designed encrypted vault.',
  },
  {
    image: '/mockups/hidra-3.png',
    title: 'Private Albums',
    description:
      'Organize your hidden content into secure albums accessible only to you.',
  },
  {
    image: '/mockups/hidra-4.png',
    title: 'Stealth Hidden Mode',
    description:
      'Disguise Hidra as a phone dialer and unlock it using your secret code.',
  },
  {
    image: '/mockups/hidra-5.png',
    title: 'Backup & Recovery',
    description:
      'Create encrypted backups and restore your private data securely anytime.',
  },
]

export default function MockupsSection() {
  return (
    <section
      id="screenshots"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold">
            APP EXPERIENCE
          </div>

          <h2 className="mt-6 text-5xl lg:text-7xl font-bold text-white">
            Beautiful & Secure
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
            Explore the premium privacy experience designed to keep your
            personal life hidden, protected and completely secure.
          </p>
        </div>

        <div className="space-y-32">
          {mockups.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col gap-12 items-center ${
                index % 2 === 0
                  ? 'lg:flex-row'
                  : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div className="flex-1">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(6,182,212,0.25)]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1400}
                    height={900}
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 max-w-xl">
                <div className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold">
                  Feature {index + 1}
                </div>

                <h3 className="mt-6 text-4xl lg:text-5xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-gray-400">
                  {item.description}
                </p>

                <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}