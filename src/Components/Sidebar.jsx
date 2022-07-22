import React from "react";
import { NavLink } from "react-router-dom";

import { useStateContext } from "../context/Statecontext";
const Sidebar = () => {
  const { sidebar, themeBG } = useStateContext();
  const sidebarButtonsClass = () => {
    return `my-5 py-2 px-40 hover:text-white ${
      themeBG ? `border-[#D2B6A2] border-b hover:border-x rounded-xl` : ""
    }`;
  };
  return (
    <aside
      id="sideBar"
      className={
        sidebar
          ? `${
              themeBG ? `${themeBG} text-c-gold ` : ""
            }  flex w-full h-screen z-40  fixed top-0 transition duration-500 justify-center md:hidden`
          : "w-0 bg-white "
      }
    >
      {sidebar && (
        <div className="flex  flex-col items-center mt-20 -full ">
          <NavLink to="/account" className={sidebarButtonsClass}>
            Account
          </NavLink>
          <NavLink to="/abbout" className={sidebarButtonsClass}>
            About
          </NavLink>
          <NavLink to="/categories" className={sidebarButtonsClass}>
            Categories
          </NavLink>
          <NavLink to="/contact" className={sidebarButtonsClass}>
            Contact
          </NavLink>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
