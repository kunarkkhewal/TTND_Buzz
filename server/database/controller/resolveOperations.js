const complaint = require('../model/complaint');

fetchComplaint = () => {
    return complaint.find().sort({createdAt: -1});
}

module.exports = {fetchComplaint};