import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/Statecontext";
const Navbar = (props) => {
  const { themeBG, sidebar, setSidebar, themeShape } = useStateContext();
  const navButtonsClass = () => {
    return `mx-2 hover:text-white transition duration-500`;
  };
  return (
    <nav
      className={`
      ${
        themeBG ? `${themeBG} text-c-gold  ` : ""
      } drop-shadow-xl top-0 right-0 left-0 z-50 w-full my-0 fixed  p-3 mx-0 flex flex-row items-center justify-between`}
    >
      <div
        className="menu-icon  md:hidden"
        onClick={() => setSidebar(!sidebar)}
      >
        <span className="mx-2 text-2xl">
          {sidebar ? (
            <i class="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-bars" aria-hidden="true"></i>
          )}
        </span>
      </div>
      <div className="logo md:ml-20 flex flex-row items-center ">
        <img
          src="https://maplestore.netlify.app/static/media/logo.b95d75cbc72894bc8035.png"
          alt="Logo"
          className="w-8 h-8 mx-2"
        />
        <NavLink to="/" className="mx-2">
          <h2 className="">MarpleStore</h2>
        </NavLink>
      </div>
      <div className="menus md:flex flex-row justify-between  items-center hidden">
        <NavLink to="about" className={navButtonsClass}>
          About
        </NavLink>
        <NavLink to="/categories" className={navButtonsClass}>
          Categories
        </NavLink>
        <NavLink to="/contact" className={navButtonsClass}>
          Contact
        </NavLink>
        <NavLink to="/shop" className={navButtonsClass}>
          Shop
        </NavLink>
        <NavLink to="/account" className={navButtonsClass}>
          Account
        </NavLink>
      </div>
      <div className="rightMenus flex flex-row justify-between  items-center">
        <NavLink to="cart" className=" relative hover:text-white mx-2">
          <span
            className={`${
              themeShape ? themeShape : "rounded-sm"
            } bg-c-gold cart-badge`}
          >
            1
          </span>
          <i class="fa fa-shopping-basket" aria-hidden="true"></i>
        </NavLink>
        <NavLink
          to="wishlist"
          className="hidden md:block hover:text-white  mx-2"
        >
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </NavLink>
        <NavLink
          to="login"
          className={`${themeShape} hidden md:block border-c-gold border px-5 py-1 hover:bg-c-gold hover:text-black mx-2`}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
