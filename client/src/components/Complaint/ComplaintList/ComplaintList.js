import React from 'react';
import { connect } from 'react-redux';
import { showComplaintList } from '../../../action/complaint.Action';
import './ComplaintList.css';
import ComplaintThread from '../ComplaintThread/ComplaintThread'

class ComplaintForm extends React.Component {

    componentDidMount = () => {
        this.props.showComplaintList();
    }

    render(){
        return(
            <div>
                {this.props.list.map((data)=>{
                    return(
                        <ComplaintThread list={data}/>
                    )
                })}
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