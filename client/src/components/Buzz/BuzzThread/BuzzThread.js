import React from 'react';
import './BuzzThread.css'
class BuzzThread extends React.Component {
    render() {
        const { description, email, category, attachment, createdAt, like, dislike } = this.props.feed;
        return (
            <ul>
                <li>{description}</li>
                <li>{category}</li>
                <li><img src={attachment} alt=""  width="200px" height="auto" /></li>
                <li>{createdAt}</li>
                <li>{email}</li>
            </ul>
        )
    }
}

export default BuzzThread;