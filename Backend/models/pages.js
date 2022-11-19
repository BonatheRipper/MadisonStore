const mongoose = require("mongoose");
const pagesSchema = new mongoose.Schema(
  {
    home: {
      title: String,
      headerText: String,
      BodyText: String,
      ButtonText: String,
    },
    homeHeader: {
      headerText: String,
      BodyText: String,
      ButtonText: String,
    },
    about: {
      title: String,
      headerText: String,
      BodyText: String,
      ButtonText: String,
    },

    contact: {
      title: String,
      BodyText: String,
      AddressText: String,
      phoneText: String,
      emailText: String,
      websiteText: String,
      ButtonText: String,
    },
    subscription: {
      title: String,
      BodyText: String,
      ButtonText: String,
    },
  },
  { timestamps: true }
);
const Pages = mongoose.model("Pages", pagesSchema);
module.exports = Pages;
