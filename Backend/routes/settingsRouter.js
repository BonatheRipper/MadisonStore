const express = require("express");
const upload = require("../cloudinary/multerUploader");
const { CloudinaryUploader } = require("../cloudinary/cloudinary");
const { CloudinaryDeleter } = require("../cloudinary/cloudinary");
const Settings = require("../models/settings");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");

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
  isAuth,
  isAdmin,
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
module.exports = settingsRouter;
