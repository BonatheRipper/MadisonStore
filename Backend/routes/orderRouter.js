import express from "express";
import Orders from "../models/orders.js";
import asycHandler from "../middleware/asycHandler.js";
import { isAuth } from "../middleware/isAuth.js";
import Products from "../models/products.js";
import { isAdmin } from "../middleware/isAdmin.js";

const orderRouter = express.Router();

orderRouter.post("/", isAuth, async (req, res, next) => {
  console.log(req.body.orderItems[0].image);
  const newOrder = new Orders({
    orderItems: req.body.orderItems.map((x) => ({
      ...x,
      product: x._id,
      image: x.image.url,
    })),
    ShippingDetails: req.body.ShippingDetails,
    PaymentMethod: req.body.PaymentMethod,
    taxFee: Number(req.body.taxFee),
    itemsTotal: Number(req.body.itemsTotal),
    totalPrice: Number(req.body.totalPrice),
    shippingFee: Number(req.body.shippingFee),
    user: req.user._id,
  });

  const order = await newOrder.save();
  res.status(201).send({ message: "New Order Created", order });
});
orderRouter.get("/", isAuth, async (req, res, next) => {
  const items = await Orders.find({});
  if (items) {
    return res.status(201).send({ message: "New Order Created", items });
  }
  return res.status(404).send({ message: "Orders Not Found" });
});
orderRouter.get("/history", isAuth, async (req, res) => {
  const useId = req.user._id;
  const orders = await Orders.find({ user: useId });
  if (orders) {
    return res.send(orders);
  }
  return res.status(404).send({ message: "Orders Not Found" });
});
orderRouter.get("/history/:orderId", isAuth, async (req, res) => {
  const order = await Orders.findById(req.params.orderId);
  if (order) {
    return res.send(order);
  }
  return res.status(404).send({ message: "Orders Not Found" });
});
orderRouter.get("/:orderId", isAuth, async (req, res) => {
  const orderId = req.params.orderId;
  const orderNew = await Orders.findById(orderId);
  if (orderNew) {
    res.send(orderNew);
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
});
orderRouter.delete("/:orderId", isAuth, isAdmin, async (req, res, next) => {
  const OrderToDelete = await Orders.findById(req.params.orderId);
  if (OrderToDelete) {
    Orders.findByIdAndRemove(req.params.orderId, function (err) {
      if (err) {
        return res.status(404).send({ message: "There was an error" });
      }
    });
    const updatedOrders = await Orders.find({});
    return res.send({
      message: "Orders removed successfully",
      updatedOrders,
    });
  }
  return res.status(404).send({ message: "There was an error" });
});
orderRouter.put("/:orderId/pay", isAuth, async (req, res) => {
  console.log(req.body);
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
    for (let item of order.orderItems) {
      let product = await Products.findById(item.product);
      console.log(product, "this is old product");
      let productQuantity = Number(item.quantity);
      product.sold = product.sold + productQuantity;
      await product.save();
    }
    const updatedOrder = await order.save();

    res.send(updatedOrder);
  } else {
    res.status(404).send({ message: "Order Not Found" });
  }
});
export default orderRouter;
