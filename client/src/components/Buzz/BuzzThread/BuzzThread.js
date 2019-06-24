import React from 'react';
import './BuzzThread.css'
import {connect} from 'react-redux';
import {postLike, postDislike} from '../../../action/buzz.Action';

class BuzzThread extends React.Component {

    Like = () => {
        this.props.postLike({buzzId:this.props.feed._id});
    }

    Dislike = () => {
        this.props.postDislike({buzzId:this.props.feed._id});
    }

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
                    <li onClick={this.Like}>like: {like.length}</li>
                    <li onClick={this.Dislike}>dislike: {dislike.length}</li>
                </div>
            </ul>
        )
    }
}

const mapDispatchToProps = {
    postLike,
    postDislike
}

export default connect(null, mapDispatchToProps)(BuzzThread);