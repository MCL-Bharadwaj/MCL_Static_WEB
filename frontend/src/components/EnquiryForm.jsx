import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { API_ENDPOINTS } from '../config/api.js';

function EnquiryForm({ defaultLevel = '' }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    parentName: '',
    age: '',
    email: '',
    phone: '',
    interestedLevel: defaultLevel,
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'days') {
      let updatedDays;
      if (checked) {
        updatedDays = [...formData.interestedDays, value];
      } else {
        updatedDays = formData.interestedDays.filter((day) => day !== value);
      }
      setFormData({ ...formData, interestedDays: updatedDays });

      // Clear error when user interacts
      if (errors.interestedDays) {
        setErrors({ ...errors, interestedDays: '' });
      }
    } else {
      setFormData({ ...formData, [name]: value });

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors({ ...errors, [name]: '' });
      }
    }
  };

  // Handle blur to mark field as touched and validate
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
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
          interestedLevel: defaultLevel,
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
    <form onSubmit={handleFormSubmit} className="bg-white rounded-2xl shadow-xl p-10 border border-purple-100">
      <h3 className="text-2xl font-bold mb-6 text-purple-700">Start Enquiry</h3>

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
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
            touched.lastName && errors.lastName ? 'border-red-500' : 'border-gray-300'
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
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
            touched.parentName && errors.parentName ? 'border-red-500' : 'border-gray-300'
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
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
            touched.age && errors.age ? 'border-red-500' : 'border-gray-300'
          }`}
          style={{ focusRingColor: 'var(--theme-primary)' }}
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
          placeholder="(e.g., +1 234-567-8900)"
          className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
            touched.phone && errors.phone ? 'border-red-500' : 'border-gray-300'
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
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
              touched.interestedLevel && errors.interestedLevel ? 'border-red-500' : 'border-gray-300'
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
            <option value="Symposium Series">Symposium Series</option>
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
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:border-transparent ${
              touched.learningExperience && errors.learningExperience ? 'border-red-500' : 'border-gray-300'
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

      {/* Interested Days */}
      <div className="mb-6">
        <span className="text-gray-700 font-medium block mb-2">
          Interested Days For Classes (Pick at least 3 days) *
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
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
      <button type="submit" className="w-full btn-theme-primary">
        Submit
      </button>
    </form>
  );
}

export default EnquiryForm;
