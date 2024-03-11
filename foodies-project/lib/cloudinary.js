"use server";
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "drroyhadz",
  api_key: "446948335125141",
  api_secret: "ex6tA51XVe4Cs3RHtaPs3-pG2dQ",
});

export const uploadImage = async (image) => {
  return await cloudinary.uploader.upload(image, function (error, result) {
    return { url: result.url };
  });
};
