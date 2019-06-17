import React from 'react';
import './ComplaintForm.css';
import { connect } from 'react-redux';
import { addComplaint } from '../../../action/complaint.Action';

class ComplaintForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            department:'',
            title:'',
            concern:'',
            attachment:''
        }
    }

    onSubmit = event => {
        event.preventDefault();

        const complaintData = new FormData()
        complaintData.append("department", event.target[0].value);
        complaintData.append("title", event.target[1].value);
        complaintData.append("concern", event.target[2].value);
        complaintData.append("attachment", event.target[3].files[0]);

        this.props.addComplaint(complaintData);

        event.target.reset();

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} encType='multipart/form-data'>
                    <select name="department" id="department">
                        <option value="Hardware">Hardware</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="Others">Others</option>
                    </select>
                    <input name='title' placeholder='Issue Title' type="text" />
                    <textarea name="concern" id="concern" cols="30" rows="10" placeholder='Concern' required></textarea>
                    <input type="file" name="attachment" accept='image/*' id="attachment" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {state}
}

const mapDispatchToProps = {
    addComplaint
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintForm);