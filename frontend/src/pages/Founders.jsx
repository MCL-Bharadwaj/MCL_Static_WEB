import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Founders() {
  const navigate = useNavigate()
  const location = useLocation()

  // Helper function to navigate to home page sections
  const navigateToHomeSection = (sectionId) => {
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${sectionId}`)
    }
  }
  const founders = [
    {
      id: 1,
      name: "Prathyusha Kaki",
      title: "Founder",
      description: "A passionate educator and technology enthusiast with extensive experience in developing innovative coding curricula for young learners. Prathyusha specializes in making programming concepts accessible and engaging for students at all levels, focusing on practical application and creative problem-solving in the digital age.",
      image: "/prathyusha_mam.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/prathyusha-kaki-a2114812a",
      specialties: ["Entrepreneurship Development", "Educational Technology", "Curriculum Development"]
    },
    {
      id: 2,
      name: "Sirisha Chamarthi",
      title: "Founder ",
      description: "A seasoned software engineer and technical leader with a passion for educational technology. Sirisha brings deep expertise in building scalable learning platforms and developing coding bootcamps that bridge the gap between theoretical knowledge and real-world application in the tech industry.",
      image: "/sirisha_mam.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/sirishachamarthi",
      specialties: ["Software Architecture", "EdTech Platforms", "Technical Leadership"]
    },
    {
      id: 3,
      name: "Raga Sudha Endla",
      title: "Founder ",
      description: "Raga Sudha Endla A BITS Pilani graduate with a strong foundation in software engineering, she brings real-world experience and authenticity to every learning path she designs. Her intent is to nurture curiosity, critical thinking, and confidence in students through hands-on, puzzle-driven learning. Through MathCodeLab, she aims to build a generation of thinkers and creators ready to lead in the age of AI.",
      image: "/Raga_mam1.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/raga-sudha-endla-56111954",
      specialties: ["Learning Strategy", "Student Engagement", "Project-Based Learning"]
    }
  ]

  const advisors = [
    {
      id: 1,
      name: "Kalyan Ram Kaki",
      title: " Advisor",
      description: "Kalyan Kaki is a senior technology leader at Microsoft with over two decades of experience in cloud, data, and AI. He leads product strategy for Oracle Database on Azure and works closely with global customers on modernizing their data and AI platforms.Kalyan is passionate about helping students build strong foundations in problem solving and computer science. He supports several community education programs and believes early exposure to AI and logical thinking empowers kids for the future.At MathCodeLab, he advises on curriculum direction, AI learning pathways for students, and the long-term vision to make high-quality CS education engaging and accessible.",
      image: "/kalyansir.png",
      linkedinUrl: "https://www.linkedin.com/in/kalyan-ram-kaki-52168659/",
      specialties: ["Computer Science Education", "STEM Curriculum", "Pedagogical Innovation"]
    },

  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

     
      {/* Advisors Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--theme-primary)' }}>
              Our Advisors
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--theme-secondary)' }}></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert guidance from industry leaders and education professionals who help shape our vision and ensure excellence in everything we do.
            </p>
          </div>

          <div className="space-y-20">
            {advisors.map((advisor, index) => (
              <div key={advisor.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>

                {/* Photo Section */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-8 border-white">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          e.target.src = `https://via.placeholder.com/320x320/8B5CF6/FFFFFF?text=${advisor.name.split(' ').map(n => n[0]).join('')}`
                        }}
                      />
                    </div>
                    {/* Decorative elements */}
                    <div
                      className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
                      style={{ backgroundColor: 'var(--theme-secondary)' }}
                    ></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20"
                      style={{ backgroundColor: 'var(--theme-primary)' }}
                    ></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--theme-primary)' }}>
                    {advisor.name}
                  </h2>
                  <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--theme-secondary)' }}>
                    {advisor.title}
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {advisor.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4 justify-center lg:justify-start">
                    <a
                      href={advisor.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                      style={{ backgroundColor: '#0077B5' }}
                      aria-label={`${advisor.name}'s LinkedIn Profile`}
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--theme-primary)' }}>
            Our Founders
          </h1>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'var(--theme-secondary)' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The visionary team behind MathCodeLab's mission to revolutionize coding education
            through innovative teaching methodologies and cutting-edge technology.
          </p>
        </div>
      </section>


      {/* Founders Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {founders.map((founder, index) => (
              <div key={founder.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>

                {/* Photo Section */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-8 border-white">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          e.target.src = `https://via.placeholder.com/320x320/6B73FF/FFFFFF?text=${founder.name.split(' ').map(n => n[0]).join('')}`
                        }}
                      />
                    </div>
                    {/* Decorative elements */}
                    <div
                      className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
                      style={{ backgroundColor: 'var(--theme-primary)' }}
                    ></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20"
                      style={{ backgroundColor: 'var(--theme-secondary)' }}
                    ></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--theme-primary)' }}>
                    {founder.name}
                  </h2>
                  <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--theme-secondary)' }}>
                    {founder.title}
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {founder.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4 justify-center lg:justify-start">
                    <a
                      href={founder.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                      style={{ backgroundColor: '#0077B5' }}
                      aria-label={`${founder.name}'s LinkedIn Profile`}
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--theme-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of students who have transformed their understanding of coding and programming with our innovative approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigateToHomeSection('contact')}
              className="px-8 py-4 bg-white text-lg font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105"
              style={{ color: 'var(--theme-primary)' }}
            >
              Get Started Today
            </button>
            <button
              type="button"
              onClick={() => navigateToHomeSection('our-programs')}
              className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg transition-all hover:bg-white hover:scale-105"
              style={{ '--hover-color': 'var(--theme-primary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--theme-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white'
              }}
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Section - Commented out since footer already has social media links */}
      {/*
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--theme-primary)' }}>
            Connect with MathCodeLab
          </h3>
          <div className="flex justify-center gap-6">
            LinkedIn
            <a
              href="https://www.linkedin.com/company/mathcodelab/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              style={{ backgroundColor: '#0077B5' }}
              aria-label="Follow MathCodeLab on LinkedIn"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            Instagram
            <a
              href="https://www.instagram.com/mathcodelabmedia?igsh=dHBtbXRtMTQ5Z2Vt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              style={{ background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)' }}
              aria-label="Follow MathCodeLab on Instagram"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            Medium
            <a
              href="https://medium.com/mathcodelab"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              style={{ backgroundColor: '#00AB6C' }}
              aria-label="Read MathCodeLab articles on Medium"
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            Stay updated with our latest insights, tutorials, and educational content
          </p>
        </div>
      </section>
      */}

      <Footer />
    </div>
  )
}

export default Founders