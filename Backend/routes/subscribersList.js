import express from "express";
import SubscribersList from "../models/subscription.js";
const subscribersRouter = express.Router();
subscribersRouter.get("/", async (req, res) => {
  try {
    const subscribers = await SubscribersList.find();
    res.send(subscribers);
  } catch (e) {
    res.status(400).send(e);
  }
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
      if (req.body.fromAdmin) {
        const subscribers = await SubscribersList.find();
        res.send(subscribers);
      } else {
        return res.send({ message: "You have successfully subscribed " });
      }
    }
  }
});

subscribersRouter.delete("/:subId", async (req, res) => {
  try {
    const subscriber = await SubscribersList.findByIdAndDelete(
      req.params.subId
    );
    if (subscriber) {
      const subscribers = await SubscribersList.find();
      res.send(subscribers);
    }
  } catch (e) {
    console.log(e);
  }
});
subscribersRouter.patch("/:subId", async (req, res) => {
  try {
    let subscriber = await SubscribersList.findById(req.params.subId);
    if (subscriber) {
      subscriber.email = req.body.subscriberToEdit.email;
      await subscriber.save();
      const subscribers = await SubscribersList.find();
      res.send(subscribers);
    }
  } catch (e) {
    console.log(e);
  }
});
export default subscribersRouter;
