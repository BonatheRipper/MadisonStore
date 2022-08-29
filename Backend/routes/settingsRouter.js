import express from "express";
import upload from "../cloudinary/multerUploader.js";
import { CloudinaryUploader } from "../cloudinary/cloudinary.js";
import { CloudinaryDeleter } from "../cloudinary/cloudinary.js";
import Settings from "../models/settings.js";

const settingsRouter = express.Router();
settingsRouter.get("/", async (req, res, next) => {
  try {
    const systemSeettings = await Settings.findById("630bf016f3cb8c2589c707ac");
    return res.send(systemSeettings);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ error: "There was an error" });
  }
});
settingsRouter.post(
  "/",
  upload.fields([
    { name: "websiteLogo", maxCount: 1 },
    { name: "websiteFavicon", maxCount: 1 },
  ]),
  async (req, res, next) => {
    const { title, description, tawkTo } = req.body;
    const { websiteLogo, websiteFavicon } = req.files;

    if (!title || !description || !tawkTo) {
      return res.status(404).json({ error: "One or more fields missing" });
    }

    try {
      const settings = await Settings.findById("630bf016f3cb8c2589c707ac");
      settings.title = title;
      settings.description = description;
      settings.tawkTo = tawkTo;
      if (websiteLogo && websiteLogo.length) {
        await CloudinaryDeleter(settings.logoImage.public_id);
        const logoImage = await CloudinaryUploader(websiteLogo);
        settings.logoImage = logoImage[0];
      }
      if (websiteFavicon && websiteFavicon.length) {
        await CloudinaryDeleter(settings.faviconImage.public_id);
        const faviconImage = await CloudinaryUploader(websiteFavicon);
        settings.faviconImage = faviconImage[0];
      }

      await settings.save();
      return res.send(settings);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ error: "There was an error" });
    }
  }
);
export default settingsRouter;
