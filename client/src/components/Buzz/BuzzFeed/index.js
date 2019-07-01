import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { showBuzz } from '../../../action/buzz.Action';
import './BuzzFeed.css'
import BuzzThread from '../BuzzThread';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'


class BuzzFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skip: 0,
            filter: "Most Recent"
        }
    }

    handleOnChange = event => {
        this.setState({
            filter: event.target.value
        })
    }


    setStateFunction = () => {
        const newState = { skip: this.state.skip + 5 };
        return newState;
    }


    loadFunc = () => {
        this.setState(this.setStateFunction(), () => {
            this.props.showBuzz(this.state.skip)
        })
    }

    componentDidMount = () => {
        this.props.showBuzz(this.state.skip);
    }



    render() {
        const filter = <FontAwesomeIcon icon={faFilter} />
        const loggedInUserEmail = this.props.user[0].emailId;
        
        return (
            <div className="buzzfeed"><span className="attachment-name">{this.state.attachment}</span>
                <div className="buzzfeed-header">
                    <span className='buzz-filter'>
                        <span className='filtericon'>{filter}</span>
                        <select id='buzz-filter' onChange={this.handleOnChange} name="filter" className='filterdropdown'>
                            <option value="Most Recent">Most Recent Buzz</option>
                            <option value="Activity">Activity Buzz</option>
                            <option value="Lost and Found">Lost and Found Buzz</option>
                            <option value="My Buzz">My Buzz</option>
                        </select>
                    </span>
                </div>


                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc}
                    hasMore={this.state.skip < this.props.feed.length}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {this.props.feed.map((data, index) => {
                        if (this.state.filter === "Most Recent") {
                            return (
                                <BuzzThread feed={data} loggedInUserEmail={loggedInUserEmail} key={index} />
                            )
                        } else if (this.state.filter === data.category) {
                            return (
                                <BuzzThread feed={data} loggedInUserEmail={loggedInUserEmail} key={index} />
                            )
                        } else if (this.state.filter === "My Buzz") {
                            if (data.email === loggedInUserEmail) {
                                return (
                                    <BuzzThread feed={data} loggedInUserEmail={loggedInUserEmail} key={index} />
                                )
                            }
                        }
                        return (
                            <BuzzThread feed={data} loggedInUserEmail={loggedInUserEmail} key={index} />
                        )
                    })}

                </InfiniteScroll>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        feed: state.BuzzReducer.buzzfeed,
        user: state.UserReducer.userData
    }
}

const mapDispatchToProps = {
    showBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzFeed)