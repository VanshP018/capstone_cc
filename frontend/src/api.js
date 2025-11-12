// API base URL - use environment variable or fallback
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Log API URL for debugging
console.log('API URL configured as:', API_URL);

// Helper function to make API calls
const apiCall = async (endpoint, options = {}) => {
  try {
    const url = `${API_URL}${endpoint}`;
    console.log('Making API call to:', url);
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('API Error:', response.status, data);
      throw new Error(data.message || 'Something went wrong');
    }

    console.log('API Success:', url, data);
    return data;
  } catch (error) {
    console.error('API Call Error:', error);
    throw error;
  }
};

// Register a new user
export const register = async (name, email, password) => {
  return apiCall('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });
};

// Login user
export const login = async (email, password) => {
  return apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
};

// Get user profile (requires token)
export const getProfile = async (token) => {
  return apiCall('/profile', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
