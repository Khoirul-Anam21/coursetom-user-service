const multer = require("multer")
const fs = require('fs');

const storageProfile = multer.diskStorage({
    destination: function(req, file, cb){
        if(fs.existsSync("uploads/profiles/")){
            cb(null, "uploads/profiles")
        }else {
            fs.mkdirSync("uploads/profiles", { recursive: true });
            cb(null, "uploads/profiles");
          }
    },
    filename: function(req, file, cb){
        file.originalname = file.originalname.replaceAll(" ", "-"); // remove spaces
        const uniqueSuffix = Date.now() + "-" + file.originalname; // making suffix by date
        cb(null, file.fieldname + "-" + uniqueSuffix); 
    },
})

module.exports = storageProfile