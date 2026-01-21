import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { Toaster } from 'react-hot-toast';

function Level0() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <main id="main" tabIndex="-1">
        {/* Hero Section */}
        <section className="hero pt-14 pb-14 bg-gradient-to-br from-green-100 via-blue-100 to-purple-200" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div className="hero-content">
              <div 
                className="level-badge mb-4 text-white px-6 py-3 rounded-full font-bold inline-block shadow-lg border-2 border-white"
                style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-accent), var(--theme-secondary))` }}
              >
                Level 0 - The Builder
              </div>
              <h1 id="hero-heading" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
                Stepping into Logical Thinking and Algorithmic Foundations
              </h1>
              <p className="subtitle text-xl text-gray-700 mb-8 font-medium">
                Ideal for new learners, this level builds a strong base in logic, flowcharts, and algorithmic problem-solving to prepare students for hands-on coding in later stages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8" role="group" aria-label="Primary actions">
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
              <ul className="flex flex-wrap gap-3 text-base text-gray-700 font-medium" aria-label="Program highlights">
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">For ages: 8+</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">Duration: 35 hrs</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">Weekly 1-hour sessions</li>

                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">Small Batches (5–7 Students)</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">Introductory/Foundation Track</li>
              </ul>
            </div>
            <figure className="hero-illustration flex justify-center items-center">
              <img
                src="/level0.jpeg"
                alt="Students collaborating on advanced coding projects"
                className="rounded-3xl shadow-2xl w-full max-w-lg border-4 border-white"
                loading="lazy"
                width="560"
                height="480"
              />
              <figcaption className="sr-only">Students collaborating on advanced coding projects</figcaption>
            </figure>
          </div>
          <div className="text-center mt-12" aria-hidden="true">
            <div className="text-3xl text-blue-400 animate-bounce font-bold">▼</div>
          </div>
        </section>

        {/* Summary Section */}
        {/* <section className="py-10 bg-white" id="summary">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Summary</h2>
            <p className="text-lg text-gray-700 text-center">
              Level 1 introduces young beginners to the world of programming and logical thinking. Through engaging Python activities, students develop a strong foundation for future learning in computer science and problem-solving.
            </p>
          </div>
        </section> */}
        {/* Tuition & Payment Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100" id="enroll">
          <div className="max-w-3xl mx-auto px-4">
            <div className="  p-8 relative overflow-hidden">

              <h2 className="text-4xl font-extrabold text-purple-700 mb-10 text-center drop-shadow">Tuition & Payment Options</h2>
              <div className="flex flex-col md:flex-row justify-center gap-24 mb-16">
                <div className="flex-1 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-3xl mb-2">🌟</div>
                  <div className="text-xl font-bold text-blue-700 mb-1">Yearly</div>
                  <div className="text-2xl font-extrabold text-blue-900 mb-2">$1200</div>
                  <a 
                    href="https://buy.stripe.com/dRmbJ04Uud1w69F5KMgMw07" 
                    className="inline-block text-white px-6 py-2 rounded-lg font-semibold shadow transition mb-2 hover:opacity-90"
                    style={{ backgroundColor: 'var(--theme-primary)' }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Sign Up
                  </a>
                  <div className="text-xs text-gray-500">Best Value</div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-green-100 via-white to-blue-100 rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-3xl mb-2">📅</div>
                  <div className="text-xl font-bold text-green-700 mb-1">Semester</div>
                  <div className="text-2xl font-extrabold text-green-900 mb-2">$600</div>
                  <a 
                    href="https://buy.stripe.com/9B63cudr05z4cy3b56gMw08" 
                    className="inline-block text-white px-6 py-2 rounded-lg font-semibold shadow transition mb-2 hover:opacity-90"
                    style={{ backgroundColor: 'var(--theme-secondary)' }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Sign Up
                  </a>
                  <div className="text-xs text-gray-500">2 payments/year</div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-pink-100 via-white to-purple-100 rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-3xl mb-2">🔄</div>
                  <div className="text-xl font-bold text-pink-700 mb-1">Quarterly</div>
                  <div className="text-2xl font-extrabold text-pink-900 mb-2">$300</div>
                  <a 
                    href="https://buy.stripe.com/4gM9ASbiSf9E55B5KMgMw09" 
                    className="inline-block text-white px-6 py-2 rounded-lg font-semibold shadow transition mb-2 hover:opacity-90"
                    style={{ backgroundColor: 'var(--theme-accent)' }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Sign Up
                  </a>
                  <div className="text-xs text-gray-500">4 payments/year</div>
                </div>
              </div>
              <p className="text-lg text-center text-gray-700 font-medium mt-4">Payments are available quarterly for flexibility and ease. All options include full access to the year-long program.</p>
            </div>
          </div>
        </section>


        {/* Course Details Section */}
        <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-green-50" id="coursedetails">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center drop-shadow">Program Syllabus</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Session 1 */}
              <div className="rounded-3xl bg-white/90 p-8 flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-800">Logic and Algorithms</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">Logic and step-by-step algorithms</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">"Robot Instructions" game guiding a robot through a maze.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">OUTCOME</div>
                  <div className="text-gray-700 text-sm">Understands sequencing and logical steps.</div>
                </div>
              </div>

              {/* Session 2 */}
              <div className="rounded-3xl bg-white/90 p-8 flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-800">Sequences</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">Sequences, decisions, and loops</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">Create even/odd patterns, squares+1, and predictions.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">OUTCOME</div>
                  <div className="text-gray-700 text-sm">Builds number pattern intuition.</div>
                </div>
              </div>

              {/* Session 3 */}
              <div className="rounded-3xl bg-white/90 p-8 flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-800">Flowcharts</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">Flowcharts and visual thinking</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">Flowchart for brushing teeth or making a sandwich.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">OUTCOME</div>
                  <div className="text-gray-700 text-sm">Visualizes everyday steps as algorithms.</div>
                </div>
              </div>

              {/* Session 4 */}
              <div className="rounded-3xl bg-white/90 p-8 flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-800">Decision Paths</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">Algorithmic puzzles and debugging</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">"Treasure Hunt" flowchart with yes/no branches.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">OUTCOME</div>
                  <div className="text-gray-700 text-sm">Applies decision logic visually.</div>
                </div>
              </div>

              {/* Sessions 5-8 */}
              <div className="rounded-3xl bg-white/90 p-8 flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-800">Logic and Decisions</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">Binary number basics</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">Truth puzzles, Logic Machine (AND), detective clues, odd/even challenges.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">OUTCOME</div>
                  <div className="text-gray-700 text-sm">Uses If–Then–Else reasoning confidently.</div>
                </div>
              </div>

              {/* Sessions 9-12 */}
              <div className="rounded-3xl bg-white/90 p-8 flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-800">Loops</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">Performs basic binary operations</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">Patterns, sums, sequences, tables: leap year concept.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">OUTCOME</div>
                  <div className="text-gray-700 text-sm">Recognizes repetition and looping logic.</div>
                </div>
              </div>

              {/* Sessions 13-16 */}
              <div className="rounded-3xl bg-white/90 p-8 flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-800">Puzzles I</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">River Crossing: Tower of Hanoi: Maze-solving.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">LOGIC PUZZLES</div>
                  <div className="text-gray-700 text-sm">Engage in curious conundrums that test your ability to analyze truth-tellers and deceivers, or reason through minimal information to uncover certainty.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">OUTCOME</div>
                  <div className="text-gray-700 text-sm">Develops structured problem solving.</div>
                </div>
              </div>

              {/* Sessions 17-20 */}
              <div className="rounded-3xl bg-white/90 p-8 flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-800">Puzzles II</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">Debugging puzzles: routing bot: traffic lights, guessing games.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">LOGIC PUZZLES</div>
                  <div className="text-gray-700 text-sm">Tackle challenges that require clever manipulation of steps, resources, and patterns — perfect for building intuition around loops and control flow.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">OUTCOME</div>
                  <div className="text-gray-700 text-sm">Detects and fixes logical errors.</div>
                </div>
              </div>

              {/* Sessions 21-24 */}
              <div className="rounded-3xl bg-white/90 p-8 flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-800">Binary System</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">Binary number basics</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">Convert, add, and explore logical operations.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">OUTCOME</div>
                  <div className="text-gray-700 text-sm">Understands binary arithmetic and logic.</div>
                </div>
              </div>
            </div>

            {/* Extension Section */}
            <div className="mt-8 rounded-3xl bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 p-8 shadow-xl border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-purple-800 mb-2">Extension (25-30)</h3>
              <p className="text-gray-800 font-medium">Fun binary puzzles, secret codes, checksum games.</p>
            </div>
          </div>
        </section>






        {/* Enrollment CTA */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-100" id="enquiry">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="p-2 md:p-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Ready to Start Level 0?</h2>
                <p className="text-xl mb-8 text-gray-700 font-medium">Begin your journey in logic and problem-solving. Our Level 0 program is perfect for new learners to build a strong foundation in computational thinking and algorithmic skills.</p>
                <ul className="space-y-3 mb-6 text-base text-gray-700">
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="email">📧</span><strong>Email:</strong> Contact@MathCodeLab.com</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="phone">📱</span><strong>Phone:</strong> 425-560-5043 425-215-6500</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="office">🕒</span><strong>Office Hours:</strong> Mon-Fri, 9am-5pm EST</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="discount">💰</span><strong>Sibling Discount:</strong> 15% off for second child</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="bonus">🎓</span><strong>Returning Student Bonus:</strong> 10% loyalty discount</span></li>
                </ul>
                <div className="flex gap-6 flex-wrap mt-4">
                  <a 
                    href="/level0" 
                    className="px-8 py-3 rounded-full font-bold text-lg shadow-md text-white hover:scale-105 transition-all hover:opacity-90"
                    style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))` }}
                  >
                    View Level 0
                  </a>
                  {/* <a href="/#our-programs" className="px-8 py-3 rounded-full font-bold text-lg shadow-md bg-gradient-to-r from-green-400 to-purple-400 text-green-900 hover:scale-105 transition-transform border-2 border-green-400">All Programs</a> */}
                </div>
              </div>
              <EnquiryForm defaultLevel="Level 0" />
            </div>
          </div>
        </section>


        {/* <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-purple-100" id="overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-blue-700 mb-6 text-center drop-shadow">Program Overview</h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto text-center font-medium">
              Level 1 is designed for young beginners who are curious about coding and problem-solving. Through hands-on Python projects and creative challenges, students learn logical thinking while having fun.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="bg-gradient-to-br from-green-50 via-white to-blue-100 p-7 rounded-2xl shadow-xl border border-blue-100 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Learning Goals</h3>
                <p className="text-gray-700 font-medium">
                  Build a strong foundation in logic, coding, and problem-solving through structured and engaging Python exercises.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 via-white to-green-100 p-7 rounded-2xl shadow-xl border border-green-100 text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Python Basics</h3>
                <p className="text-gray-700 font-medium">
                  Learn Python syntax, data types, variables, and loops by writing simple programs and games.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 via-white to-pink-100 p-7 rounded-2xl shadow-xl border border-purple-100 text-center">
                <div className="text-4xl mb-4">🧩</div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Logic & Algorithms</h3>
                <p className="text-gray-700 font-medium">
                  Understand how computers think by designing step-by-step solutions (algorithms) for different problems.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 via-white to-purple-100 p-7 rounded-2xl shadow-xl border border-pink-100 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Collaborative Learning</h3>
                <p className="text-gray-700 font-medium">
                  Work together on fun projects, share ideas, and learn communication skills while coding as a team.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* What Kids Will Learn & Capstone Projects */}
        {/* <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-100" id="curriculum">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-green-700 mb-6 text-center drop-shadow">What Kids Will Learn</h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto text-center font-medium">
              A 44-week curriculum designed to teach kids the foundations of programming and logical problem-solving using Python.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="bg-gradient-to-br from-yellow-50 via-white to-orange-100 p-7 rounded-2xl shadow-xl border border-yellow-200 text-left">
                <div className="level-badge mb-2" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FFD700 100%)' }}>Weeks 1–11</div>
                <h3 className="text-xl font-bold text-orange-700 mb-3">Programming Fundamentals</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Introduction to Python</li>
                  <li>Using variables and data types</li>
                  <li>Printing and user input</li>
                  <li>Writing simple programs</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 via-white to-blue-100 p-7 rounded-2xl shadow-xl border border-green-200 text-left">
                <div className="level-badge mb-2" style={{ background: 'linear-gradient(135deg, #00C851 0%, #00CED1 100%)' }}>Weeks 12–22</div>
                <h3 className="text-xl font-bold text-green-700 mb-3">Logic & Problem Solving</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Conditionals and loops</li>
                  <li>Basic debugging</li>
                  <li>Algorithmic thinking</li>
                  <li>Step-by-step coding challenges</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 via-white to-pink-100 p-7 rounded-2xl shadow-xl border border-purple-200 text-left">
                <div className="level-badge mb-2" style={{ background: 'linear-gradient(135deg, #800080 0%, #ED1E79 100%)' }}>Weeks 23–33</div>
                <h3 className="text-xl font-bold text-purple-700 mb-3">Creative Projects</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Mini Python games</li>
                  <li>Story-based coding activities</li>
                  <li>Simple text-based adventures</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 p-7 rounded-2xl shadow-xl border border-blue-200 text-left">
                <div className="level-badge mb-2" style={{ background: 'linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%)' }}>Weeks 34–44</div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">Capstone Projects</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Design your own project</li>
                  <li>Combine learned concepts</li>
                  <li>Present final project to peers</li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  )
}

export default Level0
