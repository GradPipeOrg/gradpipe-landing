'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'
import Image from 'next/image'
import { MouseEvent } from 'react'


function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={`group relative border border-white/10 bg-white/5 overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(129, 140, 248, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}

export default function TeamSection() {
  const team = [
    {
      name: 'Muhammad Peerzada',
      role: 'CEO',
      imageSrc: '/muhammad.jpg',
      bio: "IIT Bombay Student, 2nd-time founder. I'm so convicted in this mission I've taken a semester off from IIT Bombay to build GradPipe full-time.",
      linkedin: 'https://www.linkedin.com/in/muhammad-peerzada-b740a4284/',
      twitter: 'https://x.com/Pz_Muhammad',
      github: '#',
      alumniOf: 'Indian Institute of Technology Bombay'
    },
    {
      name: 'Pratham Agarwal',
      role: 'COO',
      imageSrc: '/Pratham_Agarwal.png',
      bio: 'IIT Bombay Student, Leads Operations as well as the Frontend of GradPipe, previously AI Engineer Intern at FINMECHANICS',
      linkedin: 'https://www.linkedin.com/in/pratham-agarwal-a15b9b256/',
      twitter: '#',
      github: '#',
      alumniOf: 'Indian Institute of Technology Bombay'
    },
    {
      name: 'Tech Narayan Brahmachari',
      role: 'CTO',
      imageSrc: '/Tech_Narayan_Brahmachari.png',
      bio: 'IIT Bombay CSE Student, Leads Backend of GradPipe Platform, received a PPO from Google',
      linkedin: 'https://linkedin.com/in/tec-narayan-brahmachari-316823252',
      twitter: '#',
      github: '#',
      alumniOf: 'Indian Institute of Technology Bombay'
    }
  ]

  // Person Schema for Team Members
  const personSchemas = team.map(member => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      "@type": "Organization",
      name: "GradPipe"
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: member.alumniOf
    },
    sameAs: [
      member.linkedin !== '#' ? member.linkedin : undefined,
      member.twitter !== '#' ? member.twitter : undefined,
    ].filter(Boolean),
    description: member.bio
  }))

  return (
    <>
      {/* Person Schemas */}
      {personSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <section id="team" className="py-20 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Built by IIT Bombay Founders Who Lived the Problem
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              We believe talent is universally distributed, but opportunity is not.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SpotlightCard className="p-8 h-full">
                  {/* Avatar */}
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border border-white/10 relative">
                      <Image
                        src={(member as any).imageSrc}
                        alt={`${member.name} avatar`}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-accent-primary font-medium">{member.role}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-text-muted text-sm leading-relaxed mb-6 text-center">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </SpotlightCard>
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
            <SpotlightCard className="p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-primary mb-2">300,000+</div>
                  <div className="text-text-muted text-sm">Impressions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-primary mb-2">1,000+</div>
                  <div className="text-text-muted text-sm">Community Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-primary mb-2">48</div>
                  <div className="text-text-muted text-sm">Hours</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-primary mb-2">1</div>
                  <div className="text-text-muted text-sm">Mission</div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>
    </>
  )
}
