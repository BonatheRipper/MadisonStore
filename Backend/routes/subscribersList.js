import express from "express";
import SubscribersList from "../models/subscription.js";
const subscribersRouter = express.Router();
subscribersRouter.get("/", (req, res) => {
  console.log("get sub");
});
subscribersRouter.post("/", async (req, res) => {
  const emailToCreate = req.body.emailPseudo.toLowerCase();
  if (emailToCreate) {
    const emailExist = await SubscribersList.findOne({
      email: emailToCreate,
    });
    if (emailExist) {
      return res.status(404).send({ error: "You already Subscribed" });
    }
    const newEmailSub = await SubscribersList.create({
      email: emailToCreate,
    });
    if (newEmailSub) {
      res.send({ message: "You have successfully subscribed " });
    }
  }
});

export default subscribersRouter;
