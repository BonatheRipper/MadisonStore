import express from "express";
import Messages from "../models/messages.js";
const supportRouter = express.Router();
supportRouter.post("/message", async (req, res) => {
  const { email, name, text } = req.body;
  if (email && name && text) {
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
      return res.status(401).send({ error: "Invalid email" });
    }

    const messenger = await Messages.find({ email: req.body.email });
    if (messenger) {
    }
  }
  return res.status(401).send({ error: "Your request have been submitted" });
});
export default supportRouter;
