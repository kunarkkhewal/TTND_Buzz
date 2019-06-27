const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({});
const maxFileSize = (process.env.MULTER_FILE_SIZE * 1024) * 1024;
const limitFileType = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
        return cb(new Error('only .png, .jpg, .jpeg are allowed'));
    }
    return cb(null, true);
};

const upload = multer({
    fileSize: maxFileSize,
    fileFilter: limitFileType,
    storage
});

module.exports = upload;