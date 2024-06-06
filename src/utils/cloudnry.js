import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUDNRY_CLOUD_NAME, 
  api_key: process.env.CLOUDNRY_API_KEY, 
  api_secret: process.env.CLOUDNRY_API_SECRET 
});

const uploadCloudnry=async (localFilePath)=>{
    try{
        if(!localFilePath) return null;
        cloudinary.uploader.upload(localFilePath,{resource_type:"auto"})
        console.log("sile is uploaded on cloudinry",response.url);
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath)
        return null;
    }
}

// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });

export {uploadCloudnry}