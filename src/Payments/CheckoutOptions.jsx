import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/Statecontext";
const CheckoutOptions = () => {
  const { Payments, cart } = useStateContext();
  const navigate = useNavigate();
  const handleCheckoutClick = () => {
    if (!cart.PaymentMethod) {
      return alert("failed choose a payment method");
    } else {
      navigate("/shipping");
    }
  };
  return (
    <div>
      <p className="text-sm p-2">Payment method</p>
      {Payments.map((gateway) => {
        if (gateway.isActive) {
          return <div key={gateway.name}>{gateway.option}</div>;
        }
      })}
      <span>
        <button
          onClick={() => handleCheckoutClick()}
          className="  text-lg flex my-4 justify-center items-center space-x-3 w-full text-gold border border-c-gold font-heading py-4 px-8  hover:bg-c-gold hover:text-c-green font-medium transition duration-300"
        >
          Continue
        </button>
      </span>
    </div>
  );
};

export default CheckoutOptions;
