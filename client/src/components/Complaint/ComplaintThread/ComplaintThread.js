import React from 'react';
import './ComplaintThread.css';
import ComplaintDetail from '../../ComplaintDetail/ComplaintDetail';

class ComplaintThread extends React.Component {
    render() {
        const { department, title, name, emailId, concern, attachment, status, issueId, assignedTo:{username} } = this.props.list;
        return (
            <tr>
                <td>{department}</td>
                <td><ComplaintDetail issueId={issueId}/></td>
                <td>{username}</td>
                <td className={(status==='Pending'? "status-pending" : (status==='In Progress')? "status-in-progress": "status-resolved")}>{status}</td>
            </tr>

        )
    }
}

export default ComplaintThread;