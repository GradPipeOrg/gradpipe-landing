'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'
import Image from 'next/image'


export default function TeamSection() {
  const team = [
    {
      name: 'Muhammad Peerzada',
      role: 'CEO',
      imageSrc: '/muhammad.jpg',
      bio: "IIT Bombay Student, 2nd-time founder. I'm so convicted in this mission I've taken a semester off from IIT Bombay to build GradPipe full-time.",
      linkedin: 'https://www.linkedin.com/in/muhammad-peerzada-b740a4284/',
      twitter: 'https://x.com/Pz_Muhammad',
      github: '#'
    },
    {
      name: 'Pratham Agarwal',
      role: 'CTO',
      imageSrc: '/Pratham_Agarwal.jpeg',
      bio: 'IIT Bombay Student, Full Stack and Machine Learning Engineer, previously AI Engineer Intern at FINMECHANICS',
      linkedin: 'https://www.linkedin.com/in/pratham-agarwal-a15b9b256/',
      twitter: '#',
      github: '#'
    }
  ]

  return (
    <section id="team" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built by IIT Bombay Founders Who Lived the Problem
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            We believe talent is universally distributed, but opportunity is not.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-800 rounded-2xl p-8 border border-dark-700 card-hover"
            >
              {/* Avatar */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border border-dark-600 relative">
                  <Image
                    src={(member as any).imageSrc}
                    alt={`${member.name} avatar`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-accent-400 font-medium">{member.role}</p>
              </div>

              {/* Bio */}
              <p className="text-dark-300 text-sm leading-relaxed mb-6 text-center">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href={member.linkedin}
                  className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-dark-300 hover:text-white hover:bg-dark-600 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.twitter}
                  className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-dark-300 hover:text-white hover:bg-dark-600 transition-all duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.github}
                  className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-dark-300 hover:text-white hover:bg-dark-600 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">300,000+</div>
                <div className="text-dark-300 text-sm">Impressions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">1,000+</div>
                <div className="text-dark-300 text-sm">Community Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">48</div>
                <div className="text-dark-300 text-sm">Hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">1</div>
                <div className="text-dark-300 text-sm">Mission</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
