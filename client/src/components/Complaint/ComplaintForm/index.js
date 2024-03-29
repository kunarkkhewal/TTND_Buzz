import React from 'react';
import './ComplaintForm.css';
import { connect } from 'react-redux';
import { addComplaint } from '../../../action/complaint.Action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronCircleRight,
    faImage,
    faWindowClose
} from '@fortawesome/free-solid-svg-icons';
import {
    warningAlert,
    savingAlert
} from '../../../utils/alerts'

class ComplaintForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            department: '',
            title: '',
            concern: '',
            attachment: '',
            attachment_name: '',
        }
    }

    handleClear = () => {
        this.setState({
            attachment: ''
        })
    }

    handleFileChange = event => {
        this.setState({
            attachment: event.target.value,
            attachment_name: event.target.files[0].name
        })
    }

    onSubmit = event => {
        event.preventDefault();
        if (event.target[2].value.replace(/^\s+|\s+$/gm, '') === "" || event.target[1].value.replace(/^\s+|\s+$/gm, '') === "") {
            warningAlert("Text area left Empty")
        } else {
            const complaintData = new FormData()
            complaintData.append("department", event.target[0].value);
            complaintData.append("title", event.target[1].value);
            complaintData.append("concern", event.target[2].value);
            complaintData.append("attachment", event.target[3].files[0]);
            this.props.addComplaint(complaintData);
            savingAlert("Your Complaint is getting saved")
        }
        this.setState({
            attachment: ''
        })
        event.target.reset();
    }

    render() {
        const rightArrow = <FontAwesomeIcon icon={faChevronCircleRight} />
        const image = <FontAwesomeIcon icon={faImage} />
        const clear = <FontAwesomeIcon icon={faWindowClose} />

        return (
            <div className='complaint-form rounded-lg'>
                <div className="complaint-form-title">Complaint Form</div>
                <form onSubmit={this.onSubmit} encType='multipart/form-data'>
                    <div className="form-top">
                        <select name="department" id="department" required>
                            <option value="Hardware">Hardware</option>
                            <option value="Infrastructure">Infrastructure</option>
                            <option value="Others">Others</option>
                        </select>
                        <input name='title' placeholder='Issue Title' type="text" required />
                    </div>
                    <textarea name="concern" id="concern" cols="30" rows="10" placeholder='Concern' required></textarea>
                    <div className="form-bottom">
                        <div>
                            <div className="font-awesome attachment-complaint">
                                <label htmlFor="attachment">
                                    {image}
                                </label>
                                <input onChange={this.handleFileChange} value={this.state.attachment} type="file" name="attachment" accept='image/*' id="attachment" />
                            </div>
                            {(this.state.attachment !== "") ?
                                <span className='attachment-span'>
                                    <span className="attachment-clear" onClick={this.handleClear}>{clear}</span>
                                    <span className="attachment-complaint-name">{this.state.attachment_name}</span>
                                </span>
                                : null}
                        </div>
                        <div className="font-awesome">
                            <label htmlFor="post-complaint" className="post-complaint">
                                {rightArrow}
                            </label>
                            <input id='post-complaint' type="submit" value="Post" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { state }
}

const mapDispatchToProps = {
    addComplaint
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintForm);