import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config=>{
    config.headers.authentication = localStorage.getItem('token');
    console.log('in interceptor ', config.headers.authentication)
    return config;
});

export default axiosInstance;