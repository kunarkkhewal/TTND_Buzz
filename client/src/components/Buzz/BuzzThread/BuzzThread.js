import React from 'react';
import './BuzzThread.css'
class BuzzThread extends React.Component {
    render() {
        const { description, email, category, attachment, createdAt, like, dislike, thumbnail } = this.props.feed;
        return (
            <ul className='buzz-thread'>
                <div className='buzz-date'>{createdAt}</div>
                <div className='buzz'>
                    <div className='user-info'>
                        <li className='user-thumbnail'><img src={thumbnail} alt="" /></li>
                        <li className='buzz-email'>{email}</li>
                        <li className='buzz-category'>{category}</li>
                    </div>
                    <li className='buzz-description'>{description}</li>
                    <li><img src={attachment} alt="" width="200px" height="auto" /></li>
                </div>
            </ul>
        )
    }
}

export default BuzzThread;