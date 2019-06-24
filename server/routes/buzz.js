const router = require('express').Router();
const buzzOperation = require('../database/controller/buzzOperation');
const Buzz = require('../database/model/buzz')
const upload = require('../middlewares/multer');
const cloudinary = require('../config/cloudinary');
const chalk = require('chalk');
const verifyToken = require('../middlewares/jwtVerify')

router.get('/', verifyToken, (req, res) => {
    buzzOperation.fetchBuzz()
        .then(data=>{res.send(data)})
        .catch()

        
});



router.post('/', verifyToken, upload.single('attachment'), async (req, res) => {
    console.log(chalk.blue(JSON.stringify(req.headers.authentication)))
    let formData = req.body;
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

    console.log("req.user=>>>>>>>>>>>>>**", req.user)
    let buzzData = new Buzz({
        description: formData.buzz,
        category: formData.category,
        attachment: imageData,
        email: req.user.emailId,
        thumbnail: req.user.thumbnail
    });
    buzzOperation.createBuzz(buzzData)
        .then(data => {
            console.log('buzz Data: ', data);
            res.send(data);
        })
        .catch(err => {
            console.log('buzz Error: ', err)
            res.send(err);
        })

});


module.exports = router;