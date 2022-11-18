import express from "express";
import Messages from "../models/messages.js";

import { isAdmin } from "../middleware/isAdmin.js";
import { isAuth } from "../middleware/isAuth.js";
const supportRouter = express.Router();
supportRouter.post("/message", async (req, res) => {
  const { email, name, text } = req.body;
  //   await Messages.deleteMany({});
  const messages = await Messages.find({});

  if (email && name && text) {
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      return res.status(401).send({ error: "Invalid email" });
    }
    try {
      const messenger = await Messages.findOne({ email: req.body.email });
      if (messenger) {
        messenger.messages.push({
          message: text,
          time: Date.now(),
          isAdmin: false,
        });
        await messenger.save();
        return res.send({
          message: "Your message was sent successfully",
          messages: messages,
        });
      } else {
        const newMessage = await Messages.create({
          email: email,
          name: name,
          messages: [{ message: text, time: Date.now(), isAdmin: false }],
        });
        if (newMessage) {
          return res.send({
            message: "Your message was sent successfully",
            messages: messages,
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
  return res.status(401).send({ error: "Your request have been submitted" });
});
supportRouter.post(
  "/message/admin/:messageId",
  isAuth,
  isAdmin,
  async (req, res) => {
    const { text } = req.body;
    if (text) {
      try {
        const chat = await Messages.findById(req.params.messageId);
        if (chat) {
          chat.messages.push({
            message: text,
            time: Date.now(),
            isAdmin: true,
          });
          await chat.save();
          return res.send({
            success: "Your message was sent successfully",
            chat,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }

    return res.status(401).send({ error: "There was an errror" });
  }
);
supportRouter.get("/message", async (req, res) => {
  const messages = await Messages.find({});
  if (messages) {
    return res.send(messages);
  }
  return res.status(401).send({ error: "Messages not found" });
});
supportRouter.get("/message/:messageId", async (req, res) => {
  const chat = await Messages.findById(req.params.messageId);
  if (chat) {
    return res.send(chat);
  }
  return res.status(401).send({ error: "Messages not found" });
});
export default supportRouter;
