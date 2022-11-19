const mongoose = require("mongoose");
const settingsSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    tawkTo: String,
    logoImage: {
      url: String,
      public_id: String,
    },
    faviconImage: {
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);
const Settings = mongoose.model("Settings", settingsSchema);
module.exports = Settings;
