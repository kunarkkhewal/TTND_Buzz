import React from 'react';
import './ComplaintManager.css'
import ComplaintForm from './ComplaintForm/ComplaintForm';
import ComplaintList from './ComplaintList/ComplaintList';

const Complaint = props => {

    return (
        <div>
            <ComplaintForm />
            <ComplaintList />
        </div>
    )
}

export default Complaint;