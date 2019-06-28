const router = require('express').Router();
const buzzOperation = require('../database/controller/buzzOperation');
const Buzz = require('../database/model/buzz')
const upload = require('../middlewares/multer');
const cloudinary = require('../config/cloudinary');


router.get('/:skip', (req, res) => {
    buzzOperation.fetchBuzz(parseInt(req.params.skip))
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(404).send(err)
        });
});

router.post('/', upload.single('attachment'), async (req, res) => {
    let formData = req.body;
    var imageData = '';

    if (req.file) {
        let imagePath = req.file.path;
        if (imagePath) {
            await cloudinary.uploader.upload(imagePath, function (error, data) {
                imageData = data.secure_url
            });
        }
    }

    let buzzData = new Buzz({
        description: formData.buzz,
        category: formData.category,
        attachment: imageData,
        email: req.user.emailId,
        thumbnail: req.user.thumbnail
    });

    buzzOperation.createBuzz(buzzData)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(404).send(err);
        })
});


// code for like and dislike

router.patch('/like', async (req, res) => {
    const buzzData = await buzzOperation.fetchBuzzById(req.body.buzzId);
    let emailId = req.user.emailId;
    const { like } = buzzData;

    status = like.filter((item) => { return item.emailId === emailId }).length === 0 ? true : false;

    buzzOperation.likeBuzz(
        req.body.buzzId,
        req.user.emailId,
        status
    ).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(404).send(err);
    })
});

router.patch('/dislike', async (req, res) => {
    const buzzData = await buzzOperation.fetchBuzzById(req.body.buzzId);
    let emailId = req.user.emailId;
    const { dislike } = buzzData;

    status = dislike.filter((item) => { return item.emailId === emailId }).length === 0 ? true : false;

    buzzOperation.dislikeBuzz(
        req.body.buzzId,
        req.user.emailId,
        status
    ).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(404).send(err);
    })
});

module.exports = router;