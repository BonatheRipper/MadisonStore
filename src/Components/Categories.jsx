import React from "react";
import CategoriesCard from "./CategoriesCard";
import CatWatch from "../images/CatWatch.png";
import CatNecklace from "../images/CatNecklace.png";
import CatShoe from "../images/CatShoe.png";
import CatRing from "../images/CatRing.png";
import CatShirt from "../images/CatShirt.png";
import CatBag from "../images/CatBag.png";
import CatEarrings from "../images/CatEarrings.png";

import { useStateContext } from "../context/Statecontext";
import { useEffect } from "react";
import LoadingScreen from "../Screens/LoadingScreen";
import { GetCategories } from "../services/GetCategories";
import Aos from "aos";
const Categories = () => {
  const { categories, setCats } = useStateContext();
  useEffect(() => {
    Aos.init({ duration: 500 });
    GetCategories(setCats);
  }, []);
  function catImage(name) {
    if (name.toLowerCase() === "bags") {
      return CatBag;
    }
    if (name.toLowerCase() === "watches") {
      return CatWatch;
    }
    if (name.toLowerCase() === "necklaces") {
      return CatNecklace;
    }
    if (name.toLowerCase() === "earrings") {
      return CatEarrings;
    }
    if (name.toLowerCase() === "shoes") {
      return CatShoe;
    }
    if (name.toLowerCase() === "rings") {
      return CatRing;
    }
    if (name.toLowerCase() === "shirts") {
      return CatShirt;
    }
  }
  return (
    <div className="relative">
      {!categories.length ? (
        <LoadingScreen />
      ) : (
        <div data-aos="fade-up" className="w-full py-6 my-14">
          <div className="CategoriesForYou border-b border-b-black w-full flex justify-center">
            <h1 className="font-fair text-3xl text-c-green mb-4">
              Categories For You
            </h1>
          </div>
          <div className="flex flex-col space-y-0 md:space-y-12 aos-init aos-animate mt-7">
            <div className="flex justify-between flex-col md:flex-row md:space-x-12 w-full px-4">
              {categories
                .sort()
                .slice(0, 3)
                .map((cat) => {
                  return (
                    <CategoriesCard
                      catName={cat}
                      to={`/shop/${cat}`}
                      image={catImage(cat)}
                      catDesc=" The collection of bespoke rings fabricated with the rarest metals to
            exude elegance on the bearer."
                    />
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
