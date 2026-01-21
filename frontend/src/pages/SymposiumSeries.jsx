import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { Toaster } from 'react-hot-toast';

function SymposiumSeries() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 min-h-screen">
      <Toaster position="top-center" />
      <Header />
      <main id="main" tabIndex="-1">
        {/* Hero Section */}
        <section className="hero pt-14 pb-14 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-200" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div className="hero-content">
              <div 
                className="level-badge mb-4 text-white px-6 py-3 rounded-full font-bold inline-block shadow-lg border-2 border-white"
                style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-accent), var(--theme-secondary))` }}
              >
                Symposium Series
              </div>
              <h1 id="hero-heading" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
                MathCodeLab Symposium Series
              </h1>
              <p className="subtitle text-xl text-gray-700 mb-8 font-medium">
                Monthly Research Conversations in Computer Science. A research and writing forum exploring foundational and emerging ideas in computer science for Middle and High School students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8" role="group" aria-label="Primary actions">
                <a 
                  href="#enroll" 
                  className="text-white px-7 py-3 rounded-xl font-semibold text-lg shadow-md transition-all hover:opacity-90 hover:scale-105"
                  style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-accent))` }}
                >
                  Enroll Now
                </a>
                <a 
                  href="#enquiry" 
                  className="text-white px-7 py-3 rounded-xl font-semibold text-lg shadow-md transition-all hover:opacity-90 hover:scale-105"
                  style={{ background: `linear-gradient(to right, var(--theme-secondary), var(--theme-primary))` }}
                >
                  Enquiry Now
                </a>
              </div>
              <ul className="flex flex-wrap gap-3 text-base text-gray-700 font-medium" aria-label="Program highlights">
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">For ages: 12-18</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">Monthly Events</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">$12 Registration</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">$250 Best Article Award</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">Research & Writing</li>
              </ul>
            </div>
            <figure className="hero-illustration flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60"
                alt="Students engaged in research and discussion"
                className="rounded-3xl shadow-2xl w-full max-w-lg border-4 border-white"
                loading="lazy"
                width="560"
                height="480"
              />
              <figcaption className="sr-only">Students engaged in research and discussion</figcaption>
            </figure>
          </div>
          <div className="text-center mt-12" aria-hidden="true">
            <div className="text-3xl text-blue-400 animate-bounce font-bold">▼</div>
          </div>
        </section>

        {/* Tuition & Payment Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100" id="enroll">
          <div className="max-w-3xl mx-auto px-4">
            <div className="p-8 relative overflow-hidden">
              <h2 className="text-4xl font-extrabold text-purple-700 mb-10 text-center drop-shadow">Registration</h2>
              <div className="flex flex-col md:flex-row justify-center gap-12 mb-8">
                <div className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">🎓</div>
                  <div className="text-2xl font-bold mb-2">Join the Symposium</div>
                  <div className="text-5xl font-extrabold mb-4">$12</div>
                  <p className="text-lg mb-6 opacity-90">Per Month Registration</p>
                  <a 
                    href="https://buy.stripe.com/00wbJ00Ee7HcbtZehigMw0t"
                    className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏆 Recognition & Awards</h3>
                <div className="grid md:grid-cols-3 gap-4 text-gray-800">
                  <div>
                    <div className="text-3xl mb-2">💰</div>
                    <div className="font-bold">$250</div>
                    <div className="text-sm">Best Article Award</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">⭐</div>
                    <div className="font-bold">Featured</div>
                    <div className="text-sm">On MathCodeLab Platforms</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🎓</div>
                    <div className="font-bold">Certificate</div>
                    <div className="text-sm">Of Participation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What It Includes Section */}
        <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center drop-shadow">Each Month Features</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="rounded-3xl bg-white/90 p-8 flex flex-col gap-4 program-card-hover">
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="text-2xl font-bold text-gray-800">A Focused Theme</h3>
                <p className="text-gray-600">Explore specific computer science topics in depth each month</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-8 flex flex-col gap-4 program-card-hover">
                <div className="text-4xl mb-2">⏰</div>
                <h3 className="text-2xl font-bold text-gray-800">Short Submission Window</h3>
                <p className="text-gray-600">Focused timeframe to research and submit your work</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-8 flex flex-col gap-4 program-card-hover">
                <div className="text-4xl mb-2">💬</div>
                <h3 className="text-2xl font-bold text-gray-800">Community Discussion</h3>
                <p className="text-gray-600">Engage with peers and mentors in collaborative sessions and virtual symposium events</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Goal</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                <strong>Clear thinking, original ideas, and accessible research</strong> for Middle and High School students.
              </p>
            </div>
          </div>
        </section>

        {/* Student Outcomes Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center drop-shadow">Student Outcomes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-3xl bg-white/90 p-6 flex flex-col gap-3 program-card-hover">
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="text-lg font-bold text-gray-800">Research & Critical Thinking</h3>
                <p className="text-gray-600 text-sm">Develop analytical and research capabilities</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-6 flex flex-col gap-3 program-card-hover">
                <div className="text-3xl mb-2">🎓</div>
                <h3 className="text-lg font-bold text-gray-800">Academic Discussion</h3>
                <p className="text-gray-600 text-sm">Experience professional research discourse</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-6 flex flex-col gap-3 program-card-hover">
                <div className="text-3xl mb-2">📝</div>
                <h3 className="text-lg font-bold text-gray-800">Portfolio-Ready Work</h3>
                <p className="text-gray-600 text-sm">Create clear, professional submissions</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-6 flex flex-col gap-3 program-card-hover">
                <div className="text-3xl mb-2">💪</div>
                <h3 className="text-lg font-bold text-gray-800">Confidence in CS</h3>
                <p className="text-gray-600 text-sm">Build expertise in complex topics</p>
              </div>
            </div>
          </div>
        </section>

        {/* January Symposium Section */}
        <section className="py-16 bg-gradient-to-br from-white via-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center drop-shadow">January 2026 Symposium</h2>
            
            <div className="mb-12 text-center">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full shadow-lg mb-4">
                <h3 className="text-2xl font-bold">Theme: "Time in Computer Science"</h3>
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
                Time is a fundamental yet subtle concept in computer science. Unlike physical time measured by clocks, time in CS appears through complexity, ordering, synchronization, causality, and versioning.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Important Dates */}
              <div className="rounded-3xl bg-white/90 p-8 program-card-hover">
                <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">📅 Important Dates</h4>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <div className="font-semibold text-gray-900">Announcement</div>
                    <div className="text-gray-600">January 5, 2026</div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="font-semibold text-gray-900">Registration Closed</div>
                    <div className="text-gray-600">January 11, 2026</div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="font-semibold text-gray-900">Ask the Mentors</div>
                    <div className="text-gray-600">January 11, 2026</div>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="font-semibold text-gray-900">Submission Deadline</div>
                    <div className="text-gray-600">January 21, 2026</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Symposium Event</div>
                    <div className="text-gray-600">January 25, 2026</div>
                  </div>
                </div>
              </div>

              {/* Submission Formats */}
              <div className="rounded-3xl bg-white/90 p-8 program-card-hover">
                <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">📝 Submission Formats</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <div className="text-gray-900">LinkedIn blog post</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <div className="text-gray-900">Medium article</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <div className="text-gray-900">GitHub repository</div>
                      <div className="text-sm text-gray-600">(with written explanation)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <div className="text-gray-900">PDF article</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Recognition */}
              <div className="rounded-3xl bg-white/90 p-8 program-card-hover">
                <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">🏆 Recognition</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <div className="font-bold text-purple-600 text-lg">$250</div>
                      <div className="text-sm text-gray-600">Best Article Award</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <div className="font-semibold text-gray-900">Featured Spotlight</div>
                      <div className="text-sm text-gray-600">On MathCodeLab platforms</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <div className="font-semibold text-gray-900">Certificate</div>
                      <div className="text-sm text-gray-600">Of participation</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6">
              <p className="text-lg text-gray-700">
                Examine how "time" is modeled, abstracted, represented, or challenged in computer science—bridging theory, systems, and practice
              </p>
            </div>
          </div>
        </section>

                {/* Enrollment CTA */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-100" id="enquiry">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="p-2 md:p-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Ready to Join the Symposium?</h2>
                <p className="text-xl mb-8 text-gray-700 font-medium">Join our monthly research forum exploring foundational and emerging ideas in computer science. Perfect for Middle and High School students passionate about research and writing.</p>
                <ul className="space-y-3 mb-6 text-base text-gray-700">
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="email">📧</span><strong>Email:</strong> Contact@MathCodeLab.com</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="phone">📱</span><strong>Phone:</strong> 425-560-5043 425-215-6500</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="office">🕒</span><strong>Office Hours:</strong> Mon-Fri, 9am-5pm EST</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="price">💰</span><strong>Registration:</strong> Only $12 per month</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="award">🏆</span><strong>Best Article Award:</strong> $250 prize for top submission</span></li>
                </ul>
                <div className="flex gap-6 flex-wrap mt-4">
                  <a 
                    href="/symposium-series" 
                    className="px-8 py-3 rounded-full font-bold text-lg shadow-md text-white hover:scale-105 transition-all hover:opacity-90"
                    style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))` }}
                  >
                    View SymposiumSeries
                  </a>
                  {/* <a href="/#our-programs" className="px-8 py-3 rounded-full font-bold text-lg shadow-md bg-gradient-to-r from-green-400 to-purple-400 text-green-900 hover:scale-105 transition-transform border-2 border-green-400">All Programs</a> */}
                </div>
              </div>
              <EnquiryForm defaultLevel="Symposium Series" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default SymposiumSeries
