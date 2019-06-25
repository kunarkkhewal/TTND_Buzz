import React from 'react';
import './BuzzThread.css'
import { connect } from 'react-redux';
import { postLike, postDislike } from '../../../action/buzz.Action';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

class BuzzThread extends React.Component {

    Like = () => {
        this.props.postLike({ buzzId: this.props.feed._id });
    }

    Dislike = () => {
        this.props.postDislike({ buzzId: this.props.feed._id });
    }

    render() {
        const { description, email, category, attachment, createdAt, like, dislike, thumbnail } = this.props.feed;
        return (
            <ul className='buzz-thread'>
                <div className='buzz-date'>{moment(createdAt).format('LL')}</div>
                <div className='buzz'>
                    <div className='user-info'>
                        <li className='user-thumbnail'><img src={thumbnail} alt="" /></li>
                        <li className='buzz-email'>{email}</li>
                        <li className='buzz-time'>{moment(createdAt).fromNow()}</li>
                        <li className={(category === 'Activity' ? "activity" : "lost-and-found")}>{category}</li>
                    </div>
                    <li className='buzz-description'>{description}</li>
                    <li><img src={attachment} alt="" width="200px" height="auto" /></li>
                    <div className='reactions'>
                        <li onClick={this.Like}>{thumbsUp} {like.length}</li>
                        <li onClick={this.Dislike}>{thumbsDown} {dislike.length}</li>
                    </div>
                </div>
            </ul>
        )
    }
}

const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />
const thumbsDown = <FontAwesomeIcon icon={faThumbsDown} />


const mapDispatchToProps = {
    postLike,
    postDislike
}

export default connect(null, mapDispatchToProps)(BuzzThread);