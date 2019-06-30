import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config=>{
    if(!localStorage.getItem('token')){
        <Redirect to="/" />
    }
    config.headers.authentication = localStorage.getItem('token');
    return config;
});

axiosInstance.interceptors.response.use(response=>{
    if(response.data.status === 0){
        <Redirect to="/" />
    }
    return response;
}, err => {
    localStorage.removeItem('token');
    <Redirect to="/" />
})

export default axiosInstance;