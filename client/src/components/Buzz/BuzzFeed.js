import React from 'react';
import { connect } from 'react-redux';
import { showBuzz } from '../../action/buzz.Action';
import BuzzThread from './BuzzThread'

class BuzzFeed extends React.Component {


    componentDidMount = () => {
        this.props.showBuzz();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.feed.map((data)=>{
                        return(
                            <BuzzThread feed={data}/>
                        )
                    })}
                </ul>
                {console.log('data in feed', this.props.feed)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { feed: state.BuzzReducer.buzzfeed  }
}

const mapDispatchToProps = {
    showBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzFeed)