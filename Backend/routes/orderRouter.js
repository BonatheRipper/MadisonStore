import express from "express";
import Orders from "../models/orders.js";
import asycHandler from "../middleware/asycHandler.js";
import { isAuth } from "../middleware/isAuth.js";
const orderRouter = express.Router();

orderRouter.post(
  "/",
  isAuth,
  asycHandler(async (req, res, next) => {
    const newOrder = new Orders({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      ShippingDetails: req.body.ShippingDetails,
      PaymentMethod: req.body.PaymentMethod,
      taxFee: Number(req.body.taxFee),
      itemsTotal: Number(req.body.itemsTotal),
      totalPrice: Number(req.body.totalPrice),
      shippingFee: Number(req.body.totalPrice),
      user: req.user._id,
    });
    const order = await newOrder.save();
    res.status(201).send({ message: "New Order Created", order });
  })
);
orderRouter.get("/:orderId", isAuth, async (req, res) => {
  const orderId = req.params.orderId;
  const orderNew = await Orders.findById(orderId);
  if (orderNew) {
    res.send(orderNew);
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
});

orderRouter.put("/:orderId/pay", isAuth, async (req, res) => {
  console.log("here was accessed");
  const orderId = req.params.orderId;
  const order = await Orders.findById(orderId);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };
    const updatedOrder = await order.save();

    console.log(updatedOrder);
    res.send(updatedOrder);
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
});
export default orderRouter;
