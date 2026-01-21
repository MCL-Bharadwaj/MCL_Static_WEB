import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Set current year
    setCurrentYear(new Date().getFullYear())
  }, [])

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

  return (
    <footer className="bg-slate-800 text-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))` 
                }}
              >
                <span className="text-white font-bold text-sm">MCL</span>
              </div>
              <span className="text-xl font-semibold">MathCodeLab</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Cultivating Critical Thinkers through Puzzle based Learning
            </p>
          </div>

          {/* Explore Section */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">EXPLORE</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  type="button"
                  onClick={() => navigateToHomeSection('our-programs')} 
                  className="text-gray-300 hover:text-white transition-colors text-sm bg-transparent border-none p-0 cursor-pointer"
                >
                  Programs
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => navigateToHomeSection('why')} 
                  className="text-gray-300 hover:text-white transition-colors text-sm bg-transparent border-none p-0 cursor-pointer"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => navigate('/csexplorers')} 
                  className="text-gray-300 hover:text-white transition-colors text-sm bg-transparent border-none p-0 cursor-pointer"
                >
                  CS Explorers
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => navigateToHomeSection('contact')} 
                  className="text-gray-300 hover:text-white transition-colors text-sm bg-transparent border-none p-0 cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">CONTACT</h3>
            <div className="space-y-3">
              <a 
                href="mailto:Communications@MathCodeLab.com" 
                className="hover:opacity-80 transition-colors text-sm block"
                style={{ color: 'var(--theme-primary)' }}
              >
                Contact@MathCodeLab.com
              </a>
              <p className="text-gray-400 text-xs">
                © {currentYear} MathCodeLab. All rights reserved.
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">FOLLOW US</h3>
            <div className="flex flex-wrap gap-4">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/mathcodelab/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#0077B5' }}
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/mathcodelabmedia?igsh=dHBtbXRtMTQ5Z2Vt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                style={{ background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)' }}
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/1BYupr8cyw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#1877F2' }}
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@mathcodelab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#FF0000' }}
                aria-label="Follow us on YouTube"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>

              {/* Medium */}
              <a 
                href="https://medium.com/mathcodelab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#00AB6C' }}
                aria-label="Read our articles on Medium"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-xs mt-4">
              Connect with us on social media for updates and news!
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer