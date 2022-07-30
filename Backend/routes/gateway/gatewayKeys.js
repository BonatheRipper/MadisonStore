import express from "express";

const gatewayRouter = express.Router();
gatewayRouter.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PayPal_Client_Id || "sb");
});
export default gatewayRouter;
