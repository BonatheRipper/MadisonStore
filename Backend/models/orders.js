import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
          required: true,
        },
      },
    ],
    ShippingDetails: {
      Fname: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      Pcode: { type: String, required: true },
      country: { type: String, required: true },
    },
    PaymentMethod: { type: String, required: true },
    PaymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    itemsTotal: { type: Number, required: true },
    shippingFee: { type: Number, required: true },
    taxFee: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model("Orders", ordersSchema);
export default Orders;
