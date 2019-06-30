import React from 'react';
import './BuzzManager.css';
import BuzzForm from './BuzzForm';
import BuzzFeed from './BuzzFeed';

const Buzz = props => {
    return (
        <div>
            <BuzzForm />
            <BuzzFeed />
        </div>
    )
}

export default Buzz;