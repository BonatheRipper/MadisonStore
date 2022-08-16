import mongoose from "mongoose";
const coversationSchema = new mongoose.Schema({
  member: {
    type: Array,
  },
});

const Conversations = mongoose.model("Conversations", coversationSchema);
export default Conversations;
