import express from "express";

const gatewayRouter = express.Router();
gatewayRouter.get("/paypal", (req, res) => {
  res.send(process.env.PayPal_Client_Id || "sb");
});
gatewayRouter.get("/paystack", (req, res) => {
  res.send(process.env.PayStack_PK || "sb");
});
gatewayRouter.get("/flutterwave", (req, res) => {
  console.log(process.env.Flutterwave_PK);
  res.send(process.env.Flutterwave_PK || "sb");
});
export default gatewayRouter;
