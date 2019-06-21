import React from 'react';
import './BuzzThread.css'
class BuzzThread extends React.Component {
    render() {
        const { description, email, category, attachment, createdAt, like, dislike } = this.props.feed;
        return (
            <ul className='buzz-thread'>
                <div className='buzz-date'>{createdAt}</div>
                <div className='buzz'>
                    <li className='buzz-email'>{email}</li>
                    <li>{description}</li>
                    <li><img src={attachment} alt="" width="200px" height="auto" /></li>
                </div>
            </ul>
        )
    }
}

export default BuzzThread;