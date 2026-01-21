import React, { useState } from 'react'; // <-- 1. IMPORTED useState
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate, Link } from 'react-router-dom';
import Code2conquer from './Code2conquer';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { API_ENDPOINTS } from '../config/api.js';

function Home() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        parentName: '',
        age: '',
        email: '',
        phone: '',
        interestedLevel: '',
        learningExperience: '',
        interestedDays: [], // <-- 2. CHANGED to an empty array
        grade: '',
        location: '',
        howDidYouHearAboutUs: '',
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
                } else if (value < 5 || value > 18) {
                    error = 'Age must be between 5 and 18';
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

    // <-- 3. UPDATED handleChange to handle checkboxes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox' && name === 'days') {
            // This is for your "Interested Days" checkboxes
            let updatedDays;
            if (checked) {
                // Add the day to the array
                updatedDays = [...formData.interestedDays, value];
            } else {
                // Remove the day from the array
                updatedDays = formData.interestedDays.filter(
                    (day) => day !== value
                );
            }

            setFormData({
                ...formData,
                interestedDays: updatedDays, // Update the array
            });

        } else {
            // This is for all your other inputs (text, select, etc.)
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
                    interestedLevel: '',
                    learningExperience: '',
                    interestedDays: [], // <-- 5. RESET to an empty array
                    grade: '',
                    location: '',
                    howDidYouHearAboutUs: '',
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

    //const navigate = useNavigate();
    return (
        <div>
            <Toaster position="top-right" reverseOrder={false} />
            <Header />

            {/* Skip Link for Accessibility
            <a 
                href="#main" 
                className="absolute -top-10 left-4 text-white px-4 py-2 rounded-md focus:top-4 transition-all z-50"
                style={{ backgroundColor: 'var(--theme-primary)' }}
            >
                Skip to main content
            </a> */}

            <main id="main" tabIndex="-1">
                {/* Hero Section */}
                <section className="hero py-20 bg-gradient-to-br from-gray-50 to-gray-100" aria-labelledby="hero-heading">
                    <div className="hero-bg" aria-hidden="true"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="hero-content">
                                <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    Level Up Your Child's Learning Journey
                                </h1>
                                <p className="text-xl text-gray-700 mb-8">
                                   Cultivating critical thinkers through the synergy of puzzle, computer science, and programming.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mb-8" role="group" aria-label="Primary actions">
                                    <a
                                        href="#our-programs"
                                        className="text-white px-6 py-3 rounded-lg font-medium text-center transition-colors hover:opacity-90"
                                        style={{ backgroundColor: 'var(--theme-primary)' }}
                                    >
                                        Explore Programs
                                    </a>
                                    <a
                                        href="#contact"
                                        className="text-white px-6 py-3 rounded-lg font-medium text-center transition-colors hover:opacity-90"
                                        style={{ backgroundColor: 'var(--theme-secondary)' }}
                                    >
                                        Enquiry
                                    </a>
                                </div>
                                <ul className="grid grid-cols-2 gap-4 text-sm text-gray-600" aria-label="Program highlights">
                                    <li className="flex items-center">
                                        <span
                                            className="w-2 h-2 rounded-full mr-2"
                                            style={{ backgroundColor: 'var(--theme-primary)' }}
                                        ></span>
                                        Small Class Sizes (5-7)
                                    </li>
                                    <li className="flex items-center">
                                        <span
                                            className="w-2 h-2 rounded-full mr-2"
                                            style={{ backgroundColor: 'var(--theme-primary)' }}
                                        ></span>
                                        Holistic Curriculum
                                    </li>
                                    <li className="flex items-center">
                                        <span
                                            className="w-2 h-2 rounded-full mr-2"
                                            style={{ backgroundColor: 'var(--theme-primary)' }}
                                        ></span>
                                        Growth Mindset
                                    </li>
                                    <li className="flex items-center">
                                        <span
                                            className="w-2 h-2 rounded-full mr-2"
                                            style={{ backgroundColor: 'var(--theme-primary)' }}
                                        ></span>
                                        Real-World Problem Solving
                                    </li>
                                </ul>
                            </div>
                            <figure className="hero-illustration">
                                <img
                                    src="/image2.png"
                                    alt="Students collaborating on coding projects"
                                    className="rounded-2xl shadow-[0_8px_32px_0_rgba(31,41,55,0.25)] w-full border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-[0_16px_48px_0_rgba(31,41,55,0.35)] bg-gradient-to-br from-slate-100 to-slate-300"
                                    loading="lazy"
                                    width="560"
                                    height="480"
                                />
                                <figcaption className="sr-only">Students learning coding together</figcaption>
                            </figure>
                        </div>
                        <div className="text-center mt-12" aria-hidden="true">
                            <div className="text-2xl text-gray-400 animate-bounce">▼</div>
                        </div>
                    </div>
                </section>

                {/* Core Programs Section */}
                <section id="programs" className="py-20 bg-white" aria-labelledby="programs-heading">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 id="programs-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                            Core Learning Pillars
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
                            Four integrated domains that build powerful, adaptable thinkers.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
                            <article className="bg-white p-6 rounded-xl shadow-lg card-hover text-center" role="listitem">
                                <div className="text-4xl mb-4" aria-hidden="true">🧩</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Problem Solving</h3>
                                <p className="text-gray-600 mb-4">Strategic thinking, pattern recognition, and resilience through engaging challenges.</p>
                                {/* <a href="#" className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }} aria-disabled="true">
                                    Learn More
                                </a> */}
                            </article>

                            <article className="bg-white p-6 rounded-xl shadow-lg card-hover text-center" role="listitem">
                                <div className="text-4xl mb-4" aria-hidden="true">💻</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Science</h3>
                                <p className="text-gray-600 mb-4">Core CS concepts explained through interactive exploration and projects.</p>
                                {/* <a href="#" className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }} aria-disabled="true">
                                    Learn More
                                </a> */}
                            </article>

                            <article className="bg-white p-6 rounded-xl shadow-lg card-hover text-center" role="listitem">
                                <div className="text-4xl mb-4" aria-hidden="true">{'{ }'}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Programming</h3>
                                <p className="text-gray-600 mb-4">Foundations in Python (and beyond) emphasizing clarity, structure, and logic.</p>
                                {/* <a href="#" className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }} aria-disabled="true">
                                    Learn More
                                </a> */}
                            </article>

                            <article className="bg-white p-6 rounded-xl shadow-lg card-hover text-center" role="listitem">
                                <div className="text-4xl mb-4" aria-hidden="true">∑</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Computational Math</h3>
                                <p className="text-gray-600 mb-4">Algorithmic approaches that make mathematical thinking dynamic and intuitive.</p>
                                {/* <a href="#" className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }} aria-disabled="true">
                                    Learn More
                                </a> */}
                            </article>
                        </div>
                    </div>
                </section>

                {/* Our Programs Section */}
                <section id="our-programs" className="py-20 bg-gray-50" aria-labelledby="our-programs-heading">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 id="our-programs-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                            Our Programs
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
                            Structured levels designed to build progressive skills from beginner to advanced.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">

                            {/* Level 0 */}
                            <Link to="/level0" className="block">
                                <article className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between card-hover relative cursor-pointer hover:shadow-xl transition-shadow" role="listitem">
                                    <div
                                        className="absolute top-4 left-4 inline-flex items-center justify-center text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md border border-white/20 transition-transform duration-200 hover:scale-105 z-10"
                                        style={{ backgroundColor: 'var(--theme-primary)', minWidth: '0' }}
                                    >
                                        Level 0
                                    </div>
                                    <div className="pt-8"></div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Beginner</h3>
                                    <p className="text-gray-600 mb-4">Programming fundamentals & problem-solving with Python. Year-long program, weekly 1-hour sessions.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-bold" style={{ color: 'var(--theme-primary)' }}>$1200/year</span>
                                        <span className="text-sm text-gray-500">1 hour/week</span>
                                    </div>
                                    <span className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }}>
                                        Learn More →
                                    </span>
                                </article>
                            </Link>

                            {/* Level 1 */}
                            <Link to="/level1" className="block">
                                <article className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between relative cursor-pointer card-hover hover:shadow-xl transition-shadow" role="listitem">
                                    <div
                                        className="absolute top-4 left-4 inline-flex items-center justify-center text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md border border-white/20 transition-transform duration-200 hover:scale-105 z-10"
                                        style={{ backgroundColor: 'var(--theme-primary)', minWidth: '0' }}
                                    >
                                        Level 1
                                    </div>
                                    <div className="pt-8"></div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Thinker</h3>
                                    <p className="text-gray-600 mb-4">Programming fundamentals & problem-solving with Python. Year-long program, weekly 1-hour sessions.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-bold" style={{ color: 'var(--theme-primary)' }}>$1200/year</span>
                                        <span className="text-sm text-gray-500">1 hour/week</span>
                                    </div>
                                    <span className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }}>
                                        Learn More →
                                    </span>
                                </article>
                            </Link>

                            {/* Level 2 */}
                            <Link to="/level2" className="block">
                                <article className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between relative cursor-pointer card-hover hover:shadow-xl transition-shadow  h-full flex flex-col justify-between" role="listitem">
                                    <div
                                        className="absolute top-4 left-4 inline-flex items-center justify-center text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md border border-white/20 transition-transform duration-200 hover:scale-105 z-10"
                                        style={{ backgroundColor: 'var(--theme-primary)', minWidth: '0' }}
                                    >
                                        Level 2
                                    </div>
                                    <div className="pt-8"></div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Builder</h3>
                                    <p className="text-gray-600 mb-4">Complex problem-solving with core CS foundations. Includes USACO preparation.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-bold" style={{ color: 'var(--theme-primary)' }}>$1800/year</span>
                                        <span className="text-sm text-gray-500">1–2 hours/week</span>
                                    </div>
                                    <span className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }}>
                                        Learn More →
                                    </span>
                                </article>
                            </Link>

                            {/* Level 3 */}
                            <Link to="/level3" className="block">
                                <article className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between opacity-75 relative cursor-pointer card-hover hover:shadow-xl transition-shadow h-full flex flex-col justify-between" role="listitem">
                                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg z-10">
                                        Coming Soon
                                    </div>
                                    <div
                                        className="absolute top-4 left-4 inline-flex items-center justify-center text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md border border-white/20 transition-transform duration-200 hover:scale-105 z-10"
                                        style={{ backgroundColor: 'var(--theme-primary)', minWidth: '0' }}
                                    >
                                        Level 3
                                    </div>
                                    <div className="pt-8"></div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Creator</h3>
                                    <p className="text-gray-600 mb-4">Applying systems thinking with real-world problem-solving.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-bold" style={{ color: 'var(--theme-primary)' }}>$3000/year</span>
                                        <span className="text-sm text-gray-500">1 hour/week</span>
                                    </div>
                                    <span className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }}>
                                        Learn More →
                                    </span>
                                </article>
                            </Link>

                            {/* Level 4 */}
                            <Link to="/level4" className="block">
                                <article className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between relative cursor-pointer card-hover hover:shadow-xl transition-shadow h-full flex flex-col justify-between" role="listitem">
                                    <div
                                        className="absolute top-4 left-4 inline-flex items-center justify-center text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md border border-white/20 transition-transform duration-200 hover:scale-105 z-10"
                                        style={{ backgroundColor: 'var(--theme-primary)', minWidth: '0' }}
                                    >
                                        Level 4
                                    </div>
                                    <div className="pt-8"></div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Innovator</h3>
                                    <p className="text-gray-600 mb-4">From ideas to impact - Profile building for Ivy League. Select students only.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-bold" style={{ color: 'var(--theme-primary)' }}>$4800/year</span>
                                        <span className="text-sm text-gray-500">2–3 hours/week</span>
                                    </div>
                                    <span className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }}>
                                        Learn More →
                                    </span>
                                </article>
                            </Link>
                            {/* cs explores */}
                            <Link to="/csexplorers" className="block">
                                <article className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between relative cursor-pointer card-hover hover:shadow-xl transition-shadow h-full flex flex-col justify-between" role="listitem">
                                    <div
                                        className="absolute top-4 left-4 inline-flex items-center justify-center text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md border border-white/20 transition-transform duration-200 hover:scale-105 z-10"
                                        style={{ backgroundColor: 'var(--theme-primary)', minWidth: '0' }}
                                    >
                                        CS Explores
                                    </div>
                                    <div className="pt-8"></div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Explorer</h3>
                                    <p className="text-gray-600 mb-4">From curiosity to contribution Research. Publish. Stand out</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-bold" style={{ color: 'var(--theme-primary)' }}>$650/course</span>
                                        <span className="text-sm text-gray-500">1–2 hours/week</span>
                                    </div>
                                    <span className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }}>
                                        Learn More →
                                    </span>
                                </article>
                            </Link>

                            {/* code2conquer */}
                            <Link to="/Code2conquer" className="block">
                                <article className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between relative cursor-pointer card-hover hover:shadow-xl transition-shadow h-full flex flex-col justify-between" role="listitem">
                                    <div
                                        className="absolute top-4 left-4 inline-flex items-center justify-center text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md border border-white/20 transition-transform duration-200 hover:scale-105 z-10"
                                        style={{ backgroundColor: 'var(--theme-primary)', minWidth: '0' }}
                                    >
                                        Code2Conquer
                                    </div>
                                    <div className="pt-8"></div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Conquerors </h3>
                                    <p className="text-gray-600 mb-4">Igniting young minds with puzzles that inspire creativity and logic.</p>

                                    <span className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }}>
                                        Learn More →
                                    </span>
                                </article>
                            </Link>

                            {/* AP Computer Science A */}
                            <Link to="/ap-computer-science" className="block">
                                <article className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between relative cursor-pointer card-hover hover:shadow-xl transition-shadow h-full" role="listitem">
                                    <div
                                        className="absolute top-4 left-4 inline-flex items-center justify-center text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md border border-white/20 transition-transform duration-200 hover:scale-105 z-10"
                                        style={{ backgroundColor: 'var(--theme-primary)', minWidth: '0' }}
                                    >
                                        AP CS A
                                    </div>
                                    <div className="pt-8"></div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">AP Computer Science A</h3>
                                    <p className="text-gray-600 mb-4">Master Java programming & prepare for the AP Computer Science A exam with expert guidance.</p>
                                    <span className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }}>
                                        Learn More →
                                    </span>
                                </article>
                            </Link>

                            {/* Symposium Series */}
                            <Link to="/symposium-series" className="block">
                                <article className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between relative cursor-pointer card-hover hover:shadow-xl transition-shadow h-full" role="listitem">
                                    <div
                                        className="absolute top-4 left-4 inline-flex items-center justify-center text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md border border-white/20 transition-transform duration-200 hover:scale-105 z-10"
                                        style={{ backgroundColor: 'var(--theme-primary)', minWidth: '0' }}
                                    >
                                        Symposium
                                    </div>
                                    <div className="pt-8"></div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">MathCodeLab Symposium Series</h3>
                                    <p className="text-gray-600 mb-4">Monthly research forum exploring foundational and emerging ideas in computer science for Middle and High School students.</p>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-bold" style={{ color: 'var(--theme-primary)' }}>$12/month</span>
                                        <span className="text-sm text-gray-500">Monthly</span>
                                    </div>
                                    <span className="font-medium transition-colors hover:opacity-80" style={{ color: 'var(--theme-primary)' }}>
                                        Learn More →
                                    </span>
                                </article>
                            </Link>


                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section id="why" className="py-20 bg-white" aria-labelledby="why-heading">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                            Why Choose MathCodeLab ?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" aria-label="Why choose us carousel">
                            <article className="bg-white p-6 rounded-xl shadow-lg why-card-hover text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80"
                                    alt="Diverse team of educators and engineers collaborating"
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    loading="lazy"
                                />
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert-Founded Approach</h3>
                                <p className="text-gray-600">Created by engineers, educators, and parents who understand how children learn and stay curious.</p>
                            </article>

                            <article className="bg-white p-6 rounded-xl shadow-lg why-card-hover text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                                    alt="Abstract illustration representing integrated learning"
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    loading="lazy"
                                />
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Holistic Curriculum Design</h3>
                                <p className="text-gray-600">We blend math, computer science, and programming into cohesive learning journeys rooted in problem-solving.</p>
                            </article>

                            <article className="bg-white p-6 rounded-xl shadow-lg why-card-hover text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=60"
                                    alt="Student thinking through a logical problem"
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    loading="lazy"
                                />
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Critical Thinking Focus</h3>
                                <p className="text-gray-600">Beyond syntax—students learn to decompose, analyze, test, iterate, and communicate solutions clearly.</p>
                            </article>
                        </div>
                    </div>
                </section>
                {/* Code2Conquer Section
                <section
                    id="code2conquer"
                    className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100"
                    aria-labelledby="code2conquer-heading"
                >
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2
                            id="code2conquer-heading"
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                        >
                            🧩 Code2Conquer – The Ultimate Puzzle Quest for Young Thinkers!
                        </h2>

                        <article className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 program-card-hover">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                Hosted by MathCodeLab
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                <strong>Code2Conquer</strong> is MathCodeLab’s flagship{" "}
                                <strong>Puzzle & Problem-Solving Competition</strong> for students in{" "}
                                <strong>Grades 5–12</strong>. Each round features fun, brain-teasing
                                puzzles that spark logical thinking, creativity, and curiosity — helping
                                students grow from <em>puzzle solvers</em> to <em>innovative thinkers</em>.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                🌟 A perfect pathway from <em>Puzzle Competitions → Continuous Learning → Club Memberships</em>.
                            </p>
                            <div className="flex justify-center mt-5">
                                <a
                                    href="/Code2conquer"
                                    className="btn-theme-primary inline-block"
                                >
                                    Explore More
                                </a>
                            </div>
                        </article>
                    </div>
                </section> */}


                {/* Call to Action / Contact Form */}
                <section id="contact" className="py-20 bg-gradient-to-br from-slate-200 via-slate-100 to-gray-50" aria-labelledby="contact-heading">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div id="contactus" className="p-2 md:p-0 flex flex-col justify-center">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Ready to Start ?</h2>
                                <p className="text-xl mb-8 text-gray-700 font-medium">Begin your journey in logic and problem-solving.</p>
                                <ul className="space-y-3 mb-6 text-base text-gray-700">
                                    <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="email">📧</span><strong>Email:</strong> Contact@MathCodeLab.com</span></li>
                                    <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="phone">📱</span><strong>Phone:</strong>425-560-5043,425-215-6500</span></li>
                                    <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="office">🕒</span><strong>Office Hours:</strong> Mon-Fri, 9am-5pm EST</span></li>
                                    <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="discount">💰</span><strong>Sibling Discount:</strong> 15% off for second child</span></li>
                                    <li><span className="inline-flex items-center gap-2"><span role="img" aria-label="bonus">🎓</span><strong>Returning Student Bonus:</strong> 10% loyalty discount</span></li>
                                </ul>
                                <div className="flex gap-6 flex-wrap mt-4">
                                    <a
                                        href="#our-programs"
                                        className="px-8 py-3 rounded-full font-bold text-lg shadow-md text-white hover:scale-105 transition-all hover:opacity-90"
                                        style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))` }}
                                    >
                                        View Programs
                                    </a>
                                    {/* <a href="/#our-programs" className="px-8 py-3 rounded-full font-bold text-lg shadow-md bg-gradient-to-r from-green-400 to-purple-400 text-green-900 hover:scale-105 transition-transform border-2 border-green-400">All Programs</a> */}
                                </div>
                            </div>
                            <form onSubmit={handleFormSubmit} className="bg-white rounded-2xl shadow-xl p-10 border border-purple-100">
                                {/* First Name */}
                                <h3 className="text-2xl font-bold mb-6 text-purple-700">Start Enquiry</h3>
                                <label className="block mb-4">
                                    <span className="text-gray-700 font-medium">First Name *</span>
                                    <input
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete="given-name"
                                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${touched.firstName && errors.firstName ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        style={{ focusRingColor: 'var(--theme-primary)' }}
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
                                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${touched.lastName && errors.lastName ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        style={{ focusRingColor: 'var(--theme-primary)' }}
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
                                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${touched.parentName && errors.parentName ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        style={{ focusRingColor: 'var(--theme-primary)' }}
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
                                        min="5"
                                        max="18"
                                        value={formData.age}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${touched.age && errors.age ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        style={{ focusRingColor: 'var(--theme-primary)' }}
                                    />
                                    {touched.age && errors.age && (
                                        <span className="text-red-500 text-sm mt-1 block">{errors.age}</span>
                                    )}
                                </label>

                                {/* Grade */}
                                <label className="block mb-4">
                                    <span className="text-gray-700 font-medium">Grade</span>
                                    <input
                                        name="grade"
                                        type="text"
                                        value={formData.grade}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="e.g., 5th Grade, 10th Grade"
                                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${touched.grade && errors.grade ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        style={{ focusRingColor: 'var(--theme-primary)' }}
                                    />
                                    {touched.grade && errors.grade && (
                                        <span className="text-red-500 text-sm mt-1 block">{errors.grade}</span>
                                    )}
                                </label>

                                {/* Location */}
                                <label className="block mb-4">
                                    <span className="text-gray-700 font-medium">Location</span>
                                    <input
                                        name="location"
                                        type="text"
                                        value={formData.location}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="City, State or Country"
                                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${touched.location && errors.location ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        style={{ focusRingColor: 'var(--theme-primary)' }}
                                    />
                                    {touched.location && errors.location && (
                                        <span className="text-red-500 text-sm mt-1 block">{errors.location}</span>
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
                                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        style={{ focusRingColor: 'var(--theme-primary)' }}
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
                                        placeholder="Enter phone number (e.g., +1 234-567-8900)"
                                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${touched.phone && errors.phone ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        style={{ focusRingColor: 'var(--theme-primary)' }}
                                    />
                                    {touched.phone && errors.phone && (
                                        <span className="text-red-500 text-sm mt-1 block">{errors.phone}</span>
                                    )}
                                </label>

                                {/* Interested Level */}
                                <div className="mb-4">
                                    <label className="block">
                                        <span className="text-gray-700 font-medium">Interested Level *</span>
                                        <select
                                            name="interestedLevel"
                                            value={formData.interestedLevel}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${touched.interestedLevel && errors.interestedLevel ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            style={{ focusRingColor: 'var(--theme-primary)' }}
                                        >
                                            <option value="">Select Level</option>
                                            <option value="Level 0">Level 0</option>
                                            <option value="Level 1">Level 1</option>
                                            <option value="Level 2">Level 2</option>
                                            <option value="Level 3">Level 3</option>
                                            <option value="Level 4">Level 4</option>
                                            <option value="CS Explorers">CS Explorers</option>
                                            <option value="AP Computer Science A">AP Computer Science A</option>
                      `                     <option value="SymposiumSeries">SymposiumSeries</option>
                                        </select>
                                        {touched.interestedLevel && errors.interestedLevel && (
                                            <span className="text-red-500 text-sm mt-1 block">{errors.interestedLevel}</span>
                                        )}
                                    </label>
                                </div>

                                {/* Previous Learning Experience */}
                                <div className="mb-4">
                                    <label className="block">
                                        <span className="text-gray-700 font-medium">Previous Learning Experience *</span>
                                        <select
                                            name="learningExperience"
                                            value={formData.learningExperience}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${touched.learningExperience && errors.learningExperience ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            style={{ focusRingColor: 'var(--theme-primary)' }}
                                        >
                                            <option value="">Select Experience</option>
                                            <option value="Scratch">Scratch</option>
                                            <option value="Python Basics">Python Basics</option>
                                            <option value="Level 0">Level 0</option>
                                            <option value="Level 1">Level 1</option>
                                            <option value="Level 2">Level 2</option>
                                            <option value="Level 3">Level 3</option>
                                            <option value="Level 4">Level 4</option>
                                           
                                        </select>
                                        {touched.learningExperience && errors.learningExperience && (
                                            <span className="text-red-500 text-sm mt-1 block">{errors.learningExperience}</span>
                                        )}
                                    </label>
                                </div>

                                {/* How Did You Hear About Us */}
                                <div className="mb-4">
                                    <label className="block">
                                        <span className="text-gray-700 font-medium">How Did You Hear About Us?</span>
                                        <select
                                            name="howDidYouHearAboutUs"
                                            value={formData.howDidYouHearAboutUs}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${touched.howDidYouHearAboutUs && errors.howDidYouHearAboutUs ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            style={{ focusRingColor: 'var(--theme-primary)' }}
                                        >
                                            <option value="">Select an option</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="Friend">Friend</option>
                                            <option value="Official Website">Official Website</option>
                                            <option value="Others">Others</option>
                                        </select>
                                        {touched.howDidYouHearAboutUs && errors.howDidYouHearAboutUs && (
                                            <span className="text-red-500 text-sm mt-1 block">{errors.howDidYouHearAboutUs}</span>
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
                                                    onChange={handleChange} // <-- 4. ADDED onChange
                                                    checked={formData.interestedDays.includes(day)} // <-- 4. ADDED checked
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
                                    <span className="text-gray-700 font-medium">Message</span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent"
                                        style={{ focusRingColor: 'var(--theme-primary)' }}
                                    />
                                </label>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full btn-theme-primary"
                                >
                                    Submit
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

export default Home