import React from 'react';
import './ComplaintThread.css';

class ComplaintThread extends React.Component {
    render() {
        const { department, title, name, emailId, concern, attachment, status, issueId, assignedTo } = this.props.list;
        return (
            <tr>
                <td>{department}</td>
                <td>{issueId}</td>
                <td>{assignedTo}</td>
                <td>{status}</td>
            </tr>

        )
    }
}

export default ComplaintThread;