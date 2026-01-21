import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Header() {
  const [currentTheme, setCurrentTheme] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Apply theme on component mount and when theme changes
  useEffect(() => {
    // Check localStorage for saved theme and apply it, but keep dropdown showing "Make it Fun"
    const savedTheme = localStorage.getItem('theme') || ""
    // Always keep dropdown at "Make it Fun" (empty string)
    setCurrentTheme("")
    // But apply the saved theme to the page
    if (savedTheme) {
      applyTheme(savedTheme)
    }
  }, [])

  const applyTheme = (theme) => {
    const root = document.documentElement

    if (theme === "Green & Purple" || theme === "") {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', theme)
    }
  }

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
    setIsMobileMenuOpen(false)
  }

  // Helper function to scroll to payment section on current page
  const scrollToPayment = () => {
    const paymentElement = document.getElementById('enroll')
    if (paymentElement) {
      paymentElement.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  // Handler for Quiz link - opens both URLs
  const handleQuizClick = () => {
    
    window.open('https://quiz.mathcodelab.com', '_blank')
    setIsMobileMenuOpen(false)
  }

  // Check if current page should hide the enroll button
  const hideEnrollButton = ['/', '/faq', '/founders'].includes(location.pathname)

  const handleThemeChange = (e) => {
    const theme = e.target.value
    setCurrentTheme(theme)
    applyTheme(theme)

    // Save theme to localStorage for persistence
    localStorage.setItem('theme', theme)
  }

  return (
    <header className="bg-white shadow-md border-b relative">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-19">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105 bg-transparent border-none p-0"
              style={{ cursor: 'pointer' }}
            >
              <div className="relative p-1">
                <img
                  src="/logo.png"
                  alt="MathCodeLab Logo"
                  className="w-21 h-20 object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                />
              </div>

            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center justify-end flex-1 mx-4">
            <div className="flex items-center space-x-2 lg:space-x-4">
              <Link
                to="/"
                className="font-medium text-base transition-all duration-200 hover:text-white px-3 py-2 rounded-lg whitespace-nowrap"
                style={{ color: 'var(--theme-primary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--theme-primary)'
                }}
              >
                Home
              </Link>

              {/* Programs Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => navigateToHomeSection('our-programs')}
                  className="font-medium text-base transition-all duration-200 hover:text-white px-3 py-2 rounded-lg cursor-pointer whitespace-nowrap"
                  style={{ color: 'var(--theme-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--theme-primary)'
                  }}
                >
                  Programs
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full mt-2 w-36 bg-white rounded-md shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50"
                  style={{ borderColor: 'var(--theme-secondary)' }}>
                  <div className="py-1">
                    <Link
                      to="/level0"
                      className="block px-4 py-1.5 transition-all duration-150 font-medium text-sm hover:text-white"
                      style={{ color: 'var(--theme-primary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'var(--theme-primary)'
                      }}
                    >
                      Level 0
                    </Link>
                    <Link
                      to="/level1"
                      className="block px-4 py-1.5 transition-all duration-150 font-medium text-sm hover:text-white"
                      style={{ color: 'var(--theme-primary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'var(--theme-primary)'
                      }}
                    >
                      Level 1
                    </Link>
                    <Link
                      to="/level2"
                      className="block px-4 py-1.5 transition-all duration-150 font-medium text-sm hover:text-white"
                      style={{ color: 'var(--theme-primary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'var(--theme-primary)'
                      }}
                    >
                      Level 2
                    </Link>
                    <Link
                      to="/level3"
                      className="block px-4 py-1.5 transition-all duration-150 font-medium text-sm hover:text-white"
                      style={{ color: 'var(--theme-primary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'var(--theme-primary)'
                      }}
                    >
                      Level 3
                    </Link>
                    <Link
                      to="/level4"
                      className="block px-4 py-1.5 transition-all duration-150 font-medium text-sm hover:text-white"
                      style={{ color: 'var(--theme-primary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'var(--theme-primary)'
                      }}
                    >
                      Level 4
                    </Link>
                    <Link
                      to="/csexplorers"
                      className="block px-4 py-1.5 transition-all duration-150 font-medium text-sm hover:text-white"
                      style={{ color: 'var(--theme-primary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'var(--theme-primary)'
                      }}
                    >
                      CS Explorers
                    </Link>
                    <Link
                      to="/Code2conquer"
                      className="block px-4 py-1.5 transition-all duration-150 font-medium text-sm hover:text-white"
                      style={{ color: 'var(--theme-primary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'var(--theme-primary)'
                      }}
                    >
                      Code2conquer
                    </Link>
                    <Link
                      to="/ap-computer-science"
                      className="block px-4 py-1.5 transition-all duration-150 font-medium text-sm hover:text-white"
                      style={{ color: 'var(--theme-primary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'var(--theme-primary)'
                      }}
                    >
                      AP Computer Science
                    </Link>
                    <Link
                      to="/symposium-series"
                      className="block px-4 py-1.5 transition-all duration-150 font-medium text-sm hover:text-white"
                      style={{ color: 'var(--theme-primary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'var(--theme-primary)'
                      }}
                    >
                      Symposium Series
                    </Link>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigateToHomeSection('why')}
                className="font-medium text-base transition-all duration-200 hover:text-white px-3 py-2 rounded-lg whitespace-nowrap"
                style={{ color: 'var(--theme-primary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--theme-primary)'
                }}
              >
                Why Us
              </button>

              <button
                type="button"
                onClick={() => navigate('/faq')}
                className="font-medium text-base transition-all duration-200 hover:text-white focus:outline-none px-3 py-2 rounded-lg whitespace-nowrap"
                style={{ color: 'var(--theme-primary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--theme-primary)'
                }}
              >
                FAQ
              </button>
              <Link
                to="/founders"
                className="font-medium text-base transition-all duration-200 hover:text-white px-3 py-2 rounded-lg whitespace-nowrap"
                style={{ color: 'var(--theme-primary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--theme-primary)'
                }}
              >
                Our Team
              </Link>

              {/* Student Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="font-medium text-base transition-all duration-200 hover:text-white px-3 py-2 rounded-lg cursor-pointer whitespace-nowrap"
                  style={{ color: 'var(--theme-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--theme-primary)'
                  }}
                >
                  Student
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full mt-2 w-36 bg-white rounded-md shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50"
                  style={{ borderColor: 'var(--theme-secondary)' }}>
                  <div className="py-1">
                    <button
                      type="button"
                      onClick={handleQuizClick}
                      className="block w-full text-left px-4 py-1.5 transition-all duration-150 font-medium text-sm hover:text-white"
                      style={{ color: 'var(--theme-primary)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'var(--theme-primary)'
                      }}
                    >
                      Quiz
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigateToHomeSection('contactus')}
                className="font-medium text-base transition-all duration-200 hover:text-white px-3 py-2 rounded-lg whitespace-nowrap"
                style={{ color: 'var(--theme-primary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--theme-primary)'
                }}
              >
                Contact Us
              </button>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5 flex-shrink-0">
            {/* Theme Selector */}
            <select
              value={currentTheme}
              onChange={handleThemeChange}
              className="text-sm border-2 border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:border-2 min-w-0 font-medium"
              style={{
                '--tw-ring-color': 'var(--theme-secondary)',
                borderColor: 'var(--theme-secondary)'
              }}
            >
              <option value="" disabled>Make it Fun</option>
              <option value="Green & Purple">Green & Purple</option>
              <option value="ocean-blue">Ocean Blue</option>
              <option value="sanguine">Sanguine</option>
              <option value="luscious-lime">Luscious Lime</option>
              <option value="purple-lake">Purple Lake</option>
              <option value="blushing-rose">Blushing Rose</option>
            </select>


            {/* Enroll Button - Hidden on Home, FAQ, and Founders Pages */}
            {!hideEnrollButton && (
              <button
                type="button"
                onClick={scrollToPayment}
                className="text-white px-7 py-3 rounded-lg font-bold text-base transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:scale-105 whitespace-nowrap"
                style={{ backgroundColor: 'var(--theme-primary)' }}
              >
                Enroll Now
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none transition-colors p-2"
              style={{
                color: 'var(--theme-primary)'
              }}
            >
              {isMobileMenuOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute right-0 top-full md:hidden border-t max-w-xs bg-white shadow-lg z-50" style={{ borderColor: 'var(--theme-secondary)' }}>
          <div className="px-9 pt-2 pb-5 space-y-1">
            {/* Theme Selector Mobile */}
            <div className="py-1.5 px-1">
              <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--theme-primary)' }}>
                Theme
              </label>
              <select
                value={currentTheme}
                onChange={handleThemeChange}
                className="w-full text-xs border rounded px-2 py-1 focus:outline-none focus:ring-1"
                style={{
                  '--tw-ring-color': 'var(--theme-secondary)',
                  borderColor: 'var(--theme-secondary)'
                }}
              >
                <option value="" disabled>Make it Fun</option>
                <option value="Green & Purple">Green & Purple</option>
                <option value="ocean-blue">Ocean Blue</option>
                <option value="sanguine">Sanguine</option>
                <option value="luscious-lime">Luscious Lime</option>
                <option value="purple-lake">Purple Lake</option>
                <option value="blushing-rose">Blushing Rose</option>
              </select>
            </div>

            {/* Navigation Links */}
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white px-3 py-1.5 rounded font-medium text-sm transition-all duration-200 hover:shadow-md"
              style={{ backgroundColor: 'var(--theme-secondary)' }}
            >
              Home
            </Link>

            {/* Programs - Mobile Expanded */}
            <div className="space-y-0.5">
              <button
                type="button"
                onClick={() => navigateToHomeSection('our-programs')}
                className="block w-full text-left px-3 py-1.5 font-semibold text-sm transition-colors rounded"
                style={{ color: 'var(--theme-primary)' }}
              >
                All Programs
              </button>
              <div className="pl-2 space-y-0.5">
                <Link
                  to="/level0"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-1 text-xs font-medium transition-all duration-150 rounded"
                  style={{ color: 'var(--theme-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--theme-primary)'
                  }}
                >
                  Level 0
                </Link>
                <Link
                  to="/level1"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-1 text-xs font-medium transition-all duration-150 rounded"
                  style={{ color: 'var(--theme-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--theme-primary)'
                  }}
                >
                  Level 1
                </Link>
                <Link
                  to="/level2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-1 text-xs font-medium transition-all duration-150 rounded"
                  style={{ color: 'var(--theme-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--theme-primary)'
                  }}
                >
                  Level 2
                </Link>
                <Link
                  to="/level3"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-1 text-xs font-medium transition-all duration-150 rounded"
                  style={{ color: 'var(--theme-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--theme-primary)'
                  }}
                >
                  Level 3
                </Link>
                <Link
                  to="/level4"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-1 text-xs font-medium transition-all duration-150 rounded"
                  style={{ color: 'var(--theme-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--theme-primary)'
                  }}
                >
                  Level 4
                </Link>
                <Link
                  to="/csexplorers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-1 text-xs font-medium transition-all duration-150 rounded"
                  style={{ color: 'var(--theme-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--theme-primary)'
                  }}
                >
                  CS Explorers
                </Link>
                <Link
                  to="/Code2conquer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-1 text-xs font-medium transition-all duration-150 rounded"
                  style={{ color: 'var(--theme-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--theme-primary)'
                  }}
                >
                  Code2Conquer
                </Link>
                <Link
                  to="/ap-computer-science"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-1 text-xs font-medium transition-all duration-150 rounded"
                  style={{ color: 'var(--theme-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--theme-primary)'
                  }}
                >
                  AP Computer Science
                </Link>
                <Link
                  to="/symposium-series"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-1 text-xs font-medium transition-all duration-150 rounded"
                  style={{ color: 'var(--theme-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--theme-primary)'
                  }}
                >
                  Symposium Series
                </Link>

              </div>
            </div>

            <button
              type="button"
              onClick={() => navigateToHomeSection('why')}
              className="block w-full text-left px-3 py-1 font-medium text-sm transition-colors rounded hover:bg-gray-50"
              style={{ color: 'var(--theme-primary)' }}
            >
              Why Us
            </button>
            <Link
              to="/founders"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-3 py-1.5 font-medium text-sm transition-colors rounded hover:bg-gray-50"
              style={{ color: 'var(--theme-primary)' }}
            >
              Our Team
            </Link>

            {/* Student - Mobile Expanded */}
            <div className="space-y-0.5">
              <button
                type="button"
                className="block w-full text-left px-3 py-1.5 font-semibold text-sm transition-colors rounded"
                style={{ color: 'var(--theme-primary)' }}
              >
                Student
              </button>
              <div className="pl-2 space-y-0.5">
                <button
                  type="button"
                  onClick={handleQuizClick}
                  className="block w-full text-left px-2 py-1 text-xs font-medium transition-all duration-150 rounded"
                  style={{ color: 'var(--theme-primary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--theme-primary)'
                  }}
                >
                  Quiz
                </button>
              </div>
            </div>

            {/* <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false)
                navigate('/csexplorers')
              }}
              className="block w-full text-left px-3 py-1.5 font-medium text-sm transition-colors rounded hover:bg-gray-50"
              style={{ color: 'var(--theme-primary)' }}
            >
              CS Explorers
            </button> */}
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false)
                navigate('/faq')
              }}
              className="block w-full text-left px-3 py-1.5 font-medium text-sm transition-colors rounded hover:bg-gray-50 focus:outline-none"
              style={{ color: 'var(--theme-primary)' }}
            >
              FAQ
            </button>
            {/* <Link
              to="/founders"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-3 py-1.5 font-medium text-sm transition-colors rounded hover:bg-gray-50"
              style={{ color: 'var(--theme-primary)' }}
            >
              Founders
            </Link> */}
            <button
              type="button"
              onClick={() => navigateToHomeSection('contactus')}
              className="block w-full text-left px-3 py-1.5 font-medium text-sm transition-colors rounded hover:bg-gray-50"
              style={{ color: 'var(--theme-primary)' }}
            >
              Contact US
            </button>

            {/* Enroll Button Mobile - Hidden on Home, FAQ, and Founders Pages */}
            {!hideEnrollButton && (
              <button
                type="button"
                onClick={scrollToPayment}
                className="block text-center text-white px-3 py-1.5 rounded font-medium text-sm transition-all duration-200 hover:opacity-90 hover:shadow-md mt-1 w-full"
                style={{ backgroundColor: 'var(--theme-primary)' }}
              >
                Enroll Now
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header