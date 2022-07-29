import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/Statecontext";
const CheckoutOptions = () => {
  const { Payments } = useStateContext();
  return (
    <div>
      {Payments.map((gateway) => {
        return <div key={gateway.name}>{gateway.option}</div>;
      })}
      <span>
        <NavLink
          to="/shipping"
          className="  text-lg flex my-4 justify-center items-center space-x-3 w-full text-gold border border-c-gold font-heading py-4 px-8  hover:bg-c-gold hover:text-c-green font-medium transition duration-300"
        >
          Checkout
        </NavLink>
      </span>
    </div>
  );
};

export default CheckoutOptions;
