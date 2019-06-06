import React from 'react';
import {Redirect} from 'react-router-dom'

const Logout={
    logout : ()=>{
        console.log("in logout",localStorage.getItem("token"));
        localStorage.removeItem('token');
        <Redirect 
            to={'/'}
        />
    }
}

export default Logout;