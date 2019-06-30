import React from 'react';
import './ComplaintManager.css'
import ComplaintForm from './ComplaintForm';
import ComplaintList from './ComplaintList';

const Complaint = props => {

    return (
        <div>
            <ComplaintForm />
            <ComplaintList />
        </div>
    )
}

export default Complaint;