import React from "react";
import Paypal from "../gateways/Paypal";
import Paystack from "../gateways/Paystack";

const PaymentToDisplay = ({ paymentType }) => {
  if (paymentType) {
    if (paymentType === "PAYPAL") {
      return <Paypal />;
    } else if (paymentType === "PAYSTACK") {
      return <Paystack />;
    }
  }
};

export default PaymentToDisplay;
