import React from "react";
import { useStateContext } from "../context/Statecontext";
import LongButtons from "./LongButtons";

const About = () => {
  const { themeBG, themeShape } = useStateContext();

  return (
    <div
      className={`bg-c-gold flex flex-col md:flex-row justify-between items-center w-full `}
    >
      <div
        className={`flex flex-col ${themeBG} py-32 px-8 md:px-24 space-y-8 w-full items-center md:w-3/5`}
      >
        <div className="flex justify-between items-center space-x-2">
          <div className="w-40 border border-c-gold bg-c-gold"></div>
          <h4 className="text-c-gold font-fair text-base font-medium">About</h4>
          <div className="w-40 border border-c-gold bg-c-gold"></div>
        </div>
        <h2 className="font-fair  text-c-gold md:text-5xl text-3xl text-center">
          About Maple Stores
        </h2>
        <p className="font-fair text-c-gold text-base text-justify leading-loose  md:block">
          We offer you jewelleries that are made with the rarest precious stones
          obtainable on earth, every piece is custom made with your exact
          specification. We offer you jewelleries that are made with the rarest
          precious stones obtainable on earth, every piece is custom made with
          your exact specification. We offer you jewelleries that are made with
          the rarest precious stones obtainable on earth, every piece is custom
          made with your exact specification. your exact specification. We offer
          you jewelleries that are made with the rarest precious stones
          obtainable on earth, every piece is custom made with your exact
          specification. your exact specification. We offer you jewelleries that
          are made with the rarest precious stones obtainable on earth, every
          piece is custom made with your exact specification.
        </p>
        <LongButtons
          to="collections"
          text="EXPLORE OUR COLLECTIONS"
          css={`text-c-gold  ${themeBG} hover:text-black border border-[#D2B6A2]  border-r-0  border-l-0  border-t-0 `}
        />
      </div>
      <div
        className={` ${themeBG}  ${themeShape} md:rounded-none px-6  py-6 border-2 border-[#D2B6A2] md:border-0 md:py-24 md:px-12 w-4/5 -mt-24 md:mt-0 md:w-2/5 md:-ml-72 z-10`}
      >
        <img
          src="https://maplestore.netlify.app/static/media/about.cc96bce04dcfb8aa290e.jpg"
          alt="About-pic"
          className={`${themeShape} md:border border-[#D2B6A2]`}
        />
      </div>
    </div>
  );
};

export default About;
