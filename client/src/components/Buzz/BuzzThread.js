import React from 'react';

class BuzzThread extends React.Component {
    render() {
        const { description, category, attachment, createdAt, like, dislike } = this.props.feed;
        return (
            <ul>
                <li>{description}</li>
                <li>{category}</li>
                <li><img src={attachment} alt="image" /></li>
                <li>{createdAt}</li>
            </ul>
        )
    }
}

export default BuzzThread;