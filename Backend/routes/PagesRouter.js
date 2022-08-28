import express from "express";
import Pages from "../models/pages.js";
const pagesRouter = express.Router();
pagesRouter.get("/:pageName", async (req, res) => {
  const pageName = req.params.pageName.toLocaleLowerCase();
  try {
    const pageItems = await Pages.findById("63019459ff4e92918aed2728");
    if (pageItems) {
      if (pageName === "about") {
        return res.send(pageItems.about);
      } else if (pageName === "home") {
        return res.send(pageItems.home);
      } else if (pageName === "subscription") {
        return res.send(pageItems.subscription);
      } else if (pageName === "contact") {
        return res.send(pageItems.contact);
      } else if (pageName === "homeheader") {
        return res.send(pageItems.homeHeader);
      } else {
        return res.status(401).send("There was an error");
      }
    }
  } catch (e) {
    console.log(e);
    return res.status(401).send("There was an error");
  }
});
pagesRouter.post("/:pageName", async (req, res) => {
  const pageName = req.params.pageName.toLocaleLowerCase();
  try {
    const pageItems = await Pages.findById("63019459ff4e92918aed2728");

    //If Page === about
    if (pageName === "about") {
      pageItems.about = req.body.about;
      await pageItems.save();
      return res.send(pageItems.about);
    }
    //If Page === Home
    else if (pageName === "home") {
      pageItems.home = req.body.home;
      await pageItems.save();
      return res.send(pageItems.home);
    } //If Page === Subscription
    else if (pageName === "subscription") {
      pageItems.subscription = req.body.subscription;
      await pageItems.save();
      return res.send(pageItems.subscription);
    } //If Page === contact
    else if (pageName === "contact") {
      pageItems.contact = req.body.contact;
      await pageItems.save();
      return res.send(pageItems.contact);
    } //If Page === homeheader
    else if (pageName === "homeheader") {
      pageItems.homeHeader = req.body.homeHeader;
      await pageItems.save();
      return res.send(pageItems.homeHeader);
    } //Else display an error
    else {
      return res.status(401).send("There was an error");
    }
  } catch (e) {
    console.log(e);
    return res.status(401).send("There was an error");
  }
});
export default pagesRouter;
