import React from 'react';
import './ResolveManager.css'
import { connect } from 'react-redux';
import { showComplaintList } from '../../action/resolve.Action';
import ResolveThread from './ResolveThread/ResolveThread'

class ResolveManager extends React.Component {

    componentDidMount = () => {
        this.props.showComplaintList();
    }

    render() {
        return (
            <div className='resolve'>
                <div className="complaint-title">Welcome Admin</div>
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