import React, { useEffect, useReducer, useState } from "react";
import { useStateContext } from "../context/Statecontext";
import axios from "axios";
import { useParams } from "react-router-dom";
import PaymentToDisplay from "./services/PaymentToDisplay";
const PayForOrder = () => {
  const { user } = useStateContext();
  const [paymentType, setPaymentType] = useState(false);
  const { orderId } = useParams();
  useEffect(() => {
    const GetpaymentType = async () => {
      try {
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${user.token}` },
        });
        setPaymentType(data.PaymentMethod);
      } catch (e) {
        alert(e);
      }
    };
    GetpaymentType();
  }, [setPaymentType, orderId, user]);

  return <>{paymentType && <PaymentToDisplay paymentType={paymentType} />}</>;
};

export default PayForOrder;
