import mongoose from "mongoose";
const Schema = mongoose.Schema;
var subscriptionSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
});
const SubscribersList = mongoose.model("SubscribersList", subscriptionSchema);
export default SubscribersList;
