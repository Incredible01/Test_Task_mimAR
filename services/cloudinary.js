const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connection checking
cloudinary.api.ping((error, result) => {
  if (error) {
    console.error('Cloudinary connection failed:', error);
  } else {
    console.log('Cloudinary connected successfully');
  }
});

module.exports = cloudinary;
