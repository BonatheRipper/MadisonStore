import express from "express";

const gatewayRouter = express.Router();
gatewayRouter.get("/paypal", (req, res) => {
  console.log("Gatway was acces");
  res.send(process.env.PayPal_Client_Id || "sb");
});
export default gatewayRouter;
