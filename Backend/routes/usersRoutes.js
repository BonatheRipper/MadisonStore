const express = require("express");
const bcrypt = require("bcryptjs");
const expressAsyncHanler = require("express-async-handler");
const Users = require("../models/users");
const { generateToken } = require("../utils/jwt");
const isAuth = require("../middleware/isAuth");
const isAdmin = require("../middleware/isAdmin");

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
  isAuth,
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
    const { email, password, username, confirmPassword } = req.body;
    if (email && password && username && confirmPassword) {
      if (password === confirmPassword) {
        const thisEmailExist = await Users.findOne({ email: email });
        const thisUsernameExist = await Users.findOne({ username: username });

        if (thisEmailExist) {
          return res
            .status(401)
            .send({ message: "user with that email already exist" });
        }
        if (thisUsernameExist) {
          return res
            .status(401)
            .send({ message: "user with that username already exist" });
        }
        const newUser = await Users.create({
          email: email,
          username: username,
          password: bcrypt.hashSync(password),
        });
        if (newUser) {
          return res.send({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser),
          });
        }
        return res.status(401).send({ message: "There was an error " });
      }
      return res.status(401).send({ message: "Password needs to match" });
    } else {
      return res.status(401).send({ message: "One or more fields  empty" });
    }
  })
);
usersRouter.get(
  "/admin/users",
  expressAsyncHanler(async (req, res, next) => {
    const users = await Users.find({}).select("-password").sort({ _id: -1 });
    if (users) {
      res.send(users);
    }
  })
);
usersRouter.post(
  "/admin/users",
  isAuth,
  isAdmin,
  expressAsyncHanler(async (req, res, next) => {
    const { email, password, username, checked } = req.body.userToAdd;
    if (email && password && username) {
      const thisEmailExist = await Users.findOne({ email: email });
      const thisUsernameExist = await Users.findOne({ username: username });

      if (thisEmailExist) {
        return res
          .status(401)
          .send({ message: "user with that email already exist" });
      }
      if (thisUsernameExist) {
        return res
          .status(401)
          .send({ message: "user with that username already exist" });
      }
      const newUser = await Users.create({
        email: email,
        username: username,
        isAdmin: checked,
        password: bcrypt.hashSync(password),
      });
      if (newUser) {
        const users = await Users.find({})
          .select("-password")
          .sort({ _id: -1 });
        if (users) {
          return res.send(users);
        }
      }
      return res.status(401).send({ message: "There was an error " });
    } else {
      return res.status(401).send({ message: "One or more fields  empty" });
    }
  })
);

usersRouter.put(
  "/admin/users",
  isAuth,
  isAdmin,
  expressAsyncHanler(async (req, res, next) => {
    const { email, username, isAdmin, password, _id } = req.body.userToEdit;
    const user = await Users.findById(_id);

    if (email && username) {
      const thisEmailExist = await Users.findOne({ email: email });
      const thisUsernameExist = await Users.findOne({ username: username });

      if (thisEmailExist && thisEmailExist.email !== user.email) {
        return res
          .status(401)
          .send({ message: "user with that email already exist" });
      }
      if (thisUsernameExist && thisUsernameExist.username !== user.username) {
        return res
          .status(401)
          .send({ message: "user with that username already exist" });
      }

      if (user) {
        user.email = email;
        user.username = username;
        user.isAdmin = isAdmin;
        if (password !== undefined && password.length) {
          user.password = bcrypt.hashSync(password);
        }
        const updatedUser = await user.save();
        if (updatedUser) {
          const users = await Users.find({})
            .select("-password")
            .sort({ _id: -1 });

          if (users) {
            return res.send(users);
          }
        } else {
          return res.status(401).send({ message: "There was an error " });
        }
      }

      return res.status(401).send({ message: "There was an error " });
    } else {
      return res.status(401).send({ message: "One or more fields  empty" });
    }
  })
);
usersRouter.delete(
  "/admin/users/:userId",
  isAuth,
  isAdmin,
  expressAsyncHanler(async (req, res, next) => {
    const user = await Users.findByIdAndDelete(req.params.userId);
    if (user) {
      const users = await Users.find({}).select("-password").sort({ _id: -1 });
      if (users) {
        res.send(users);
      }
    }
  })
);
module.exports = usersRouter;
