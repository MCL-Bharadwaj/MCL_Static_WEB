import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { Toaster } from 'react-hot-toast';

function Level1() {
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
                Level 1 - The Thinker
              </div>
              <h1 id="hero-heading" className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
                Programming Fundamentals & Problem-Solving with Python
              </h1>
              <p className="subtitle text-2xl text-gray-700 mb-8 font-medium">
                Introduces beginners to programming fundamentals, focusing on logic, coding, and systems through hands-on Python activities. Students build a strong foundation for further learning.
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
                  Enroll Your Child
                </a>
              </div>
              <ul className="flex flex-wrap gap-3 text-base text-gray-700 font-medium" aria-label="Program highlights">
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">Age Group: 10+</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">Duration: 44 Weeks</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">Weekly 1-hour </li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">Small Batches (5–7 Students)</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-blue-100">Beginner Friendly</li>
                
              </ul>
            </div>
            <figure className="hero-illustration flex justify-center items-center">
              <img
                src="/level1.jpeg"
                alt="Young students learning coding basics"
                className="rounded-3xl shadow-2xl w-full max-w-lg border-4 border-white"
                loading="lazy"
                width="560"
                height="480"
              />
              <figcaption className="sr-only">Children engaged in foundational coding activities</figcaption>
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
            <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center drop-shadow">Course Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Module 1 */}
              <div className="rounded-3xl bg-white/90  p-8  flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                  
                  <span className="text-2xl font-bold text-gray-800">Programming Foundations</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">What is programming? • Variables & Data Types • Input/Output • Expressions & Operators • Basic if/else conditionals</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">LOGIC PUZZLES</div>
                  <div className="text-gray-700 text-sm">Engage in curious conundrums that test your ability to analyze truth-tellers and deceivers, or reason through minimal information to uncover certainty.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">Print your name • Compare numbers • Greet the user • Build a simple calculator</div>
                </div>
              </div>
              {/* Module 2 */}
              <div className="rounded-3xl bg-white/90  p-8  flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                 
                  <span className="text-2xl font-bold text-gray-800">Loops and Repetition</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">while and for loops • Nested loops • Loop control: break, continue</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">LOGIC PUZZLES</div>
                  <div className="text-gray-700 text-sm">Tackle challenges that require clever manipulation of steps, resources, and patterns — perfect for building intuition around loops and control flow.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">Print number ranges • Multiplication table • Count vowels • Light Bulb Toggle Puzzle</div>
                </div>
              </div>
              {/* Module 3 */}
              <div className="rounded-3xl bg-white/90  p-8  flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                 
                  <span className="text-2xl font-bold text-gray-800">Arrays (1D)</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">List creation and access • Looping through arrays • Searching, filtering, modifying arrays</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">LOGIC PUZZLES</div>
                  <div className="text-gray-700 text-sm">Dive into numerical logic games where patterns, sums, and hidden values must be discovered using systematic array-based strategies.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">Reverse array • Rotate array • Move zeros to the end • Count increasing steps</div>
                </div>
              </div>
              {/* Module 4 */}
              <div className="rounded-3xl bg-white/90  p-8 flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                 
                  <span className="text-2xl font-bold text-gray-800">Strings and Pattern Logic</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">Strings as character arrays • Access, slicing, building strings</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">LOGIC PUZZLES</div>
                  <div className="text-gray-700 text-sm">Investigate mysteries in text and sequences — practice identifying anomalies and patterns by slicing, reversing, and decoding.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">Reverse a string • Replace characters • Build patterns using strings</div>
                </div>
              </div>
              {/* Module 5 */}
              <div className="rounded-3xl bg-white/90  p-8  flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                 
                  <span className="text-2xl font-bold text-gray-800">2D Arrays & Grid Thinking</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">2D arrays: initialization and traversal • Nested loops for grids • Matrix operations</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">LOGIC PUZZLES</div>
                  <div className="text-gray-700 text-sm">Explore puzzles that unfold on grids — navigate spaces, build patterns, and simulate movement using two-dimensional thinking.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">Matrix add/subtract • Print board borders • Path simulation</div>
                </div>
              </div>
              {/* Module 6 */}
              <div className="rounded-3xl bg-white/90  p-8  flex flex-col gap-4 program-card-hover">
                <div className="flex items-center gap-4">
                 
                  <span className="text-2xl font-bold text-gray-800">Algorithmic Thinking & Logic</span>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">CONCEPTS</div>
                  <div className="text-gray-700 text-sm">Simulation logic • Step-by-step decomposition • Introduction to problem-solving frameworks</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">LOGIC PUZZLES</div>
                  <div className="text-gray-700 text-sm">Take on multi-step reasoning tasks that combine creativity and structure — simulate real-world scenarios, unravel constraints, and identify the only path that works.</div>
                </div>
                <div>
                  <div className="font-bold text-green-600 mb-1">ACTIVITIES</div>
                  <div className="text-gray-700 text-sm">Write simulation steps • Create logic flows • Solve puzzles in teams</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capstone Projects Section */}
        <section className="py-16" id="capstone-projects">
          <div className="max-w-13xl mx-auto my-auto px-4 sm:px-6 lg:px-8">
            <div className="  bg-transparent bg-gradient-to-br from-white via-blue-50 to-green-50 rounded-2xl  flex flex-col items-center ">
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 text-center flex items-center gap-3 drop-shadow-lg tracking-tight"><span role="img" aria-label="trophy" className="mt-3">🏆</span>  Capstone Projects</h2>
              <p className="text-lg md:text-xl text-blue-800 mb-12 text-center max-w-3xl font-medium">
                Apply everything you've learned by building two interactive console games. Each game challenges you to combine logic, loops, conditionals, and input handling to create engaging turn-based experiences. While the game titles remain a surprise for now, expect to simulate familiar classics — but with your own code!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full mb-8">
                <div className="flex flex-col items-center bg-white/90 program-card-hover rounded-2xl p-8 border-2 border-blue-100 shadow-lg group cursor-pointer">
                  <span className="text-5xl mb-4 transition-transform group-hover:scale-110">✂️</span>
                  <span className="text-lg font-bold text-blue-700">Mystery Game 1</span>
                </div>
                <div className="flex flex-col items-center bg-white/90 program-card-hover rounded-2xl p-8 border-2 border-blue-100 shadow-lg group cursor-pointer">
                  <span className="text-5xl mb-4 transition-transform group-hover:scale-110">⭘</span>
                  <span className="text-lg font-bold text-blue-700">Mystery Game 2</span>
                </div>
                <div className="flex flex-col items-center bg-white/90 program-card-hover rounded-2xl p-8 border-2 border-blue-100 shadow-lg group cursor-pointer">
                  <span className="text-5xl mb-4 transition-transform group-hover:scale-110">🎪</span>
                  <span className="text-lg font-bold text-blue-700">Mystery Game 3</span>
                </div>
                <div className="flex flex-col items-center bg-white/90 program-card-hover rounded-2xl p-8 border-2 border-blue-100 shadow-lg group cursor-pointer">
                  <span className="text-5xl mb-4 transition-transform group-hover:scale-110">🪱</span>
                  <span className="text-lg font-bold text-blue-700">Mystery Game 4</span>
                </div>
              </div>
              <div className="text-center text-blue-800 font-semibold text-base mt-2">
                <span className="text-blue-600 font-bold">Skills Applied:</span> Arrays, loops, conditionals • Input validation • Game logic with turn-based interaction
              </div>
            </div>
          </div>
        </section>

      
        {/* Enrollment CTA */}
        <section id="enquiry" className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-100" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="p-2 md:p-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Ready to Advance to Level 1?</h2>
                <p className="text-xl mb-8 text-gray-700 font-medium">Take the next step in your child's learning journey. Our Level 1 program challenges students to think critically, code creatively, and solve real problems with math and technology.</p>
                <ul className="space-y-3 mb-6 text-base text-gray-700">
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="email">📧</span><strong>Email:</strong> Contact@MathCodeLab.com</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="phone">📱</span><strong>Phone:</strong> 425-560-5043 425-215-6500</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="office">🕒</span><strong>Office Hours:</strong> Mon-Fri, 9am-5pm EST</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="discount">💰</span><strong>Sibling Discount:</strong> 15% off for second child</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="bonus">🎓</span><strong>Level 1 Graduate Bonus:</strong> 10% loyalty discount</span></li>
                </ul>
                <div className="flex gap-6 flex-wrap mt-4">
                  <a 
                    href="/level1" 
                    className="px-8 py-3 rounded-full font-bold text-lg shadow-md text-white hover:scale-105 transition-all hover:opacity-90"
                    style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))` }}
                  >
                    View Level 1
                  </a>
                  {/* <a href="/#our-programs" className="px-8 py-3 rounded-full font-bold text-lg shadow-md bg-gradient-to-r from-green-400 to-purple-400 text-green-900 hover:scale-105 transition-transform border-2 border-green-400">All Programs</a> */}
                </div>
              </div>
              <EnquiryForm defaultLevel="Level 1" />
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

export default Level1
