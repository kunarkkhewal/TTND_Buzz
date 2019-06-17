const router = require('express').Router();
const complaintOperation = require('../database/controller/complaintOperation');
const Complaint = require('../database/model/complaint');
const upload = require('../middlewares/multer');
const cloudinary = require('../config/cloudinary');
const chalk = require('chalk');
const verifyToken = require('../middlewares/jwtVerify');
const findAdmin = require('../middlewares/findAdmin');

router.get('/', verifyToken, (req, res)=>{
    complaintOperation.fetchComplaint()
        .then(data=>{res.send(data)})
        .catch(err=>{res.send(err)})
});

router.post('/', verifyToken, upload.single('attachment'), async (req, res)=>{
    let formData = req.body;
    var imageData = ''
    if(req.file){
        let imagePath = req.file.path;
        if(imagePath){
            console.log('in image data', imagePath)
            await cloudinary.uploader.upload(imagePath, function(error, data){
                imageData = data.secure_url
            });
        }
    }

    // console.log(chalk.red('findAdmin: =', findAdmin.findAdmin()));
    console.log("req.user=>>>>>>>>>>>>>**", req.user)
    const assignedTo = await findAdmin();
    console.log(assignedTo);
    let complaintData = new Complaint({
        department: formData.department,
        title: formData.title,
        concern: formData.concern,
        attachment: imageData,
        emailId: req.user.emailId,
        name: req.user.username,
        assignedTo: assignedTo[0].emailId
    });
    complaintOperation.createComplaint(complaintData)
        .then(data => {
            console.log('complaint data: ', data);
            res.send(formData);
        })
        .catch(err => {
            console.log('complaint error: ',err)
            res.send(err);
        })
});

module.exports = router;