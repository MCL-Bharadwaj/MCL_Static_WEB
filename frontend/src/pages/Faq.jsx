import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function Faq() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 min-h-screen">
        <main id="main" tabIndex="-1">
          {/* FAQ Section */}
          <section className="py-16 px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-12 text-center drop-shadow-lg">Frequently Asked Questions</h1>

        {/* Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Overview</h2>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-blue-100 via-white to-purple-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">What is the Math Code Lab coding program?</h3>
            <p className="text-gray-700">Math Code Lab offers an engaging, online coding program designed to teach students programming skills through hands-on activities, projects, and expert instruction. The program fosters logical thinking, problem-solving, and computational skills in a supportive, interactive environment.</p>
          </div>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-blue-100 via-white to-purple-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">How is the program structured?</h3>
            <p className="text-gray-700 mb-1">The program is delivered entirely online through a user-friendly platform like Microsoft Teams. It includes:</p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li><span className="font-medium">Interactive Lessons:</span> Thematic modules with live, instructor-led sessions featuring coding exercises and projects.</li>
              <li><span className="font-medium">Assessments:</span> Quizzes, assignments, and a capstone project per module to reinforce learning.</li>
              <li><span className="font-medium">Support:</span> Ongoing guidance from tutors via email and Teams.</li>
            </ul>
          </div>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-blue-100 via-white to-purple-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">How long is the program?</h3>
            <p className="text-gray-700">The program spans one year (~44 weeks) with weekly 1-hour live sessions.</p>
          </div>
        </section>

        {/* Level 1 & 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Curriculum</h2>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-green-100 via-white to-blue-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">What will students learn in Level 1?</h3>
            <p className="text-gray-700">Level 1 introduces beginners to programming fundamentals, focusing on logic, coding, and systems through hands-on Python activities. Students build a strong foundation for further learning.</p>
          </div>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-green-100 via-white to-blue-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">What will students learn in Level 2?</h3>
            <p className="text-gray-700">Level 2 is designed for students with prior programming experience or those preparing for competitions like USACO. It covers advanced problem-solving, complex projects, and in-depth exploration of algorithms and data structures using Python and Rust.</p>
          </div>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-green-100 via-white to-blue-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Is there homework?</h3>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li><span className="font-medium">Level 1:</span> 2–4 hours of weekly homework.</li>
              <li><span className="font-medium">Level 2:</span> 3–5 hours of weekly homework.</li>
            </ul>
          </div>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-green-100 via-white to-blue-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Who is Level 2 for?</h3>
            <p className="text-gray-700">Level 2 is tailored for students with prior programming experience or those who have completed Level 1. It’s ideal for learners aiming to deepen their skills or prepare for competitive programming, such as USACO.</p>
          </div>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-green-100 via-white to-blue-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Are there any prerequisites?</h3>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li><span className="font-medium">Level 1:</span> No prior programming experience required.</li>
              <li><span className="font-medium">Level 2:</span> Completion of Level 1 or equivalent programming experience.</li>
            </ul>
          </div>
        </section>

        {/* Enrollment and Payment */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Enrollment & Payment</h2>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-pink-100 via-white to-blue-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">How do I enroll?</h3>
            <p className="text-gray-700">Visit <a href="https://www.mathcodelab.com/programs" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">www.mathcodelab.com/programs</a> to enroll.</p>
          </div>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-pink-100 via-white to-blue-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">What is the refund policy?</h3>
            <p className="text-gray-700">For half-yearly or annual registrations, pro-rated fees for remaining quarters will be refunded. Contact Math Code Lab for details.</p>
          </div>
        </section>

        {/* Certification and Class Details */}
        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Certification & Class Details</h2>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-yellow-100 via-white to-blue-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Is there a certificate?</h3>
            <p className="text-gray-700">Yes, upon successful completion of each level, students receive a certificate from Math Code Lab, recognizing their achievement. This can be added to resumes or LinkedIn profiles to showcase coding proficiency. Contact Math Code Lab for details on accreditation.</p>
          </div>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-yellow-100 via-white to-blue-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">What is the class schedule?</h3>
            <p className="text-gray-700">Multiple weekend slots are available to accommodate students’ schedules. Contact Math Code Lab for specific times.</p>
          </div>
          <div className="mb-4 p-5 rounded-2xl bg-gradient-to-br from-yellow-100 via-white to-blue-50 shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">What is the class size?</h3>
            <p className="text-gray-700">Classes are small, with 6–8 students, ensuring personalized attention.</p>
          </div>
        </section>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Faq