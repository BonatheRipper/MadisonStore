const mongoose = require("mongoose");
const coversationSchema = new mongoose.Schema({
  member: {
    type: Array,
  },
});

const Conversations = mongoose.model("Conversations", coversationSchema);
module.exports = Conversations;
