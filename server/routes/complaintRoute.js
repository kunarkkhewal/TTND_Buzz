const router = require('express').Router();
const nanoid = require('nanoid');
const complaintOperation = require('../database/controller/complaintOperation');
const Complaint = require('../database/model/complaint');
const upload = require('../middlewares/multer');
const cloudinary = require('../config/cloudinary');
const chalk = require('chalk');
const verifyToken = require('../middlewares/jwtVerify');
const findAdmin = require('../database/utils/findAdmin');
const mailer = require('../config/nodemailer');

router.get('/', (req, res) => {
    complaintOperation.fetchComplaint(req.user.emailId)
        .then(data => { res.send(data) })
        .catch(err => { res.send(err) })
});

router.post('/', upload.single('attachment'), async (req, res) => {
    const id = nanoid(9);
    let formData = req.body;
    console.log(chalk.yellow("in complaint: : :", JSON.stringify(req.body)))
    var imageData = ''
    if (req.file) {
        let imagePath = req.file.path;
        if (imagePath) {
            console.log('in image data', imagePath)
            await cloudinary.uploader.upload(imagePath, function (error, data) {
                imageData = data.secure_url
            });
        }
    }

    // console.log(chalk.red('findAdmin: =', findAdmin.findAdmin()));
    console.log("req.user=>>>>>>>>>>>>>**", req.user)
    const assignedToAdmin = await findAdmin(req.body.department);
    console.log(assignedToAdmin);
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
            console.log('complaint data: ', data.assignedTo.username);
            mailer({
                emailId: data.emailId,
                name: data.name,
                concern: data.concern,
                title: data.title,
                subject: "Your Complaint is Registered",
                text: "Your Complaint will be Resolved soon"
            });
            mailer({
                emailId: data.assignedTo.emailId,
                name: data.assignedTo.username,
                concern: data.concern,
                title: data.title,
                subject: "Complaint has been Assigned to You",
            });
            res.send(data);
        })
        .catch(err => {
            console.log('complaint error: ', err)
            res.send(err);
        })
});

module.exports = router;