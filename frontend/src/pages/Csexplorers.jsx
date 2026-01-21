import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { API_ENDPOINTS } from '../config/api.js';

function Csexplorers() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    parentName: '',
    age: '',
    email: '',
    phone: '',
    interestedLevel: 'CS Explorers',
    learningExperience: '',
    interestedDays: [],
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Validation function
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
      case 'parentName':
        if (!value.trim()) {
          error = 'This field is required';
        } else if (value.trim().length < 2) {
          error = 'Must be at least 2 characters';
        }
        break;
      case 'age':
        if (!value) {
          error = 'Age is required';
        } else if (value < 14 || value > 18) {
          error = 'Age must be between 14 and 18 (10th-11th grade)';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!/^[0-9+\-\s()]{10,20}$/.test(value)) {
          error = 'Please enter a valid phone number (10-20 characters)';
        }
        break;
      case 'interestedLevel':
        if (!value) {
          error = 'Please select a level';
        }
        break;
      case 'learningExperience':
        if (!value) {
          error = 'Please select your experience level';
        }
        break;
      default:
        break;
    }

    return error;
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== 'interestedDays' && key !== 'message') {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });
    // Validate interestedDays - must select at least 3 days
    if (formData.interestedDays.length < 3) {
      newErrors.interestedDays = 'Please select at least 3 days';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'days') {
      let updatedDays;
      if (checked) {
        updatedDays = [...formData.interestedDays, value];
      } else {
        updatedDays = formData.interestedDays.filter(
          (day) => day !== value
        );
      }

      setFormData({
        ...formData,
        interestedDays: updatedDays,
      });

    } else {
      setFormData({
        ...formData,
        [name]: value,
      });

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: ''
        });
      }
    }
  };

  // Handle blur to mark field as touched and validate
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });

    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validate all fields
    const formErrors = validateForm();
    setErrors(formErrors);

    // Check if there are any errors
    if (Object.keys(formErrors).length > 0) {
      toast.error('❌ Please fill all mandatory fields correctly');
      return;
    }

    try {
      const response = await axios.post(API_ENDPOINTS.ENQUIRY, formData);
      if (response.status === 201 || response.status === 200) {
        toast.success('✅ Form submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          parentName: '',
          age: '',
          email: '',
          phone: '',
          interestedLevel: 'CS Explorers',
          learningExperience: '',
          interestedDays: [],
          message: '',
        });
        setErrors({});
        setTouched({});
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('❌ Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <main id="main" tabIndex="-1">
        {/* Hero Section */}
        <section className="hero pt-14 pb-14 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div className="hero-content">
              <div 
                className="level-badge mb-4 text-white px-6 py-3 rounded-full font-bold inline-block shadow-lg border-2 border-white"
                style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-accent), var(--theme-secondary))` }}
              >
                CS Explorers
              </div>
              <h1 id="hero-heading" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
                Kids Learn,Research & Publish Articles
              </h1>
              <p className="subtitle text-xl text-gray-700 mb-8 font-medium">
                Graduate with a polished, publication-ready research article that strengthens your college applications and showcases your CS expertise.
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
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-purple-100">For 10th & 11th graders</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-purple-100">Duration: 8 Weeks</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-purple-100">Weekly 90-minute sessions</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-purple-100">Prior coding experience required</li>
                <li className="bg-white/80 px-4 py-2 rounded-full shadow border border-purple-100">Research & Publication Track</li>
              </ul>
            </div>
            <figure className="hero-illustration flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60"
                alt="Students engaged in computer science research and collaboration"
                className="rounded-3xl shadow-2xl w-full max-w-lg border-4 border-white"
                loading="lazy"
                width="560"
                height="480"
              />
              <figcaption className="sr-only">Students engaged in computer science research and collaboration</figcaption>
            </figure>
          </div>
          <div className="text-center mt-12" aria-hidden="true">
            <div className="text-3xl text-purple-400 animate-bounce font-bold">▼</div>
          </div>
        </section>

        {/* Program Outcome Section */}
        <section className="py-16 bg-gradient-to-br from-white via-purple-50 to-blue-50" id="outcome">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-purple-700 mb-10 text-center drop-shadow">
              Program Outcome
            </h2>
            <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-100 rounded-3xl p-8 shadow-xl border border-purple-200">
              <div className="text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Publication-Ready Research Article</h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Graduate with a polished, publication-ready research article (2–4 pages, NHJS5 format) that strengthens 
                  your college applications and showcases your CS expertise. This professional publication demonstrates 
                  initiative, critical thinking, and problem-solving skills — qualities that set you apart in competitive 
                  admissions to top CS programs and Ivy League schools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tuition & Payment Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100" id="enroll">
          <div className="max-w-3xl mx-auto px-4">
            <div className="p-8 relative overflow-hidden">
              <h2 className="text-4xl font-extrabold text-purple-700 mb-10 text-center drop-shadow">Tuition & Payment</h2>
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-br from-purple-100 via-white to-indigo-100 rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform max-w-md">
                  <div className="text-5xl mb-4">🌟</div>
                  <div className="text-2xl font-bold text-purple-700 mb-2">Course Period</div>
                  <div className="text-3xl font-extrabold text-purple-900 mb-4">$650</div>
                 
                  <a 
                    href="https://buy.stripe.com/14A9AScmWd1wfKf8WYgMw0h" 
                    className="inline-block text-white px-8 py-3 rounded-lg font-semibold shadow transition hover:opacity-90 hover:scale-105"
                    style={{ backgroundColor: 'var(--theme-primary)' }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Sign Up
                  </a>
                  <div className="text-xs text-gray-500 mt-3">8-Week Program</div>
                </div>
              </div>
              <p className="text-lg text-center text-gray-700 font-medium mt-6">
                Investment in your future: Research experience highly valued by top CS programs and Ivy League schools.
              </p>
            </div>
          </div>
        </section>

        {/* Program Details Section */}
        <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-purple-50" id="details">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-indigo-700 mb-10 text-center drop-shadow">
              What You'll Achieve
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="text-4xl mb-4 text-center">📚</div>
                <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">Learn</h3>
                <p className="text-gray-700 text-center">
                  Explore foundational and emerging computer science concepts under expert guidance, with topics chosen 
                  to balance rigor, relevance, and personal interests.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl p-6 shadow-lg border border-purple-100">
                <div className="text-4xl mb-4 text-center">🔬</div>
                <h3 className="text-xl font-bold text-purple-700 mb-3 text-center">Research</h3>
                <p className="text-gray-700 text-center">
                  Conduct original research with personalized mentorship from experienced experts. No prior research 
                  experience required — we guide you step by step.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 via-white to-indigo-50 rounded-2xl p-6 shadow-lg border border-pink-100">
                <div className="text-4xl mb-4 text-center">📝</div>
                <h3 className="text-xl font-bold text-pink-700 mb-3 text-center">Publish</h3>
                <p className="text-gray-700 text-center">
                  Complete a polished, publication-ready article you can showcase in college applications, resumes, 
                  and portfolios.
                </p>
              </div>
            </div>

           
          </div>
        </section>

       
        {/* Enrollment CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-100" id="enquiry">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="p-2 md:p-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Ready to Start Your Research Journey?</h2>
                <p className="text-xl mb-8 text-gray-700 font-medium">
                  Join our highly selective CS Explorers program and graduate with a publication-ready research article 
                  that will set you apart in college applications.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700 font-medium">
                        <strong>Highly Selective:</strong> We open cohorts only a few times a year with very limited spaces. 
                        Applicants reach out to us
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 mb-6 text-base text-gray-700">
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="email">📧</span><strong>Email:</strong> Communications@MathCodeLab.com</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="duration">⏱️</span><strong>Duration:</strong> 8 weeks, 90-minute weekly sessions</span></li>
                  <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="investment">💰</span><strong>Investment:</strong> $650 </span></li>
                </ul>
              </div>
              <form onSubmit={handleFormSubmit} className="bg-white rounded-2xl shadow-xl p-10 border border-purple-100">
                <h3 className="text-2xl font-bold mb-6 text-purple-700">Start Your Application</h3>
                
                {/* First Name */}
                <label className="block mb-4">
                  <span className="text-gray-700 font-medium">First Name *</span>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="given-name"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
                      touched.firstName && errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.firstName && errors.firstName && (
                    <span className="text-red-500 text-sm mt-1 block">{errors.firstName}</span>
                  )}
                </label>

                {/* Last Name */}
                <label className="block mb-4">
                  <span className="text-gray-700 font-medium">Last Name *</span>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="family-name"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
                      touched.lastName && errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.lastName && errors.lastName && (
                    <span className="text-red-500 text-sm mt-1 block">{errors.lastName}</span>
                  )}
                </label>

                {/* Parent Name */}
                <label className="block mb-4">
                  <span className="text-gray-700 font-medium">Parent Name *</span>
                  <input
                    name="parentName"
                    type="text"
                    value={formData.parentName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
                      touched.parentName && errors.parentName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.parentName && errors.parentName && (
                    <span className="text-red-500 text-sm mt-1 block">{errors.parentName}</span>
                  )}
                </label>

                {/* Age */}
                <label className="block mb-4">
                  <span className="text-gray-700 font-medium">Kid's Age *</span>
                  <input
                    name="age"
                    type="number"
                    min="14"
                    max="18"
                    value={formData.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
                      touched.age && errors.age ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.age && errors.age && (
                    <span className="text-red-500 text-sm mt-1 block">{errors.age}</span>
                  )}
                </label>

                {/* Email */}
                <label className="block mb-4">
                  <span className="text-gray-700 font-medium">Email *</span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
                      touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>
                  )}
                </label>

                {/* Phone Number */}
                <label className="block mb-4">
                  <span className="text-gray-700 font-medium">Phone Number *</span>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    pattern="[0-9+\-\s()]{10,20}"
                    placeholder="(e.g., +1 234-567-8900)"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
                      touched.phone && errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <span className="text-red-500 text-sm mt-1 block">{errors.phone}</span>
                  )}
                </label>

                {/* Previous Learning Experience */}
                <div className="mb-4">
                  <label className="block">
                    <span className="text-gray-700 font-medium">Coding Experience *</span>
                    <select
                      name="learningExperience"
                      value={formData.learningExperience}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
                        touched.learningExperience && errors.learningExperience ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Experience</option>
                      <option value="Python">Python</option>
                      <option value="Java">Java</option>
                      <option value="JavaScript">JavaScript</option>
                      <option value="C++">C++</option>
                      <option value="Multiple Languages">Multiple Languages</option>
                      <option value="Other">Other</option>
                    </select>
                    {touched.learningExperience && errors.learningExperience && (
                      <span className="text-red-500 text-sm mt-1 block">{errors.learningExperience}</span>
                    )}
                  </label>
                </div>

                {/* Interested Days */}
                <div className="mb-6">
                  <span className="text-gray-700 font-medium block mb-2">
                    Interested Days For Classes (Pick at least 3 days) *
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday',
                      'Sunday',
                    ].map((day) => (
                      <label key={day} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="days"
                          value={day}
                          onChange={handleChange}
                          checked={formData.interestedDays.includes(day)}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{day}</span>
                      </label>
                    ))}
                  </div>
                  {touched.interestedDays && errors.interestedDays && (
                    <span className="text-red-500 text-sm mt-1 block">{errors.interestedDays}</span>
                  )}
                </div>

                {/* Message */}
                <label className="block mb-8">
                  <span className="text-gray-700 font-medium">Why do you want to join this program? *</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your interest in CS research and your goals..."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-theme-primary"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Csexplorers
