const cloudinaryConfig = require("cloudinary").v2

cloudinaryConfig.config({
    api_key: process.env.CLOUD_API_KEY,
    cloud_name: process.env.CLOUD_NAME,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true,
})

module.exports = cloudinaryConfig;