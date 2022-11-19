const Users = require("../models/users.js");

const isAdmin = async (req, res, next) => {
  const user = await Users.findById(req.user._id);
  if (user.isAdmin === true) {
    next();
  } else {
    return res.status(401).send({ message: "Only admins can do that" });
  }
};
module.exports = isAdmin;
