
const StudentController =  require("../../controllers/student");
const authUser = require('../../middlewares/auth_middleware');

const bioRouter = require('express').Router();
const multer = require('multer');
const profileStorage = require("../../config/multer_config")
const studentController = new StudentController()

const fileUploader = multer({
    storage: profileStorage,
    fileFilter: (req, file, cb) => {
        if (
          file.mimetype === "image/jpeg" ||
          file.mimetype === "image/jpg" ||
          file.mimetype === "image/png"
        ) {
          cb(null, true);
        } else {
          cb(new Error("File should be an image"), false);
        }
      }
})

bioRouter.get('/bio', authUser, studentController.getBio);
bioRouter.put('/bio', authUser, fileUploader.single("profile"), studentController.updateBio);

module.exports = bioRouter