const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var subscriptionSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const SubscribersList = mongoose.model("SubscribersList", subscriptionSchema);
module.exports = SubscribersList;
