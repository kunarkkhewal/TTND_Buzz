import React from 'react';
import './ComplaintManager.css'
import ComplaintForm from './ComplaintForm/ComplaintForm';
import ComplaintList from './ComplaintList/ComplaintList';

class Complaint extends React.Component{

    render(){
        return(
            <div>
                <ComplaintForm/>
                <ComplaintList/>
            </div>
        )
    }
}

export default Complaint;