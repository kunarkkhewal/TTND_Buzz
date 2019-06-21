import React from 'react';
import './ResolveThread.css';

class ResolveThread extends React.Component {
    render() {
        const { department, title, name, emailId, concern, attachment, status, issueId, assignedTo:{username} } = this.props.list;
        return (
            <tr>
                <td>{department}</td>
                <td>{issueId}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>
                    <select className= {(status==='Pending'? "status-pending" : (status==='In Progress')? "status-in-progress": "status-resolved")} name="status" value={status}>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                    </select>
                </td>
            </tr>

        )
    }
}

export default ResolveThread;