import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useStateContext } from "../context/Statecontext";
import LongButtons from "./LongButtons";
import { useEffect } from "react";
const WelcomeHome = () => {
  const { themeShape } = useStateContext();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="px-8 md:px-24 py-16 md:py-48 flex flex-col md:flex-row justify-around h-3/5 w-full aos-init aos-animate">
      <div
        data-aos="fade-up"
        className="flex justify-center items-center  w-full md:w-auto"
      >
        <div
          className={`${themeShape} img-1 border border-black px-2 py-2 w-64 `}
        >
          <img
            className={`${themeShape} md:w-64 md:h-64 w-full h-60`}
            alt="Store-Stack"
            src="https://maplestore.netlify.app/static/media/welcomeImg3.b7bad03e37a1c9411ce5.jpg"
          />
        </div>
        <div
          className={`${themeShape} img-2 -ml-40 -mb-48 border w-64 border-black px-2 py-2 `}
        >
          <img
            className={`${themeShape} md:w-64 md:h-64 w-full h-60`}
            alt="Store-Stack"
            src="https://maplestore.netlify.app/static/media/heroimg.f09a970a8387059b2485.jpg"
          />
        </div>
      </div>
      <div data-aos="fade-up" className="Welcome text md:w-2/5">
        <div className="Welcome-Head py-2  flex justify-between items-center space-x-2 mt-36 md:mt-0">
          <div className="w-40 border border-black bg-pry-100"></div>
          <h4 className="font-fair text-black  text-pry-100 text-center md:text-justify font-heading text-base font-medium">
            Welcome to Maple stores
          </h4>
          <div className="w-40 border border-black bg-pry-100"></div>
        </div>
        <h2 className="text-black py-3 text-center md:text-left text-5xl ">
          Bespoke Collections
        </h2>
        <p className="text-c-green py-6 text-pry-100 text-base text-justify text-wrap">
          We offer you jewelleries that are made with the rarest precious stones
          obtainable on earth, every piece is custom made with your exact
          specification, our goal is to make you choose us as your number one
          online shopping destination with the premium services that we offer.
        </p>
        <LongButtons
          to={"/products"}
          text="Explore"
          css={
            "w-full mt-12 px-40 md:px-60 hover:bg-c-gold bg-c-green text-c-gold hover:text-black "
          }
        />
      </div>
    </div>
  );
};

export default WelcomeHome;
