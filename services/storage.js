const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'storages/')
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + '.' + (file.originalname))
    }
})

module.exports = multer({ storage: storage })