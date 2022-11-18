import jwt from "jsonwebtoken";
export const isAuth = (req, res, next) => {
  const authorization =
    req.headers.authorization || req.body.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); //BEARER XXXXXXX
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Invalid request" });
      } else {
        req.user = decode;

        next();
      }
    });
  } else {
    res.status(401).send({
      message: "No token or  reserved for admins!",
    });
  }
};
