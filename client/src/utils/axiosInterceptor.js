import React from 'react';
import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config=>{
    config.headers.authentication = localStorage.getItem('token');
    return config;
});

export default axiosInstance;