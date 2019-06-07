const mongoose = require('../utils/connection');
let department=['Hardware','Infrastructure','Others']
let status=['Pending', 'In Progress', 'Resolved']

const Schema = mongoose.Schema;
const complaintSchema = new Schema({
    department:{type: String, enum:department, required: true},
    title: {type: String, required: true},
    name: String,
    emailId: String,
    concern: {type: String, required: true},
    attachment: String,
    status: {type:String, enum: status, required: true},
    issueId: Number,
    assignedTo: String
})

const complaintModel = mongoose.model('Complaints',complaintSchema);

module.exports = complaintModel; 