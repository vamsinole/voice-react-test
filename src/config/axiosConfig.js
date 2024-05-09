import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://dev.contactswing.com', // Replace with your API base URL
});


// Add a request interceptor
instance.interceptors.request.use(
  config => {
    // Add logic to modify config, such as adding headers
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    // Add logic to handle successful responses
    return response;
  },
  error => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default instance;