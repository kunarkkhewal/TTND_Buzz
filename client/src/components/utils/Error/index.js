import React from 'react';
import {Redirect , Link} from 'react-router-dom';

const Error = location => {
    return(
        <div>
            <h1>wrong route</h1>
            <Link to="/dashboard/buzz">GO BACK TO SAFETY</Link>
        </div>
    )
}

export default Error;