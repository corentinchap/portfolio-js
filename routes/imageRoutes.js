var express = require('express');
var Image = require('../models/image');
var ImageRouter = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './client/public/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        // rejects storing a file
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

/* 
    stores image in uploads folder
    using multer and creates a reference to the 
    file
*/
ImageRouter.route("/uploadmulter")
    .post(upload.single('imageData'), (req, res, next) => {
        
        const newImage = new Image({
            imageName: req.body.imageName,
            imageData: req.file.path,
            projectId: req.body.projectId
        });

        newImage.save()
            .then((result) => {
                res.status(200).json({
                    success: true,
                    imgPath: result.imageData
                });
            })
            .catch((err) => {
                console.log()
                next(err)
            });
    });

module.exports = ImageRouter;