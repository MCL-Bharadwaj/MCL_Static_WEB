import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { useNavigate, useLocation } from 'react-router-dom'

function Level3() {
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

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 min-h-screen flex flex-col">
      <Header />
      
      {/* Scrolling Announcement Banner */}
      <div className="text-white py-3 overflow-hidden relative w-full" style={{ backgroundColor: 'var(--theme-primary)' }}>
        <div className="animate-scroll whitespace-nowrap inline-block">
          <span className="inline-block px-4 text-base sm:text-lg font-semibold">
            🚀 Level 3 Coming Soon! 🚀 Big Things Are On The Way! 🚀 Level 3 Coming Soon! 🚀 Big Things Are On The Way! 🚀 Level 3 Coming Soon! 🚀 Big Things Are On The Way! 🚀 Level 3 Coming Soon! 🚀 Big Things Are On The Way! 🚀 Level 3 Coming Soon! 🚀 Big Things Are On The Way! 🚀 Level 3 Coming Soon! 🚀 Big Things Are On The Way! 🚀
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full text-center">
          

          {/* Coming Soon Badge */}
          <div className="inline-block mb-6">
            <span className="px-6 py-3 text-white rounded-full font-bold text-lg shadow-lg" style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))` }}>
              Coming Soon
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6" style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Level 3
          </h1>

          {/* Message */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border-4" style={{ borderColor: 'var(--theme-secondary)' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-relaxed">
              Big things are coming!
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              The <span className="font-bold" style={{ color: 'var(--theme-primary)' }}>Level 3 Course</span> launches soon — your next step toward mastery.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-1 w-16 rounded" style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))` }}></div>
              <span className="text-2xl">✨</span>
              <div className="h-1 w-16 rounded" style={{ background: `linear-gradient(to right, var(--theme-secondary), var(--theme-accent))` }}></div>
            </div>
            <p className="text-xl text-gray-600 font-medium">
              If you just can't wait, get in touch with us now!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => navigateToHomeSection('contact')}
              className="px-8 py-4 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
              style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-accent))` }}
            >
              Contact Us Now
            </button>
            <button
              type="button"
              onClick={() => navigateToHomeSection('our-programs')}
              className="px-8 py-4 bg-white text-lg font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-200 border-4"
              style={{ borderColor: 'var(--theme-primary)', color: 'var(--theme-primary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white'
                e.currentTarget.style.color = 'var(--theme-primary)'
              }}
            >
              Explore Other Levels
            </button>
          </div>

         
        </div>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(60%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          display: inline-block;
          animation: scroll 50s linear infinite;
          will-change: transform;
        }
        
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        }
      `}</style>
    </div>
  )
}

export default Level3