const router = require('express').Router();
const nanoid = require('nanoid');
const complaintOperation = require('../database/controller/complaintOperation');
const Complaint = require('../database/model/complaint');
const upload = require('../middlewares/multer');
const cloudinary = require('../config/cloudinary');
const findAdmin = require('../database/utils/findAdmin');
const mailer = require('../config/nodemailer');

router.get('/', (req, res) => {
    complaintOperation.fetchComplaint(req.user.emailId)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(404).send(err)
        })
});

router.post('/', upload.single('attachment'), async (req, res) => {
    const id = nanoid(9);
    let formData = req.body;
    var imageData = ''

    if (req.file) {
        let imagePath = req.file.path;
        if (imagePath) {
            await cloudinary.uploader.upload(imagePath, function (error, data) {
                imageData = data.secure_url
            });
        }
    }

    const assignedToAdmin = await findAdmin(req.body.department);

    let complaintData = new Complaint({
        department: formData.department,
        title: formData.title,
        concern: formData.concern,
        attachment: imageData,
        emailId: req.user.emailId,
        name: req.user.username,
        assignedTo: {
            username: assignedToAdmin[0].username,
            emailId: assignedToAdmin[0].emailId
        },
        issueId: id
    });

    complaintOperation.createComplaint(complaintData)
        .then(data => {
            mailer({
                issueId: data.issueId,
                attachment: data.attachment,
                department: data.department,
                emailId: data.emailId,
                name: data.name,
                concern: data.concern,
                title: data.title,
                subject: "Your Complaint is Registered",
                text: "Your Complaint will be Resolved soon"
            });
            mailer({
                issueId: data.issueId,
                attachment: data.attachment,
                department: data.department,
                emailId: data.assignedTo.emailId,
                name: data.assignedTo.username,
                concern: data.concern,
                title: data.title,
                subject: "A complaint has been Assigned to You",
            });
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(404).send(err);
        })
});

module.exports = router;