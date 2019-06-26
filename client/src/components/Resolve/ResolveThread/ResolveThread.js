import React from 'react';
import './ResolveThread.css';
import { updateComplaint } from '../../../action/resolve.Action';
import { connect } from 'react-redux';
import ComplaintDetail from '../../ComplaintDetail/ComplaintDetail'

class ResolveThread extends React.Component {

    handleOnChange = event => {
        this.props.updateComplaint({status:event.target.value, issueId: this.props.list.issueId});
    }

    render() {
        const { department, title, name, emailId, concern, attachment, status, issueId, assignedTo: { username } } = this.props.list;
        return (
            <tr>
                <td>{department}</td>
                <td><ComplaintDetail issueId={issueId}/></td>
                <td>{name}</td>
                <td>{username}</td>
                <td>
                    {/* {console.log("in resolve thread render")} */}
                    <select onChange={this.handleOnChange} className={(status === 'Pending' ? "status-pending" : (status === 'In Progress') ? "status-in-progress" : "status-resolved")} name="status" value={status}>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                    </select>
                </td>
            </tr>

        )
    }
}

const mapDispatchToProps = {
    updateComplaint
}

export default connect(null, mapDispatchToProps)(ResolveThread);