import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRouter.js";
import usersRouter from "./routes/usersRoutes.js";
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", usersRouter);
app.use("/api/orders", orderRouter);
app.use("/api/products", productRouter);
app.get("/api/keys", gatewayRouter);
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "../build")));
// app.get("*", (req, res) =>
//   res.sendfile(path.j;

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => console.log("Server connected to port: " + port));
