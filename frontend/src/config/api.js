// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5233';

export const API_ENDPOINTS = {
  ENQUIRY: `${API_BASE_URL}/api/enquiry`,
};

export default API_BASE_URL;
