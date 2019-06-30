const router = require('express').Router();
const resolveOperation = require('../database/controller/resolveOperations');
const mailer = require('../config/nodemailer');

router.get('/', (req, res) => {
    resolveOperation.fetchComplaint(req.user.emailId)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(404).send(err)
        })
});

router.patch('/', (req, res) => {
    resolveOperation.updateComplaint(req.body.status, req.body.issueId)
        .then(data => {
            if(data.status === "Resolved"){
                mailer({
                    issueId: data.issueId,
                    attachment: data.attachment,
                    department: data.department,
                    emailId: data.emailId,
                    name: data.name,
                    concern: data.concern,
                    title: data.title,
                    subject: "Your Complaint is Resolved",
                    text: "Thank You for your support!"
                });
            }
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

module.exports = router;