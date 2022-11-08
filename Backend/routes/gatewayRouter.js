import express from "express";
import Gateway from "../models/gateways.js";
import { isAdmin } from "../middleware/isAdmin.js";
import { isAuth } from "../middleware/isAuth.js";
const gatewayRouterDB = express.Router();
gatewayRouterDB.get("/", async (req, res) => {
  try {
    const gatewayItems = await Gateway.findById("630a6a60afd04f42315cee76");
    if (gatewayItems) {
      const Paypal = gatewayItems.Paypal.toObject();
      delete Paypal.liveKey;
      const Flutterwave = gatewayItems.Flutterwave.toObject();
      delete Flutterwave.liveKey;
      const Paystack = gatewayItems.Paystack.toObject();
      delete Paypal.liveKey;
      return res.send([Paypal, Flutterwave, Paystack]);
    }
    return res.status(401).send("There was an error");
  } catch (e) {
    console.log(e);
  }
});
gatewayRouterDB.get("/:gatewayTitle", isAuth, async (req, res) => {
  const gatewayTitle = req.params.gatewayTitle.toLowerCase();
  const gatewayItems = await Gateway.findById("630a6a60afd04f42315cee76");

  if (gatewayTitle) {
    if (gatewayTitle === "paypal") {
      return res.send(gatewayItems.Paypal);
    }
    if (gatewayTitle === "flutterwave") {
      return res.send(gatewayItems.Flutterwave);
    }
    if (gatewayTitle === "paystack") {
      return res.send(gatewayItems.Paystack);
    }
  } else {
    return res.status(401).send("There was an error");
  }
});
gatewayRouterDB.post("/:gatewayTitle", isAuth, isAdmin, async (req, res) => {
  const gatewayTitle = req.params.gatewayTitle.toLowerCase();
  const gatewayItems = await Gateway.findById("630a6a60afd04f42315cee76");
  if (gatewayTitle) {
    try {
      if (gatewayTitle === "paypal") {
        gatewayItems.Paypal = req.body.Paypal;
        await gatewayItems.save();
        return res.send(gatewayItems.Paypal);
      }
      if (gatewayTitle === "flutterwave") {
        gatewayItems.Flutterwave = req.body.Flutterwave;
        await gatewayItems.save();
        return res.send(gatewayItems.Flutterwave);
      }
      if (gatewayTitle === "paystack") {
        gatewayItems.Paystack = req.body.Paystack;
        await gatewayItems.save();
        return res.send(gatewayItems.Paystack);
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    return res.status(401).send("There was an error");
  }
});
export default gatewayRouterDB;
