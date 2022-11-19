const express = require("express");

const gatewayRouter = express.Router();
gatewayRouter.get("/paypal", (req, res) => {
  res.send(
    "AcAVXJvNxM5cTOIQYnvy43l2V24i8D2ge28HhkR7esD1vJ318HPYyaPB2FGiUdxShjfqDNdVR-dMr5s4" ||
      "sb"
  );
});
gatewayRouter.get("/paystack", (req, res) => {
  res.send("pk_test_3f37de2c084b51042eef9bb9aec6394c111abe20" || "sb");
});
gatewayRouter.get("/flutterwave", (req, res) => {
  res.send("FLWPUBK_TEST-f1354d054c3540ec3063e0a6970babaf-X" || "sb");
});
module.exports = gatewayRouter;
