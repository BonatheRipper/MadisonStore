import multer from "multer";
import crypto from "crypto";
const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/images");
  },
  filename: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    callback(null, `image-${crypto.randomBytes(16).toString("hex")}.${ext}`);
  },
});
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only images are allowed"));
  }
};

const upload = multer({ storage: multerConfig, fileFilter: isImage });
export default upload;
