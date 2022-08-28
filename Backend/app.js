import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";
import reviewRouter from "./routes/reviewRoute.js";
import pagesRouter from "./routes/pagesRouter.js";

import orderRouter from "./routes/orderRouter.js";
import gatewayRouterDB from "./routes/gatewayRouter.js";

import usersRouter from "./routes/usersRoutes.js";
import supportRouter from "./routes/supportRouter.js";
import settingsRouter from "./routes/settingsRouter.js";

import subscribersRouter from "./routes/subscribersList.js";
import bodyParser from "body-parser";
import gatewayRouter from "./routes/gateway/gatewayKeys.js";
const port = 500;
const app = express();
// Dotenv comfig.
dotenv.config();
//Connecting to  database.
mongoose.connect(
  "mongodb+srv://bona9ja:11112222*++BoNa@cluster0.0gohh.mongodb.net/EcomShop?retryWrites=true&w=majority",
  (err) => {
    if (err) throw err;
    console.log("connected to Mongoose(MongoDb)");
  }
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/api/users", usersRouter);
app.use("/api/orders", orderRouter);
app.use("/api/products", productRouter);
app.use("/api/keys", gatewayRouter);
app.use("/api/review", reviewRouter);
app.use("/api/subscription", subscribersRouter);
app.use("/api/support", supportRouter);
app.use("/api/pages", pagesRouter);
app.use("/api/gateway", gatewayRouterDB);
app.use("/api/settings", settingsRouter);

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "../build")));
// app.get("*", (req, res) =>
//   res.sendfile(path.j;

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => console.log("Server connected to port: " + port));
