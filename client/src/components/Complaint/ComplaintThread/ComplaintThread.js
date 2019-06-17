import React from 'react';
import './ComplaintThread.css';

class ComplaintThread extends React.Component{
    render(){
        const {department, title, name, emailId, concern, attachment, status, issueId, assignedTo} = this.props.list;
        return(
            <ul>
                <li>department:=> {department}</li>
                <li>title:=> {title}</li>
                <li>{name}</li>
                <li>{emailId}</li>
                <li>concern:=> {concern}</li>
                <li>{attachment}</li>
                <li>{status}</li>
                <li>Assigned to=::>> {assignedTo}</li>
            </ul>
        )
    }
}

export default ComplaintThread;