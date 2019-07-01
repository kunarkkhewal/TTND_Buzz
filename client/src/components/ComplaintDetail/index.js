import React from 'react';
import { connect } from 'react-redux';
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
            status: "",
            title: "",
            assignedTo: "",
            department: ""
        }
    }

    handleOnClick = () => {
        const data = this.props.list.filter(element => {
            return element.issueId === this.props.issueId;
        });
        this.setState({
            ...data[0]
        })
    }

    render() {
        const { name, attachment, concern, createdAt, status, title, assignedTo, department } = this.state;

        return (
            <div className="complaint-modal">
                <button
                    onClick={this.handleOnClick}
                    type="button"
                    className="btn modal-btn"
                    data-toggle="modal"
                    data-target={`#myModal${this.props.issueId}`}
                    style={{ 'color': 'steelblue', 'textDecoration':'underline' }}
                >
                    {this.props.issueId}
                </button>

                <div className="modal fade" id={`myModal${this.props.issueId}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Complain Details</h4>
                            </div>
                            <div className="modal-body">
                                <table style={{ 'width': '100%' }}>
                                    <tbody>
                                        <tr style={{ 'border': 'none%' }}>
                                            <th>Issue ID</th>
                                            <td>{this.props.issueId}</td>
                                        </tr>
                                        <tr>
                                            <th>Title</th>
                                            <td>{title}</td>
                                        </tr>
                                        <tr>
                                            <th>Details</th>
                                            <td>{concern}</td>
                                        </tr>
                                        <tr>
                                            <th>Created At</th>
                                            <td>{moment(createdAt).format('LL')}</td>
                                        </tr>
                                        {(attachment) ?
                                            <tr>
                                                <th>Image</th>
                                                <td><img src={attachment} width={'100px'} height={'100px'} alt='' /></td>
                                            </tr>
                                            : null
                                        }
                                        <tr>
                                            <th>Department</th>
                                            <td>{department}</td>
                                        </tr>
                                        <tr>
                                            <th>Raised By</th>
                                            <td>{name}</td>
                                        </tr>
                                        <tr>
                                            <th>Assigned To</th>
                                            <td>{assignedTo.emailId}</td>
                                        </tr>
                                        <tr>
                                            <th>Status</th>
                                            <td>{status}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { list: state.ComplaintReducer.complaintList }
}

export default connect(mapStateToProps)(ComplaintDetail);