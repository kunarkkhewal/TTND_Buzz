import React from 'react';
import { connect } from 'react-redux';
import { showBuzz } from '../../action/buzz.Action';

class BuzzFeed extends React.Component {


    componentDidMount = () => {
        this.props.showBuzz();
    }

    render() {
        return (
            <div>
                {console.log('data in feed', this.props.state.BuzzReducer.buzzfeed)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { state }
}

const mapDispatchToProps = {
    showBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzFeed)