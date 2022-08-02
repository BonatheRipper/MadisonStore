import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/Statecontext";
import LongButtons from "./LongButtons";

const Footer = () => {
  const { themeBG, categories } = useStateContext();

  return (
    <footer
      className={`${themeBG}  ${
        themeBG ? `text-c-gold  ` : ""
      }  py-6  mt-20 flex flex-col space-y-8 justify-between w-full `}
    >
      <div className="flex px-4 mx-0 w-full justify-between drop-shadow-lg py-4 md:px-12">
        <p className="font-medium text-xl md:text-2xl tracking-widest uppercase">
          MARPLE STORE
        </p>
        <div className="flex   flex-col md:flex-row justify-between items-center md:space-x-12">
          <h5 className="hidden md:block font-body uppercase tracking-widest font-medium text-base ">
            Follow Us
          </h5>
          <div className="flex justify-between  items-center space-x-4 md:space-x-6 ">
            <a
              href="/"
              className="hover:text-white md:text-3xl rounded-full transition duration-300"
            >
              <i className="fa fa-facebook-official " aria-hidden="true"></i>
            </a>
            <a
              href="/"
              className="hover:text-white md:text-3xl  transition duration-300"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="/"
              className="hover:text-white md:text-3xl  transition duration-300"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-8 md:px-24">
        <div className="flex flex-col md:flex-row  justify-center space-y-6 md:space-y-0 md:justify-between w-full">
          <div className="flex flex-col justify-between space-y-6 md:space-y-4">
            <h6 className=" md:tracking-widest  text-2xl md:text-xl ">Shop</h6>
            {categories.map((cat) => {
              return (
                <NavLink key={cat} to={`/category/${cat}`}>
                  {cat}
                </NavLink>
              );
            })}
          </div>
          <div className="flex flex-col justify-between space-y-6 md:space-y-4">
            <h6 className=" md:tracking-widest  text-2xl md:text-xl ">
              Quick Links
            </h6>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
          <form className="flex flex-col justify-between w-full md:w-3/5 mt-6 md:mt-0 space-y-8 md:space-y-0 ">
            <h6 className="tracking-widest   text-xl">
              Subscribe to our newsletter
            </h6>
            <p className="text-base text-center md:text-left">
              Signup to get the latest discount and information on our products
              & services
            </p>
            <div className="flex flex-col py">
              <label className="relative focus-within:text-c-gold block">
                <span className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  placeholder="Your email"
                  className={` ${themeBG} py-3 px-4 w-full bg-c-green tracking-widest left-12 block pl-14  placeholder-pry-50 bg-pry-100 border-b border-b-c-gold text-gold placeholder:text-c-gold  appearance-none transition duration-300 focus:outline-none focus:border-c-gold focus:ring-c-gold focus:ring-1 `}
                />
              </label>
            </div>
            <div className="flex flex-col py-6 items-center">
              <LongButtons
                to="/"
                text="Subscribe"
                css={`text-c-green border border-c-gold hover:text-black`}
              />
            </div>
          </form>
        </div>
      </div>
      <p className="md:px-24 text-center md:text-justify pt-8">
        Copyright © Maple Stores 2022
      </p>
    </footer>
  );
};

export default Footer;
