import React from 'react';
import './BuzzManager.css';
import BuzzForm from './BuzzForm/BuzzForm';
import BuzzFeed from './BuzzFeed/BuzzFeed';

class Buzz extends React.Component {

    render() {
        return (
            <div>
                <BuzzForm />
                <BuzzFeed />
            </div>
        )
    }
}

export default Buzz;