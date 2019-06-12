const router = require('express').Router();
const buzzOperation = require('../database/controller/buzzOperation');
const Buzz = require('../database/model/buzz')
const upload = require('../middlewares/multer');
const cloudinary = require('../config/cloudinary');

router.get('/', (req, res) => {

});

router.post('/', upload.single('attachment'), async (req, res) => {
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
        
    });
    buzzOperation.createBuzz(buzzData)
        .then(data => {
            console.log('buzz Data: ', data);
            res.send(buzzData);
        })
        .catch(err => {
            console.log('buzz Error: ', err)
            res.send(err);
        })

});


module.exports = router;