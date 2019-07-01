import React from 'react';
import './BuzzThread.css'
import { connect } from 'react-redux';
import { postLike, postDislike, deleteBuzz } from '../../../action/buzz.Action';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteAlert } from '../../../utils/alerts'

class BuzzThread extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            like: false,
            dislike: false
        }
    }

    onDelete = () => {
        let val = deleteAlert()
        val.then((result) => {
            if (result.value) {
                this.props.deleteBuzz(this.props.feed._id)
            }
        })
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
                    dislike: !this.state.dislike
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
                    like: !this.state.like
                })
            }
        } else {
            this.setState({
                dislike: !this.state.dislike
            })
        }
    }


    render() {
        const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />
        const thumbsDown = <FontAwesomeIcon icon={faThumbsDown} />
        const trash = <FontAwesomeIcon icon={faTrash} />
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
                        {
                            this.props.loggedInUserEmail === email ? <span onClick={this.onDelete} className='deleteicon'>{trash}</span> : null
                        }
                    </div>
                </div>
                <div className='buzzContentContainer'>
                    <div className='buzzContent'>
                        {description}
                    </div>
                    {(attachment !== "") ?
                        <div className='uploadedimg'>
                            <img className='img-thumbnail' src={attachment} maxheight={'450px'} maxwidth={'450px'} alt='' role='presentation' />
                        </div> :
                        null}

                </div>
                <div className='buzzFooter'>
                    <span className={(this.state.like === true ? "likeicon" : "reactionicon")} onClick={this.Like}>{thumbsUp}&nbsp;{like.length}</span>
                    <span className={(this.state.dislike === true ? "unlikeicon" : "reactionicon")} onClick={this.Dislike}>{thumbsDown}&nbsp;{dislike.length}</span>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = {
    postLike,
    postDislike,
    deleteBuzz
}

export default connect(null, mapDispatchToProps)(BuzzThread);