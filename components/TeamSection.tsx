'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'
import Image from 'next/image'

export default function TeamSection() {
  const team = [
    {
      name: 'Muhammad Peerzada',
      role: 'CEO',
      image: '/founders-pics/muhammad.jpeg',
      bio: 'IIT Bombay Student, passionate about democratizing career opportunities for students.',
      linkedin: 'https://www.linkedin.com/in/muhammad-peerzada-b740a4284/',
      twitter: '#',
      github: 'https://github.com/INTERDICTOR1'
    },
    {
      name: 'Vineet Jaiswal',
      role: 'CTO',
      image: '/founders-pics/Vineet.png',
      bio: 'IIT Bombay Student, full-stack engineer with deep expertise in automation and AI systems, previously SDE Intern at Uncompromised',
      linkedin: 'https://www.linkedin.com/in/vineetjaiswal10/',
      twitter: '#',
      github: '#'
    },
    {
      name: 'Rohan Dubey',
      role: 'CBO',
      image: '/founders-pics/Rohan.jpeg',
      bio: 'IIT Bombay Student, Product strategist focused on user experience. Previously at EY-Parthenon and Multidimensions.',
      linkedin: 'https://www.linkedin.com/in/rohan-dubey-43ba16278/',
      twitter: '#',
      github: '#'
    },
    {
      name: 'Dhruv Saraswat',
      role: 'Head of Machine Learning',
      image: '/founders-pics/dhruv.jpeg',
      bio: 'Machine Learning Engineer, Previously Data Science Intern at Nomura Research Institute',
      linkedin: 'https://www.linkedin.com/in/dhruv-saraswat-58486924a/',
      twitter: '#',
      github: '#'
    },
    {
      name: 'Pratham Agarwal',
      role: 'Head of Engineering',
      image: '/founders-pics/Pratham_Agarwal.jpeg',
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
            Built by Students, for Students
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Meet the IIT Bombay students who are revolutionizing how students approach their careers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient background with initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback gradient with initials if image fails to load */}
                  <div className="w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-xl hidden">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
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
                <div className="text-3xl font-bold text-accent-400 mb-2">5</div>
                <div className="text-dark-300 text-sm">IIT Bombay Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">15+</div>
                <div className="text-dark-300 text-sm">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">50+</div>
                <div className="text-dark-300 text-sm">Companies Worked At</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-2">1000+</div>
                <div className="text-dark-300 text-sm">Students Helped</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-2xl p-8 border border-accent-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-dark-300 text-lg max-w-3xl mx-auto leading-relaxed">
              We believe every student deserves access to the same opportunities, regardless of their background. 
              By automating the job outreach process, we're leveling the playing field and helping ambitious 
              students land their dream careers.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary">
            Join Our Team
          </button>
          <p className="text-dark-400 text-sm mt-4">
            We're always looking for talented students to join our mission
          </p>
        </motion.div>
      </div>
    </section>
  )
}
