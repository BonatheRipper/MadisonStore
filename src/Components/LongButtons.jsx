import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/Statecontext";

const LongButtons = ({ to, css, text }) => {
  const { themeShape } = useStateContext();

  return (
    <NavLink
      to={to}
      className={`${themeShape}  bg-c-gold w-full md:w-10/12 text-black px-3 py-3 text-center hover:bg-white  transition duration-1000 ${css}`}
    >
      {text}
    </NavLink>
  );
};

export default LongButtons;
