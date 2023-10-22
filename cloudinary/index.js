const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dcpv4cubp",
  api_key: "276535938914195",
  api_secret: "zBuEY3H_ckkQc7RqrI8w5Z-4e70",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "myntra_api",
    allowedFormats: ["jpeg", "png", "img", "jpg"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
