import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { showBuzz } from '../../../action/buzz.Action';
import './BuzzFeed.css'
import BuzzThread from '../BuzzThread/BuzzThread'

class BuzzFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skip: 0
        }
    }

    setStateFunction = () => {
        const newState = { skip: this.state.skip + 5 };
        return newState;
    }


    loadFunc = () => {
        setTimeout(() => {
            this.setState(this.setStateFunction(),
                () => this.props.showBuzz(this.state.skip))
        }, 500);
    }

    componentDidMount = () => {
        this.props.showBuzz(this.state.skip);
    }



    render() {
        return (
            <div className="buzzfeed">

                <div className="buzzfeed-header">Recent Buzz</div>

                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc}
                    hasMore={this.state.skip < this.props.feed.length}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {this.props.feed.map((data, index) => {
                        return (
                            <BuzzThread feed={data} key={index} />
                        )
                    })}

                </InfiniteScroll>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { feed: state.BuzzReducer.buzzfeed }
}

const mapDispatchToProps = {
    showBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzFeed)