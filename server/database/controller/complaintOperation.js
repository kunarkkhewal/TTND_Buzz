const complaint = require('../model/complaint');

createComplaint = complaint => {
    return complaint.save();
}

fetchComplaint = emailId => {
    return complaint.find({emailId}).sort({createdAt: -1});
}

module.exports = {
    createComplaint,
    fetchComplaint
}