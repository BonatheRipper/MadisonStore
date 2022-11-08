export const isAdmin = async (req, res, next) => {
  console.log(req.user);
  if (req.user.isAdmin) {
    next();
  } else {
    return res.status(401).send({ message: "Only admins can do that" });
  }
};
