import axios from 'axios';
import { useNavigate } from 'react-router-dom';



// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://dev.contactswing.com',
  timeout: 5000, // milliseconds
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the config here, such as adding headers
    // For example, adding an authorization token
    // config.headers['Authorization'] = 'Bearer ' + authToken;
    const token = localStorage.getItem('token');
    // const history = useHistory(); // React Router history

    
    // If token is not available, redirect to login page
    
    if (token===null) {
     
      //navigate('/login');
      window.location.href = window.location.origin+'/login';
      // Redirect to login page
      // history.push('/login');
      // return Promise.reject('No token available. Redirecting to login.');
    }

    config.headers['Authorization'] = `Bearer ${token}`;
   
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle error responses
    return Promise.reject(error);
  }
);

export default axiosInstance;