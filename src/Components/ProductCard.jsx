import React from "react";
import LongButtons from "./LongButtons";
import { useStateContext } from "../context/Statecontext";
import { NavLink } from "react-router-dom";

const ProductCard = ({ image, catName, pName, price }) => {
  const { themeBG, themeShape } = useStateContext();

  return (
    <div
      className={`${
        themeShape ? "rounded-xl " : ""
      }flex flex-col it justify-between space-y-8  w-full md:w-96  mb-24 border border-c-gold p-4 `}
    >
      <div className="flex items-center justify-center">
        <div
          className={` h-64 ${
            themeShape ? `${themeShape} w-64` : "w-full"
          } border-8 border-c-gold  p-2  flex justify-center items-center`}
        >
          <img src={image} alt="Product-Img" className="W-52 h-52 " />
        </div>
      </div>

      <div className="flex justify-between">
        <p className="tracking-widest font-medium hover:cursor-pointer hover:font-extrabold">
          <NavLink to={catName}>{catName}</NavLink>
        </p>
        <span className="cursor-pointer transition duration-500">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </span>
      </div>
      <div className="flex justify-between">
        <p className=" text-lg hover:cursor-pointer hover:font-extrabold transition duration-5000">
          <NavLink to={pName}>{pName}</NavLink>
        </p>
        <p className="tracking-widest font-bold">{price}</p>
      </div>
      <div className="flex items-center justify-center">
        <LongButtons
          to=""
          text="Add to Cart"
          css={`border border-c-gold ${themeBG} hover:text-c-green hover:bg-c-gold`}
        />
      </div>
    </div>
  );
};

export default ProductCard;
