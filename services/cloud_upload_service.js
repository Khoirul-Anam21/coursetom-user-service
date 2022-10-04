const cloudinaryConfig = require("../config/cloudinary_config");
const fs = require('fs');


async function uploadToCloud(fileData){
   const result = await cloudinaryConfig.uploader.upload(fileData.path, {
    folder: "users"
   }) 
   fs.unlinkSync(fileData.path);
   return result.secure_url;
}

async function deleteFromCloud(url){
    const splitURL = url.split("/");
    const imageId = splitURL[splitURL.length - 1].slice(
      0,
      splitURL[splitURL.length - 1].length - 4
    );
    await cloudinaryProvider.uploader.destroy(`${directoryType}/${imageId}`, {
      invalidate: true,
      resource_type: "image",
    });
}

module.exports = { uploadToCloud, deleteFromCloud }