import React from 'react';
import './ResolveManager.css'
import { connect } from 'react-redux';
import { showComplaintList } from '../../action/resolve.Action';
import ResolveThread from './ResolveThread'

class ResolveManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: "All Complaints"
        }
    }

    handleOnChange = event => {
        this.setState({
            filter: event.target.value
        })
    }

    componentDidMount = () => {
        this.props.showComplaintList();
    }

    render() {
        return (
            <div className='resolve'>
                <div className="complaint-title">
                    <span>Welcome Admin</span>
                    <span>
                        <select onChange={this.handleOnChange} name="filter">
                            <option value="All Complaints">All Complaints</option>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </span>
                </div>

                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Department</th>
                            <th scope="col">Issue ID</th>
                            <th scope="col">Locked By</th>
                            <th scope="col">Assigned To</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((data, index) => {
                            if (this.state.filter === "All Complaints") {
                                return (
                                    <ResolveThread list={data} key={index} />
                                )
                            } else if (this.state.filter === data.status) {
                                return (
                                    <ResolveThread list={data} key={index} />
                                )
                            }
                            return (
                                <ResolveThread list={data} key={index} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { list: state.ResolveReducer.resolveList }
}

const mapDispatchToProps = {
    showComplaintList
}

export default connect(mapStateToProps, mapDispatchToProps)(ResolveManager);