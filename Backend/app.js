import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";

// import seedRouter from "./routes/seedRouter.js";
// import productRouter from "./routes/productRoutes.js";
// import ordersRouter from "./routes/ordersRouter.js";
import usersRouter from "./routes/usersRoutes.js";
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
// app.use(express.urlencoded({ extended: true }));
// app.use("/api/seed", seedRouter);
app.use("/api/users", usersRouter);
// app.use("/api/orders", ordersRouter);
app.use("/api/products", productRouter);
// app.get("/api/keys/paypal", (req, res) => {
//   res.send(process.env.PayPal_Client_Id || "sb");
// });
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "../build")));
// app.get("*", (req, res) =>
//   res.sendfile(path.j;

const randImg = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA1OBfNdgXjuP-63TAZSyM6vw_8sVRbU8J67mUjeiHnR-ovUT9gSp0llLBQRHaJuIxdICkduk0lOOT4s7PqjJ0wZnwnAtL_qdErzJizXihahL24scC7SjiGtQXyQ8aQWSycSYRXh9B1_n0LV6VLfd3FWgBcSjHOq91YM2UA6pmMhe-aTkzhB0/s320/Untitled%20design%20(1).png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXEgnfnAonOkG2EnZC0QzxoGFQVIuNCwA1l-00JXw6aWj_2d4saVRpQdlH_yV2fCyzT8A5YnS2Yi7pDZ-Xaqj-tPWCvuTVf3ke7irYqhd76KzuCLO46yjyr0G-hJ3et7m9VxT67veGsStqAI7CYqIjoetlxUK9fKnMUCMA9yMiIY6fMwUh4Pc/s320/Untitled%20design%20(2).png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2upA4dqqswp4vIYA_AJKsfW4145uGJwZVRfKMSEcSAKdt94Ta81TZjgYbexLjq4fCbXTEqEj4EMm3-DtD2SuH8jWcmqrghvLIzL9T1G4rI93ASf228xOSR06WkuvakGFTyFpxyeBj1WJavMCBade8WLvwdcNIDFtJS9jrs2QO2ymA9jJfDzw/s320/Untitled%20design%20(3).png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisHkNySsGKVw7ECChHaHlcJ0S77SP27ndmJkrOX8ZBgGAGoirA23agf81vic2TeKWU-9pkrCIRMA9xTUFsUuzOwt32xrL7p8WWT-wwbqr5vkoLc_jfyg-4kr0oAJ46xBNVOiDyU52jmSseF3ofMN1zIeDAjIqKKr7fs9d_g7CfhrulzDczxz0/s320/Untitled%20design%20(4).png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLtbdw6Dk2Lvw7yvFWIXVzXbAhysDrbtHQz8m676_VWJDqCL_1BcmfxW7pTF-JVdKVpKu5J-iUtV_EZh82L_3BJOe5eivzBwKpb8wDObK0NNzK5qlCSZpAdVgWxVd75AwTE_ao5cg5ECdZg07adK-CaODryKiCR8lrlB9e4Iwtx1m8bJvCbUQ/s320/Untitled%20design%20(5).png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHv60amCIS_Kj6xQ8Sbzz_VrlRbcQowk6Ri7F_HoDFjLPw9Y7TtBJDSqD5FelrUXZzKHBa7TBoNKZ8616NqBq2EkS5As7jJItjswTr-P0TTTSKPYxpwPGELvk0V2tGk5bC8xN5cq83JnpZlzI2rwiNfQ1WaLHLDBDkOgQ_xMAnPvzE2IXNiPA/s320/Untitled%20design%20(6).png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLcdZQB-ib1OWpzOlSPPkuGjl8PHChm45_nUgfBfVXm2plvbr_XPPnElKXPoi4vPRjS5flM2z0amrFRmhjE4ELolIWt7kVgxo5-S4dnu5lntejIn0M300UigiCponnyaBWTHndJ27pGkIZ9HfpQc2YrRr8KYL0w1rIsJcSpep--DJShn6rKps/s320/Untitled%20design%20(7).png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgn1p1qL-52B6ptLosrPRdMTLspm9jxk9JCY6lG0KnPZukpl9agwkUrVPCFOvpMRWc3JYF6ARjqup3XdGTYp2xDSFIF7ICuvesbFIbn741DU3HmHKjtjpB7lx0CwnfAnoanryK-LvchHiSpq4d1bmGjL7xG2HUHXUshzYXJ3ELJsy__n8TjWG0/s320/Untitled%20design%20(8).png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjz_cihqEERupsiQ6qHwb3x9knLQVFJnsUmouS0Ipjas0khjTohh1Xi_Iashpj1pXmbbkJq_O2kcFLbOkJ0k4VrtioLVQF1NeKc2S0R9WCNyDztp_k_ZKeYpx0iTixNIIxVw1VAj8ggVFj3aACuJmRzx1ZLUtmvVmsMFO6uXH5oQNGze7DdSgM/s320/Untitled%20design.png",
];

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => console.log("Server connected to port: " + port));
