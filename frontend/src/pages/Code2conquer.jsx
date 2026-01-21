import React, { useState } from "react";
import Header from "../components/Header";

function Code2Conquer() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 text-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-center py-20 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-20 animate-bounce"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            <span className="inline-block animate-bounce-slow text-5xl md:text-7xl">🧩</span>
            <br />
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient"
            >
              Code2Conquer
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-700 font-medium">
              The Ultimate Puzzle Quest for Young Thinkers!
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
            Hosted by <strong className="text-purple-700">MathCodeLab</strong> — where puzzles meet logic,
            math, and coding! A challenge built for students in <strong>Grades 5–12</strong> who
            love to think differently and solve creatively.
          </p>
          <a
            href="#enroll"
            className="inline-block btn-theme-secondary rounded-full transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
            style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}
          >
            🚀 Join Now
          </a>
        </div>
      </section>

      {/* Information Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 ">
        {[
          {
            title: "💡 What is Code2Conquer?",
            content: (
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Code2Conquer</strong> is MathCodeLab’s flagship{" "}
                <b>Puzzle & Problem-Solving Competition</b> for Grades 5–12.
                Each round features logic, math, and coding puzzles that spark
                curiosity and sharpen reasoning skills.
              </p>
            ),
          },
          {
            title: "🏆 Why Join?",
            content: (
              <ul className="space-y-3 text-gray-700 text-lg">
                <li>🧠 Boost logic & creative problem-solving skills</li>
                <li>🧩 Compete in exciting online puzzle rounds</li>
                <li>🔁 Continuous learning all year round</li>
                <li>🌟 Earn badges, ranks & certificates</li>
              </ul>
            ),
          },
          {
            title: "🚀 How It Works",
            content: (
              <ol className="space-y-3 text-lg text-gray-700 mb-1 mt-11">
                <li>1️⃣ Enroll once and join the community</li>
                <li>2️⃣ Get updates about new puzzle rounds</li>
                <li>3️⃣ Participate online anytime, anywhere</li>
                <li>4️⃣ Earn rewards and grow your skills</li>
              </ol>
            ),
          },
          {
            title: "🎓 Who Can Join?",
            content: (
              <>
                <p className="text-gray-700 text-lg ">
                  <b>Grades:</b> 5–12 | <b>Ages:</b> 10–17 | <b>Mode:</b> Online
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-800 mb-2">
                    Focus Areas:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>🔹 Logic & Reasoning</li>
                    <li>🔹 Math & Pattern Problems</li>
                    <li>🔹 Algorithmic Thinking</li>
                    <li>🔹 Visual & Lateral Puzzles</li>
                    <li>🔹 Creative Coding Challenges</li>
                  </ul>
                </div>
              </>
            ),
          },
        ].map((card, index) => (
          <article
            key={index}
            className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 transform hover:-translate-y-2 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-purple-700">
                {card.title}
              </h2>
            </div>
            <div className="pl-2">
              {card.content}
            </div>
          </article>
        ))}
      </section>

      {/* Upcoming Puzzle Themes */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20 px-6 text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4 drop-shadow-sm relative z-10">
          <span className="inline-block animate-bounce-slow">🧭</span> Upcoming Puzzle Themes
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto relative z-10">
          Exciting challenges await! Explore diverse puzzle themes designed to spark your curiosity.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
          {[
            { emoji: "🧩", title: "Logic Quest", desc: "Tricky reasoning puzzles", gradient: "from-purple-500 to-indigo-500" },
            { emoji: "🔢", title: "Math Maze", desc: "Decode number patterns", gradient: "from-blue-500 to-cyan-500" },
            { emoji: "💻", title: "Code Crackers", desc: "Light coding logic challenges", gradient: "from-green-500 to-emerald-500" },
            { emoji: "🕹️", title: "Brain Builders", desc: "Strategic pattern puzzles", gradient: "from-pink-500 to-rose-500" },
          ].map((theme, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 group border-2 border-transparent hover:border-purple-200"
            >
              <div className={`text-5xl mb-4 inline-block transform group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12`}>
                {theme.emoji}
              </div>
              <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                {theme.title}
              </h3>
              <p className="text-gray-700 font-medium">{theme.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MathCodeLab Clubs */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-48 h-48 bg-yellow-300 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 bg-purple-300 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
            <span className="inline-block animate-bounce-slow text-5xl">🌟</span> Next Step – MathCodeLab Clubs!
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium mb-8">
            Active participants in Code2Conquer will soon get early access to{" "}
            <strong className="text-purple-700 bg-purple-100 px-3 py-1 rounded-lg">MathCodeLab Clubs</strong>{" "}
            — a space for deeper learning, peer collaboration, and puzzle exploration beyond competitions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "📚", label: "Deeper Learning" },
              { icon: "🤝", label: "Peer Collaboration" },
              { icon: "🧩", label: "Puzzle Exploration" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-gray-800 font-semibold text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enroll Section */}
      <section
        id="enroll"
        className="text-center bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 p-16 rounded-3xl shadow-2xl mx-0 my-16 hover:shadow-3xl transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden"
        aria-labelledby="enroll-c2c"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-indigo-200 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 id="enroll-c2c" className="text-4xl md:text-5xl font-bold text-purple-700 mb-6 drop-shadow-sm">
            <span className="inline-block text-5xl animate-bounce-slow">🌐</span> Enroll Today
          </h2>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-800 leading-relaxed font-medium mb-8">
            <span className="text-purple-700 font-bold">Think.</span>{" "}
            <span className="text-blue-700 font-bold">Solve.</span>{" "}
            <span className="text-indigo-700 font-bold">Conquer.</span>
            <br />
            Join the Code2Conquer community and level up your skills.
          </p>

          {/* Button to reveal the form */}
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="inline-block bg-white text-purple-700 font-bold py-4 px-12 rounded-full shadow-xl hover:bg-purple-50 hover:scale-110 transition-all duration-300 text-xl border-2 border-purple-200 hover:border-purple-400"
            >
              <span className="inline-block mr-2 text-2xl">👉</span> Enroll Now
            </button>
          )}

          {/* Embedded Form */}
          {showForm && (
            <div className="mt-12 transition-all duration-500 ease-in-out">
              <iframe
                title="Code2Conquer Enrollment Form"
                width="100%"
                height="600px"
                src="https://forms.office.com/pages/responsepage.aspx?id=KepmOiz9aECQnUd5u5ZLVbnKEuXW7zZBqXH4A9ipYtlUQ0RIRVEyOE5YWVpZV05ERjVTWVlGTFZCNC4u&route=shorturl"
                frameBorder="0"
                marginWidth="0"
                marginHeight="0"
                className="border-none rounded-3xl shadow-2xl max-w-5xl mx-auto bg-white"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mt-8 font-medium">
            <span className="text-purple-700">✨ Stay curious.</span>{" "}
            <span className="text-blue-700">Keep solving.</span>{" "}
            <span className="text-indigo-700">The next puzzle awaits!</span>
          </p>
        </div>
      </section>

    </main>
  );
}

export default Code2Conquer;
