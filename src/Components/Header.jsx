import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/Statecontext";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LongButtons from "./LongButtons";
const Header = () => {
  const { themeBG, themeShape } = useStateContext();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <header className="w-full">
      <div
        className={`
      ${themeBG ? `${themeBG} text-c-gold` : ""}`}
      >
        <div className="font-fair bg-pry-100 md:py-36 md:pt-40 py-24 px-8 md:px-24 h-4/5 items-center flex  flex-col md:flex-row justify-between">
          <div className=" headerTex  flex flex-col justify-between h-5/6 leading-loose space-y-8 md:space-y-12 aos-init aos-animate md:w-8/12">
            <h1
              data-aos="fade-down"
              className="font-fair w-full text-center text-3xl  md:text-6xl text-gold uppercase  md:text-left md:block"
            >
              LUXURY MADE FOR YOU{" "}
              <span className="font-fair block md:inline mt-3">&</span>
              <span className="font-fair block mt-3"> INPIRED BY YOU</span>
            </h1>
            <p className="text-gold md:text-sm md:w-8/12 block text-xs md:text-left text-center leading-loose">
              Stylish accesories that will set you apart from the crowd,
              durability and uniqueness is the mantra we live in
            </p>
            <LongButtons to={"/shop"} css="hidden md:block" text="SHOP" />
          </div>
          <div className="Header-img  mt-6 md:mt-0 px-2 md:px-4 w-full md:w-96 h-3/5  flex flex-col items-center">
            <div
              className={`rounded-t-full  md:w-80 w-64 py-8 border border-c-gold flex justify-center items-center  ${themeShape} `}
            >
              <img
                src="https://maplestore.netlify.app/static/media/headerimg.50dac08defd1a145b7c6.jpg"
                alt="Header-img"
                className="rounded-t-full h-2/5 w-4/5 rounded-b-full hover:w-10/12 duration-500 transition-all"
              />
            </div>

            <LongButtons
              to={"/shop"}
              css="bg-c-gold mt-6 hover:bg-white md:hidden"
              text="SHOP"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
