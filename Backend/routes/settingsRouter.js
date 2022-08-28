import express from "express";
import upload from "../cloudinary/multerUploader.js";
import { CloudinaryUploader } from "../cloudinary/cloudinary.js";
import { CloudinaryDeleter } from "../cloudinary/cloudinary.js";
const settingsRouter = express.Router();

settingsRouter.post(
  "/",
  upload.fields([
    { name: "websiteLogo", maxCount: 1 },
    { name: "websiteFavicon", maxCount: 1 },
  ]),
  async (req, res, next) => {
    const { title, description, tawkTo } = req.body;
    const { websiteLogo, websiteFavicon } = req.files;
    if (
      !title ||
      !description ||
      tawkTo ||
      !websiteLogo.length ||
      !websiteFavicon.length
    ) {
      return res.status(404).json({ error: "One or more fields missing" });
    }
    const logoImage = await CloudinaryUploader(websiteLogo);
    const faviconImage = await CloudinaryUploader(websiteFavicon);

    console.log(logoImage, "This is the logo image");
    console.log(faviconImage, "This is the favicon image");
  }
);
export default settingsRouter;
