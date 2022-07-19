import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/Statecontext";

const ProductsMenuBtn = ({ to, text }) => {
  const { themeShape } = useStateContext();

  return (
    <NavLink
      to={to}
      className={` ${themeShape} px-10 py-3 hover:bg-c-gold hover:text-black  tracking-widest capitalize w-2/5 m-2 md:m-0 border-c-gold border md:border-0 flex justify-center md:w-full    font-body p-2  md:py-4 md:px-8   font-medium `}
    >
      {text}
    </NavLink>
  );
};

export default ProductsMenuBtn;
