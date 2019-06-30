import React from 'react';
import './BuzzThread.css'
import { connect } from 'react-redux';
import { postLike, postDislike } from '../../../action/buzz.Action';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

class BuzzThread extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            like: false,
            dislike: false
        }
    }

    Like = () => {
        this.props.postLike({ buzzId: this.props.feed._id });
        if (this.state.like === false) {
            if (this.state.dislike === false) {
                this.setState({
                    like: !this.state.like
                })
            } else {
                this.setState({
                    like: !this.state.like,
                    dislike : !this.state.dislike
                })
            }
        } else {
            this.setState({
                like: !this.state.like
            })
        }

    }

    Dislike = () => {
        this.props.postDislike({ buzzId: this.props.feed._id });
        if (this.state.dislike === false) {
            if (this.state.like === false) {
                this.setState({
                    dislike: !this.state.dislike
                })
            } else {
                this.setState({
                    dislike: !this.state.dislike,
                    like : !this.state.like
                })
            }
        } else {
            this.setState({
                dislike: !this.state.dislike
            })
        }
    }
    

    render() {
        const { description, email, category, attachment, createdAt, like, dislike, thumbnail } = this.props.feed;
        return (
            <div className='buzzContainer'>
                <div className='buzzHeader'>
                    <div className='nameActivity'>
                        <div className='userimgcontainer'>
                            <img src={thumbnail} height={'45px'} width={'45px'} alt="" role='presentation' className='userimg' />
                        </div>
                        <div className='usernameactivity'>
                            <span className='username'>{email}</span>
                            <span className='buzzCategory'>
                                <span className={(category === 'Activity') ? "badge badge-primary" : "badge badge-danger"}>{category}</span>
                            </span>
                            <div className='timestamp'>
                                {moment(createdAt).fromNow()}
                            </div>
                        </div>
                    </div>

                    <div className='deleteBuzz'>
                        {/* {
                            loggedInUser === email ? <span onClick={this.Delete} className='deleteicon'>{trash}</span> : null
                        } */}
                    </div>
                </div>
                <div className='buzzContentContainer'>
                    <div className='buzzContent'>
                        {description}
                    </div>
                    <div className='uploadedimg'>
                        <img className='img-thumbnail' src={attachment} height={'200px'} width={'200px'} alt='' role='presentation' />
                    </div>
                </div>
                <div className='buzzFooter'>
                    <span className={(this.state.like === true ? "likeicon" : "reactionicon")} onClick={this.Like}>{thumbsUp}&nbsp;{like.length}</span>
                    <span className={(this.state.dislike === true ? "unlikeicon" : "reactionicon")} onClick={this.Dislike}>{thumbsDown}&nbsp;{dislike.length}</span>
                </div>
            </div>
        )
    }
}

const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />
const thumbsDown = <FontAwesomeIcon icon={faThumbsDown} />


const mapDispatchToProps = {
    postLike,
    postDislike,
}

export default connect(null, mapDispatchToProps)(BuzzThread);