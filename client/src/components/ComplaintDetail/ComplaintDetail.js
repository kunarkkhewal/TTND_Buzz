import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import moment from 'moment'
import './ComplaintDetail.css'

class ComplaintDetail extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "",
            attachment: "",
            concern: "",
            createdAt: "",
            emailId: "",
            show: false,
        }
    }

    handleOnClick = () => {
        const data = this.props.list.filter(element => {
            return element.issueId === this.props.issueId;
        });
        this.setState({
            ...data[0],
            show: true
        })
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    render() {
        const { name, attachment, concern, createdAt, emailId } = this.state;

        return (
            <div>
                <a className='complaint' onClick={this.handleOnClick}>
                    {this.props.issueId}
                </a>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.issueId}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Complaint By: {name}</h6>
                        <h6>Concern: {concern}</h6>
                        <h6>Created At: {moment(createdAt).format('LLLL')}</h6>
                        <img className='thumbnail' src={attachment} alt=''/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { list: state.ComplaintReducer.complaintList }
}

export default connect(mapStateToProps)(ComplaintDetail);