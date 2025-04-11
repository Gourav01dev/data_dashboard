import axios from 'axios';
import { toast } from 'react-toastify';


const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});


apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;
    
    if (response && response.status === 401) {
      // Handle unauthorized access
      toast.error('Your session has expired. Please log in again.');
      // Redirect to login or dispatch logout action
    } else if (response && response.status === 404) {
      toast.error('Resource not found');
    } else if (response && response.status >= 500) {
      toast.error('Server error. Please try again later.');
    } else if (!response) {
      toast.error('Network error. Please check your connection.');
    }
    
    return Promise.reject(error);
  }
);


export const fetchData = async (url, options = {}) => {
  const { retries = 2, ...config } = options;
  
  try {
    return await apiClient(url, config);
  } catch (error) {
    if (retries > 0) {
      const delay = 1000 * (2 ** (3 - retries));
      await new Promise(resolve => setTimeout(resolve, delay));
      return fetchData(url, { ...options, retries: retries - 1 });
    }
    throw error;
  }
};

export default apiClient;
