const complaint = require('../model/complaint');

createComplaint = complaint => {
    return complaint.save();
}

fetchComplaint = () => {
    return complaint.find().sort({createdAt: -1});
}

module.exports = {
    createComplaint,
    fetchComplaint
}