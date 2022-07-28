import express from "express";
import bcrypt from "bcryptjs";
import expressAsyncHanler from "express-async-handler";
import Users from "../models/users.js";
import { generateToken, isAuth } from "../utils/jwt.js";
const usersRouter = express.Router();
usersRouter.post(
  "/login",
  expressAsyncHanler(async (req, res, next) => {
    const user = await Users.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        return res.send({
          _id: user._id,
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
      }
      return res.status(401).send({ message: "incorrect password" });
    }
    return res.status(401).send({ message: "invalid  email or password" });
  })
);
usersRouter.put(
  "/profile/:id",
  expressAsyncHanler(async (req, res, next) => {
    const { username, password, email } = req.body;
    const user = await Users.findById(req.params.id);
    if (user) {
      user.email = email;
      user.username = username;
      if (password) {
        user.password = bcrypt.hashSync(password, 8);
      }
      const updatedUser = await user.save();
      return res.send({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    }
    return res.status(404).send({ message: "User not found" });
  })
);
usersRouter.post(
  "/register",
  expressAsyncHanler(async (req, res, next) => {
    // await Users.deleteMany({});
    const { email, password, username, confirmPassword } = req.body;
    if (email && password && username && confirmPassword) {
      if (password === confirmPassword) {
        const user = await Users.findOne({ email: email });
        if (user) {
          return console.log(user, "found");
        }
        const newUser = await Users.create({
          email: email,
          username: username,
          password: bcrypt.hashSync(password),
        });
        if (newUser) {
          return res.send({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser),
          });
        }
        return res.status(401).send({ message: "There was an error" });
      }
      return res.status(401).send({ message: "Password needs to match" });
    } else {
      console.log("one missing");
    }
  })
);
export default usersRouter;
