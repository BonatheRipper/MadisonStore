import mongoose from "mongoose";
const gatewaySchema = new mongoose.Schema(
  {
    Paypal: {
      name: String,
      option: String,
      isActive: Boolean,
      testKey: String,
      liveKey: String,
    },
    Paystack: {
      name: String,
      option: String,
      isActive: Boolean,
      testKey: String,
      liveKey: String,
    },
    Flutterwave: {
      name: String,
      option: String,
      isActive: Boolean,
      testKey: String,
      liveKey: String,
    },
  },
  { timestamps: true }
);
const Gateway = mongoose.model("Gateway", gatewaySchema);
export default Gateway;
