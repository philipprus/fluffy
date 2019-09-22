const cloudinary = require('cloudinary');

cloudinary.config({ 
      cloud_name: process.env.CLOUD_NAME || "dxxwojaqv", 
      api_key: process.env.API_KEY || "611291973937328", 
      api_secret: process.env.API_SECRET || "ZBPj7AjIGWuu5ITNl_b74ILgyNs"
    })

const singleImage = async (path) => {
      try {
            const result = await new Promise(resolve => {
                  cloudinary.uploader.upload(path, (image) => {
                  resolve([{secure_url: image.secure_url, public_id: image.public_id}])
                  }, {resource_type: "auto"});
            });
            return result;
      } catch (e) {
            throw Error("Error upload image");
      }
}


module.exports = {singleImage};