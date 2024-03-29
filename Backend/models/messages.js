const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    messages: [
      {
        message: String,
        time: Date,
        isAdmin: Boolean,
      },
    ],
  },
  { timestamps: true }
);
const Messages = mongoose.model("Messages", messageSchema);
module.exports = Messages;
