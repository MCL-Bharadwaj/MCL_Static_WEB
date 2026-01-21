import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { Toaster } from 'react-hot-toast'

function APComputerScience() {
  return (


    <div>
      <Toaster position="top-right" />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section py-20 px-6 md:px-12 bg-gradient-to-br from-green-100 via-blue-100 to-purple-200" role="banner">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
                AP Computer Science A
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Complete Preparation
              </h2>
              <p className="text-2xl text-gray-700 mb-8 font-medium">
                Your Path to a Perfect 5 🎯 - Comprehensive AP CSA preparation with 520+ practice questions, 10 lecture guides, and 5 Free-Response Questions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#enquiry"
                  className="text-white px-7 py-3 rounded-xl font-semibold text-lg shadow-md transition-all hover:opacity-90 hover:scale-105"
                  style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-accent))` }}
                >
                  Enquiry
                </a>
                <a
                  href="#enroll"
                  className="text-white px-7 py-3 rounded-xl font-semibold text-lg shadow-md transition-all hover:opacity-90 hover:scale-105"
                  style={{ background: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary))` }}
                >
                  Enroll Now
                </a>
              </div>
              <ul className="flex flex-wrap gap-3 text-base text-gray-700 font-medium">
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">Age Group: 13-18</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">16-Week Program</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">520+ Questions</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">College Board Aligned</li>
              </ul>
            </div>
            <figure className="flex justify-center items-center">
              <img
                src="/Media.jpg"
                alt="AP Computer Science A Exam Preparation"
                className="rounded-3xl shadow-2xl w-full max-w-lg border-4 border-white"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {/* Course Pathways */}
        <section className="py-16 bg-white" id="enroll">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">🚀 Course Pathways</h2>
            <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Choose the learning path that fits your schedule and goals. Both tracks include comprehensive AP CSA preparation with expert instruction.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* 8-Week Fast Track */}
              <div className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 rounded-3xl shadow-xl p-8 border-2 border-orange-200">
                <div className="text-center mb-6">
                  <div className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full font-bold text-lg mb-4">
                    8-WEEK FAST TRACK
                  </div>
                  <h3 className="text-2xl font-bold text-orange-900 mb-2">Intensive AP Prep</h3>
                  <p className="text-gray-700">Perfect for students who want accelerated learning</p>
                </div>

                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-orange-700 mb-2">SCHEDULE</div>
                    <div className="text-gray-800">
                      <div>📅 1 Day/Week</div>
                      <div>⏱️ 90 Min Classes + 60 Min Labs</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Basic Package */}
                  <div className="bg-white rounded-xl p-6 border-2 border-orange-300 flex flex-col h-full min-h-[400px]">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Basic Package</h4>
                    <ul className="space-y-2 text-gray-700 mb-4 flex-grow">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">✓</span>
                        <span>Live Classes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">✓</span>
                        <span>Daily Assignments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">✓</span>
                        <span>Topic Quizzes</span>
                      </li>
                    </ul>
                    <div className="text-center mt-4 pt-4 border-t border-orange-200">
                      <div className="mb-3">
                        <div className="text-lg line-through text-gray-400">$299</div>
                        <div className="text-3xl font-extrabold text-orange-900">$249</div>
                      </div>
                      <a 
                        href="https://buy.stripe.com/fZufZg2Mm2mS1Tp4GIgMw0p" 
                        className="inline-block text-white px-6 py-2 rounded-lg font-semibold shadow transition hover:opacity-90 whitespace-nowrap"
                        style={{ backgroundColor: 'var(--theme-primary)' }}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>

                  {/* Advanced Package */}
                  <div className="bg-gradient-to-br from-orange-100 to-white rounded-xl p-6 border-2 border-orange-400 shadow-lg flex flex-col h-full min-h-[400px]">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">5-Score Bundle</h4>
                    <ul className="space-y-2 text-gray-700 mb-4 flex-grow">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">✓</span>
                        <span>Everything in Basic Package</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">✓</span>
                        <span>Weekly Lab Support Sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">✓</span>
                        <span>1:1 Code Reviews (2 Sessions)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">✓</span>
                        <span>AP Exam Strategies & Tips</span>
                      </li>
                    </ul>
                    <div className="text-center mt-4 pt-4 border-t border-orange-300">
                      <div className="mb-3">
                        <div className="text-lg line-through text-gray-400">$499</div>
                        <div className="text-3xl font-extrabold text-orange-900">$399</div>
                      </div>
                      <a 
                        href="https://buy.stripe.com/8x29ASev4gdI55B1uwgMw0q" 
                        className="inline-block text-white px-6 py-2 rounded-lg font-semibold shadow transition hover:opacity-90 whitespace-nowrap"
                        style={{ backgroundColor: 'var(--theme-accent)' }}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 16-Week Mastery */}
              <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-xl p-8 border-2 border-blue-200">
                <div className="text-center mb-6">
                  <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-lg mb-4">
                    16-WEEK MASTERY
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Comprehensive Mastery</h3>
                  <p className="text-gray-700">Deep dive into AP CSA with extended practice time</p>
                </div>

                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-blue-700 mb-2">SCHEDULE</div>
                    <div className="text-gray-800">
                      <div>📅 1 Day/Week</div>
                      <div>⏱️ 60 Min Classes + 60 Min Labs</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Basic Package */}
                  <div className="bg-white rounded-xl p-6 border-2 border-blue-300 flex flex-col h-full min-h-[400px]">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Basic Package</h4>
                    <ul className="space-y-2 text-gray-700 mb-4 flex-grow">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>Live Classes (1 day/week)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>Daily Assignments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>Topic Quizzes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>Extended Practice Time</span>
                      </li>
                    </ul>
                    <div className="text-center mt-4 pt-4 border-t border-blue-200">
                      <div className="mb-3">
                        <div className="text-lg line-through text-gray-400">$499</div>
                        <div className="text-3xl font-extrabold text-blue-900">$399</div>
                      </div>
                      <a 
                        href="https://buy.stripe.com/9B63cu9aKd1wapVgpqgMw0r" 
                        className="inline-block text-white px-6 py-2 rounded-lg font-semibold shadow transition hover:opacity-90 whitespace-nowrap"
                        style={{ backgroundColor: 'var(--theme-secondary)' }}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>

                  {/* Advanced Package */}
                  <div className="bg-gradient-to-br from-blue-100 to-white rounded-xl p-6 border-2 border-blue-400 shadow-lg flex flex-col h-full min-h-[400px]">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">5-Score Bundle</h4>
                    <ul className="space-y-2 text-gray-700 mb-4 flex-grow">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>Everything in Basic Package</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>Weekly Lab Support Sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>1:1 Code Reviews (3 Sessions)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>AP Exam Strategies & Tips</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>Priority Support Access</span>
                      </li>
                    </ul>
                    <div className="text-center mt-4 pt-4 border-t border-blue-300">
                      <div className="mb-3">
                        <div className="text-lg line-through text-gray-400">$699</div>
                        <div className="text-3xl font-extrabold text-blue-900">$549</div>
                      </div>
                      <a 
                        href="https://buy.stripe.com/eVq9AS3Qq4v0apV4GIgMw0s" 
                        className="inline-block text-white px-6 py-2 rounded-lg font-semibold shadow transition hover:opacity-90 whitespace-nowrap"
                        style={{ backgroundColor: 'var(--theme-primary)' }}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 text-center mb-12">
              <p className="text-gray-800 font-semibold mb-2">
                ✨ Both tracks include: Lecture Notes, 520+ Practice Questions, 5 FRQs, and College Board-aligned curriculum
              </p>
              <p className="text-gray-700">
                🎓 Subject to qualification through AP Prep Assessment
              </p>
            </div>

            {/* Tuition & Payment Options */}
            {/* <div className="mb-8">
              <h3 className="text-4xl font-extrabold text-purple-700 mb-10 text-center drop-shadow">Tuition & Payment Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-xs font-bold text-orange-600 mb-2 uppercase tracking-wide">8-Week Fast Track</div>
                  <div className="text-3xl mb-2">📦</div>
                  <div className="text-xl font-bold text-blue-700 mb-1">Basic</div>
                  <div className="mb-3">
                    <div className="text-lg line-through text-gray-400">$299</div>
                    <div className="text-3xl font-extrabold text-blue-900">$249</div>
                  </div>
                  <a 
                    href="https://buy.stripe.com/fZufZg2Mm2mS1Tp4GIgMw0p" 
                    className="inline-block text-white px-6 py-2 rounded-lg font-semibold shadow transition mb-2 hover:opacity-90 whitespace-nowrap"
                    style={{ backgroundColor: 'var(--theme-primary)' }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Sign Up
                  </a>
                  <div className="text-xs text-gray-500">Best Value</div>
                </div>
                <div className="bg-gradient-to-br from-pink-100 via-white to-purple-100 rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-xs font-bold text-orange-600 mb-2 uppercase tracking-wide">8-Week Fast Track</div>
                  <div className="text-3xl mb-2">⭐</div>
                  <div className="text-xl font-bold text-pink-700 mb-1">Advanced</div>
                  <div className="mb-3">
                    <div className="text-lg line-through text-gray-400">$499</div>
                    <div className="text-3xl font-extrabold text-pink-900">$399</div>
                  </div>
                  <a 
                    href="https://buy.stripe.com/8x29ASev4gdI55B1uwgMw0q" 
                    className="inline-block text-white px-6 py-2 rounded-lg font-semibold shadow transition mb-2 hover:opacity-90 whitespace-nowrap"
                    style={{ backgroundColor: 'var(--theme-accent)' }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Sign Up
                  </a>
                  <div className="text-xs text-gray-500">4 payments/year</div>
                </div>
                 <div className="bg-gradient-to-br from-green-100 via-white to-blue-100 rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform">                  <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">16-Week Mastery</div>                  <div className="text-3xl mb-2">�</div>
                  <div className="text-xl font-bold text-green-700 mb-1">Basic</div>
                  <div className="mb-3">
                    <div className="text-lg line-through text-gray-400">$499</div>
                    <div className="text-3xl font-extrabold text-green-900">$399</div>
                  </div>
                  <a 
                    href="https://buy.stripe.com/9B63cu9aKd1wapVgpqgMw0r" 
                    className="inline-block text-white px-6 py-2 rounded-lg font-semibold shadow transition mb-2 hover:opacity-90 whitespace-nowrap"
                    style={{ backgroundColor: 'var(--theme-secondary)' }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Sign Up
                  </a>
                  <div className="text-xs text-gray-500">2 payments/year</div>
                </div>
               
                <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">16-Week Mastery</div>
                  <div className="text-3xl mb-2">⭐</div>
                  <div className="text-xl font-bold text-blue-700 mb-1">Advanced</div>
                  <div className="mb-3">
                    <div className="text-lg line-through text-gray-400">$699</div>
                    <div className="text-3xl font-extrabold text-blue-900">$549</div>
                  </div>
                  <a 
                    href="https://buy.stripe.com/eVq9AS3Qq4v0apV4GIgMw0s" 
                    className="inline-block text-white px-6 py-2 rounded-lg font-semibold shadow transition mb-2 hover:opacity-90 whitespace-nowrap"
                    style={{ backgroundColor: 'var(--theme-primary)' }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Sign Up
                  </a>
                  <div className="text-xs text-gray-500">Best Value</div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* What This Course Covers */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">📚 What This Course Covers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                { num: '1', title: 'Primitive Types', desc: 'Master variables, data types, operators, and expressions with real-world applications' },
                { num: '2', title: 'Using Objects', desc: 'Deep dive into String, Math, wrapper classes, and object manipulation' },
                { num: '3', title: 'Boolean Expressions & Conditionals', desc: 'Complete coverage of logical reasoning, if-else chains, and De Morgan\'s Law' },
                { num: '4', title: 'Iteration', desc: 'Expert training in while loops, for loops, nested loops, and loop algorithms' },
                { num: '5', title: 'Writing Classes', desc: 'Professional-grade instruction on OOP principles, encapsulation, and design' },
                { num: '6', title: 'Arrays', desc: 'Comprehensive array manipulation, traversal patterns, and common algorithms' },
                { num: '7', title: 'ArrayList', desc: 'Dynamic collections mastery with real-world object management scenarios' },
                { num: '8', title: '2D Arrays', desc: 'Matrix operations, row/column traversal, and advanced grid algorithms' },
                { num: '9', title: 'Inheritance', desc: 'Complete hierarchy design, polymorphism, and abstract classes' },
                { num: '10', title: 'Recursion', desc: 'Master recursive thinking with step-by-step tracing and problem-solving' },
              ].map((topic) => (
                <div key={topic.num} className="rounded-3xl bg-white/90 p-8 program-card-hover">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {topic.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                      <p className="text-gray-700">{topic.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dual-Format Learning System */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-purple-700 mb-10 text-center">Dual-Format Learning System</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Lecture Notes */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-4xl">📚</div>
                  <h3 className="text-2xl font-bold text-blue-700">Lecture Notes (10 Comprehensive Guides)</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Print-ready PDF format - Professional typesetting for study and review',
                    'Real-world examples - Every concept tied to practical applications',
                    'Code walkthroughs - Line-by-line explanations with detailed comments',
                    'Visual aids - Tables, diagrams, and trace charts for complex concepts',
                    'Practice problems - Curated exercises with complete solutions',
                    'Common pitfalls - Learn from typical student mistakes before you make them'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Quiz System */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-4xl">📝</div>
                  <h3 className="text-2xl font-bold text-purple-700">Interactive Quiz System (45+ Topic-Specific Quizzes)</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    '520+ Multiple Choice Questions - Covering every AP CSA concept',
                    '5 Free-Response Questions - College Board-style FRQs with detailed specifications',
                    'Multiple question types - MCQ single/multi-select, ordering, matching, fill-in-blank, drag-drop',
                    'Instant feedback - Learn immediately from each question',
                    'Difficulty progression - Questions range from foundational to AP exam level'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Phases */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">🚀 Systematic Skill Building</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  phase: 'Phase 1: Foundation',
                  weeks: 'Weeks 1-4',
                  items: [
                    'Read Primitive Types, Using Objects, Booleans',
                    'Complete basic concept quizzes (10-15 questions each)',
                    'Practice simple algorithm design',
                    'Goal: Master syntax and basic problem-solving'
                  ]
                },
                {
                  phase: 'Phase 2: Core Concepts',
                  weeks: 'Weeks 5-8',
                  items: [
                    'Study Iteration, Writing Classes, Arrays',
                    'Tackle intermediate complexity quizzes (15-20 questions)',
                    'Work on class design and array manipulation',
                    'Goal: Build algorithmic thinking and OOP skills'
                  ]
                },
                {
                  phase: 'Phase 3: Advanced Topics',
                  weeks: 'Weeks 9-12',
                  items: [
                    'Master ArrayList, 2D Arrays, Inheritance, Recursion',
                    'Challenge yourself with comprehensive assessments',
                    'Complete full exam-style questions',
                    'Goal: Synthesize knowledge and exam strategy'
                  ]
                },
                {
                  phase: 'Phase 4: Exam Ready',
                  weeks: 'Weeks 13-16',
                  items: [
                    'Revisit lecture notes for weak areas',
                    'Retake missed questions, achieve 90%+ accuracy',
                    'Timed practice under exam conditions',
                    'Goal: Confidence and speed for exam day'
                  ]
                }
              ].map((phase, idx) => (
                <div key={idx} className="rounded-3xl bg-white/90 p-8 program-card-hover">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 inline-block">
                    {phase.weeks}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unique Features */}
        <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-purple-700 mb-10 text-center">💎 What Makes These Quizzes Unique</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🎯', title: 'Six Question Types', desc: 'Multiple choice, multi-select, ordering, matching, fill-in-blank, and code analysis' },
                { icon: '📊', title: 'Progressive Difficulty', desc: 'Scaffolded learning path from foundation to synthesis, matching AP exam levels' },
                { icon: '🌍', title: 'Real-World Context', desc: 'Practical scenarios like student grade management, banking systems, game boards' },
                { icon: '🔄', title: 'Adaptive Pathways', desc: 'Multiple learning styles supported - sequential, topic-focused, or exam-prep mode' },
                { icon: '✅', title: 'Quiz Feedback', desc: 'Learn about answer outcome with detailed explanation' },
                { icon: '🎓', title: 'College Board Aligned', desc: 'Every component meticulously aligned with AP CSA Course and Exam Description' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USPs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">🌟 Why This System Beats the Competition</h2>
            <div className="space-y-6">
              {[
                { title: 'Completeness', desc: '100% AP CSA framework coverage, current exam format, zero gaps' },
                { title: 'Professional Quality', desc: 'Expert-authored content, professionally structured, thoroughly validated' },
                { title: 'Interactive Assessment', desc: '6 question types, instant feedback, learning from each attempt' },
                { title: 'Dual-Mode Learning', desc: 'Lecture notes + quizzes working together, seamless cross-referencing' },
                { title: 'Exam-Day Ready', desc: 'College Board-aligned MCQ and FRQ, authentic test experience' },
                { title: 'Flexibility', desc: 'Multiple pathways, self-paced, adapt to your schedule' }
              ].map((usp, idx) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">USP #{idx + 1}: {usp.title}</h3>
                  <p className="text-gray-700 text-lg">{usp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Section */}
        {/* <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100" id="enroll">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-purple-700 mb-10 text-center">💰 Investment in Your Future</h2>
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <div className="text-center mb-8">
                <p className="text-2xl text-gray-800 font-semibold mb-4">
                  Ivy League-quality education at a fraction of tutoring costs
                </p>
                <p className="text-lg text-gray-600">
                  Hundreds of hours of expert development • Proven methodology based on learning science
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-white/90 rounded-2xl border border-blue-100 shadow hover:bg-blue-50 transition cursor-pointer">
                  <div className="text-xl font-semibold text-gray-700 mb-2">Private Tutoring</div>
                  <div className="text-3xl font-bold text-red-600 line-through">$3,000-5,000</div>
                  <div className="text-sm text-gray-500 mt-2">For exam prep season</div>
                </div>
                <div className="text-center p-6 bg-white/90 rounded-2xl border border-blue-100 shadow hover:bg-blue-50 transition cursor-pointer">
                  <div className="text-xl font-semibold text-gray-700 mb-2">AP Prep Courses</div>
                  <div className="text-3xl font-bold text-yellow-600 line-through">$800-1,500</div>
                  <div className="text-sm text-gray-500 mt-2">For online programs</div>
                </div>
                <div className="text-center p-6 bg-white/90 rounded-2xl border border-green-400 shadow-lg hover:scale-105 transition transform cursor-pointer">
                  <div className="text-xl font-semibold text-gray-700 mb-2">This System</div>
                  <div className="text-4xl font-bold text-green-600">Contact Us</div>
                  <div className="text-sm text-green-700 font-semibold mt-2">90% less cost!</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎁 Bonus Materials Included:</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {[
                    'Complete source code examples',
                    'Debugging practice exercises',
                    'Exam-day strategy guide',
                    'Quick reference cheat sheets',
                    'Community forum access',
                    'Lifetime access to updates'
                  ].map((bonus, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-gray-700">{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="#enquiry"
                  className="inline-block text-white px-12 py-4 rounded-xl font-bold text-xl shadow-lg transition-all hover:opacity-90 hover:scale-105"
                  style={{ background: 'linear-gradient(to right, var(--theme-primary), var(--theme-secondary))' }}
                >
                  Get Started Today
                </a>
                <p className="text-sm text-gray-600 mt-4">30-day money-back guarantee • No questions asked</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Enrollment CTA */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-100" id="enquiry">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="p-2 md:p-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Ready to Start ?</h2>
                <p className="text-xl mb-8 text-gray-700 font-medium">Begin your journey in AP Computer Science A - Complete Exam Preparation System</p>
                <ul className="space-y-3 mb-6 text-base text-gray-700">
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="email">📧</span><strong>Email:</strong> Contact@MathCodeLab.com</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="phone">📱</span><strong>Phone:</strong> 425-560-5043 425-215-6500</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="office">🕒</span><strong>Office Hours:</strong> Mon-Fri, 9am-5pm EST</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="discount">💰</span><strong>Sibling Discount:</strong> 15% off for second child</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="bonus">🎓</span><strong>Returning Student Bonus:</strong> 10% loyalty discount</span></li>
                </ul>
                <div className="flex gap-6 flex-wrap mt-4">
                  <a 
                    href="/ap-computer-science" 
                    className="px-8 py-3 rounded-full font-bold text-lg shadow-md text-white hover:scale-105 transition-all hover:opacity-90"
                    style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))` }}
                  >
                    View AP Computer
                  </a>
                  {/* <a href="/#our-programs" className="px-8 py-3 rounded-full font-bold text-lg shadow-md bg-gradient-to-r from-green-400 to-purple-400 text-green-900 hover:scale-105 transition-transform border-2 border-green-400">All Programs</a> */}
                </div>
              </div>
              <EnquiryForm defaultLevel="AP Computer Science A" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default APComputerScience
