import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../../context/Statecontext";

export const LeftSideBarBtn = ({ text, icon, link }) => {
  const { themeBG } = useStateContext();
  return (
    <li
      className={`border-b border-c-gold hover:animate-pulse mb-4 w-full p-2 text-base md:text-lg flex justify-start items-center`}
    >
      <span className="mr-3">{icon}</span>
      <span>
        <NavLink to={link}>{text} </NavLink>
      </span>
    </li>
  );
};
