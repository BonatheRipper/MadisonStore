import React from "react";
import { useStateContext } from "../../../context/Statecontext";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiBell } from "react-icons/fi";

const AdminNavBar = ({ sidebar, setSidebar }) => {
  const { themeBG, themeShape, cart, user, handleLogout } = useStateContext();
  const [userDropdown, setUserDropdown] = useState(false);
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
      <div className="menu-icon  " onClick={() => setSidebar(!sidebar)}>
        <span className="mx-2 text-2xl">
          {sidebar ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-bars" aria-hidden="true"></i>
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
      <div className="menus hidden  flex-row justify-between  items-center ">
        <NavLink to="/about" className={navButtonsClass}>
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

        {user && (
          <NavLink to="/account" className={navButtonsClass}>
            Account
          </NavLink>
        )}
      </div>
      <div className="rightMenus flex flex-row justify-between  items-center">
        <NavLink to="/cart" className=" relative hover:text-white mx-2">
          {cart.cart.cartItems.length !== 0 && (
            <span
              className={`${
                themeShape ? themeShape : "rounded-sm"
              } bg-c-gold cart-badge`}
            >
              {cart.cart.cartItems.reduce((previousValue, currentValue) => {
                return previousValue + currentValue.quantity;
              }, 0)}
            </span>
          )}
          <FiBell />
          <span className="absolute bottom-1 right-2 text-base">1</span>
        </NavLink>
        <NavLink
          to="/wishlist"
          className="hidden md:block hover:text-white relative  mx-2"
        >
          <i className="fa fa-comments" aria-hidden="true"></i>
          <span className="absolute bottom-2 right-2 text-base ">1</span>
        </NavLink>

        {!user && (
          <>
            {" "}
            <NavLink
              to="/register"
              className={`${themeShape} hidden md:block hover:border-c-gold hover:border px-5 py-1 hover:bg-c-gold hover:text-black mx-2`}
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className={`${themeShape} hidden md:block border-c-gold border px-5 py-1 hover:bg-c-gold hover:text-black mx-2`}
            >
              Login
            </NavLink>
          </>
        )}

        {user && (
          <>
            <div className="relative w-full mx-2 flex flex-col">
              <i
                onClick={() => setUserDropdown(!userDropdown)}
                className="fa fa-user-circle-o"
                aria-hidden="true"
              ></i>
              {userDropdown && (
                <div
                  onMouseLeave={() => setUserDropdown(!userDropdown)}
                  className={`${themeBG} absolute w-52 border-2 border-c-gold md:w-64   right-0 top-4`}
                >
                  <div className="flex flex-col text-xs md:text-sm">
                    <div className="flex justify-start items-center p-1">
                      <span className="p-1 mr-1">
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </span>
                      <span className="hover:text-white">
                        <NavLink to="/account">{user.username} </NavLink>
                      </span>
                    </div>
                    <div className="flex justify-start items-center  p-1">
                      <span className="p-1 mr-1">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </span>
                      <span>{user.email}</span>
                    </div>
                    <div className="flex justify-start items-center  p-1 md:hidden">
                      <span className="p-1 mr-1">
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                      </span>
                      <span
                        className="hover:text-white cursor cursor-pointer "
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => handleLogout()}
              className={`${themeShape} hidden md:block border-c-gold border px-5 py-1 hover:bg-c-gold hover:text-black mx-2`}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default AdminNavBar;
