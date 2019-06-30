import React from 'react';
import './BuzzManager.css';
import BuzzForm from './BuzzForm/BuzzForm';
import BuzzFeed from './BuzzFeed/BuzzFeed';

const Buzz = props => {
    return (
        <div>
            <BuzzForm />
            <BuzzFeed />
        </div>
    )
}

export default Buzz;