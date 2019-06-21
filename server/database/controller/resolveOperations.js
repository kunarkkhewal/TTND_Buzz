const complaint = require('../model/complaint');

fetchComplaint = emailId => {
    return complaint.find({'assignedTo.emailId': emailId}).sort({ createdAt: -1 });
}

module.exports = { fetchComplaint };