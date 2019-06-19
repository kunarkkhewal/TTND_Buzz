import React from 'react';
import { connect } from 'react-redux';
import { showComplaintList } from '../../../action/complaint.Action';
import './ComplaintList.css';
import ComplaintThread from '../ComplaintThread/ComplaintThread'

class ComplaintForm extends React.Component {

    componentDidMount = () => {
        this.props.showComplaintList();
    }

    render() {
        return (
            <div className="complaint-list">
                <div className="complaint-title">Your complaints</div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Department</th>
                            <th scope="col">Issue ID</th>
                            <th scope="col">Assigned To</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((data) => {
                            return (
                                <ComplaintThread list={data} />
                            )
                        })}
                    </tbody>
                </table>

            </div>
        )
    }

}


const mapStateToProps = state => {
    return { list: state.ComplaintReducer.complaintList }
}

const mapDispatchToProps = {
    showComplaintList
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintForm);