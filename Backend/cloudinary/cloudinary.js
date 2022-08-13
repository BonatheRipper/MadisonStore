import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs";
cloudinary.config({
  cloud_name: "yelp-camp100",
  api_key: "587559537283863",
  api_secret: "4JdN5l7cDP3buxEZTAt5_sbUlHU",
});

const CloudinaryUploader = async (imageArr) => {
  let newImagesarr = [];
  for (let image of imageArr) {
    await cloudinary.uploader.upload(image.path, function (error, result) {
      if (result) {
        let details = {};
        details.url = result.url;
        details.public_id = result.public_id;
        newImagesarr.push(details);
      }
    });
  }
  try {
    fs.readdir("public/images", (err, files) => {
      if (err) throw err;
      try {
        for (const file of files) {
          fs.unlink(path.join("public/images", file), (err) => {
            if (err) throw err;
          });
        }
        console.log("All local images deleted");
      } catch (e) {
        console.log(e);
      }
    });
  } catch (e) {
    console.log("There was and error removing directory", e);
  }
  return newImagesarr;
};
const CloudinaryDeleter = async (id) => {
  cloudinary.uploader.destroy(id, function (error, result) {
    if (result) {
      return console.log(result);
    }
    return console.log(error);
  });
};
export { CloudinaryUploader, CloudinaryDeleter };
