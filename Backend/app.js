const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRouter = require("./routes/productRoutes");
const reviewRouter = require("./routes/reviewRoute");
const pagesRouter = require("./routes/pagesRouter.js");

const orderRouter = require("./routes/orderRouter");
const gatewayRouterDB = require("./routes/gatewayRouter");

const usersRouter = require("./routes/usersRoutes");
const supportRouter = require("./routes/supportRouter");
const settingsRouter = require("./routes/settingsRouter");

const subscribersRouter = require("./routes/subscribersList");
const bodyParser = require("body-parser");
const gatewayRouter = require("./routes/gateway/gatewayKeys");
const Products = require("./models/products");
const cors = require("cors");

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
// await Products.remove();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("https://madison.bona9ja.online/api/users", usersRouter);
app.use("https://madison.bona9ja.online/api/orders", orderRouter);
app.use("https://madison.bona9ja.online/api/products", productRouter);
app.use("https://madison.bona9ja.online/api/keys", gatewayRouter);
app.use("https://madison.bona9ja.online/api/review", reviewRouter);
app.use("https://madison.bona9ja.online/api/subscription", subscribersRouter);
app.use("https://madison.bona9ja.online/api/support", supportRouter);
app.use("https://madison.bona9ja.online/api/pages", pagesRouter);
app.use("https://madison.bona9ja.online/api/gateway", gatewayRouterDB);
app.use("https://madison.bona9ja.online/api/settings", settingsRouter);

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "../build")));
// app.get("*", (req, res) =>
//   res.sendfile(path.j;

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => console.log(`Server connected to port:   ${port}`));

// "type": "module"
