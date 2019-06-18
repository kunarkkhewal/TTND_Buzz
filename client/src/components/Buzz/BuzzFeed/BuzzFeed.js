import React from 'react';
import { connect } from 'react-redux';
import { showBuzz } from '../../../action/buzz.Action';
import './BuzzFeed.css'
import BuzzThread from '../BuzzThread/BuzzThread'

class BuzzFeed extends React.Component {


    componentDidMount = () => {
        this.props.showBuzz();
    }

    render() {
        return (
            <div className="buzzfeed">
                
                    {this.props.feed.map((data) => {
                        return (
                            <BuzzThread feed={data} />
                        )
                    })}
            </div>
            )
        }
    }
    
const mapStateToProps = state => {
    return {feed: state.BuzzReducer.buzzfeed }
            }
            
const mapDispatchToProps = {
                    showBuzz
                }

                export default connect(mapStateToProps, mapDispatchToProps)(BuzzFeed)