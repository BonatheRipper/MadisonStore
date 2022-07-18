import React from "react";
import { useStateContext } from "../context/Statecontext";
import LongButtons from "./LongButtons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const CategoriesCard = ({ catName, catDesc }) => {
  const { themeBG, themeBorder } = useStateContext();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const CardClass = () => {
    return `${themeBG} ${themeBorder} rounded-b-lg flex flex-col md:w-2/5 w-full space-y-2 mb-6  px-12  md:px-8 py-6`;
  };
  return (
    <div data-aos="fade-up" className={CardClass()}>
      <div className="flex flex-col  w-full space-y-2 mb-6">
        <img
          src="https://maplestore.netlify.app/static/media/rings.c75e207079315a9e5dbd.jpg"
          alt="Categories"
          className={`h-64 w-ful ${themeBorder}`}
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <p className="font-heading uppercase text-gold text-xl text-center tracking-widest">
          {catName}
        </p>
        <p className="font-heading text-gold text-base text-center">
          {catDesc}
        </p>
        <LongButtons
          to="/collections"
          text="BROWSE COLLECTIONS"
          css={`
            ${themeBG}
            text-cc-gold
            hover:text-black
            border
            border-[#D2B6A2]
          `}
        />
      </div>
    </div>
  );
};

export default CategoriesCard;
