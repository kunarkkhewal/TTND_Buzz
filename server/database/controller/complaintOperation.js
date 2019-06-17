const complaint = require('../model/complaint');

createComplaint = complaint => {
    return complaint.save();
}

fetchComplaint = () => {
    return complaint.find();
}

module.exports = {
    createComplaint,
    fetchComplaint
}