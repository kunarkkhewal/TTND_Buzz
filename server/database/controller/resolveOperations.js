const complaint = require('../model/complaint');

fetchComplaint = emailId => {
    return complaint.find({ 'assignedTo.emailId': emailId }).sort({ createdAt: -1 });
}

updateComplaint = (status, issueId) => {
    return complaint.findOneAndUpdate({ issueId }, { $set: { status } }, { new: true })
}

module.exports = {
    fetchComplaint, 
    updateComplaint
};