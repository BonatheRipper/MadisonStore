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
    console.log(order);
    res.status(201).send({ message: "New Order Created", order });
  })
);
orderRouter.get(
  "/:orderId",
  isAuth,
  asycHandler(async (req, res, next) => {
    const requestedOrder = await Orders.findById(req.params.orderId);

    if (requestedOrder) {
      res.send(requestedOrder);
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);
export default orderRouter;
