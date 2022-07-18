import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <div className="w-full">
      <div className="CategoriesForYou border-b border-b-black w-full flex justify-center">
        <h1 className="font-fair text-3xl text-c-green mb-4">
          Categories For You
        </h1>
      </div>
      <div className="flex flex-col space-y-0 md:space-y-12 aos-init aos-animate mt-7">
        <div className="flex justify-between flex-col md:flex-row md:space-x-12 w-full px-4">
          <CategoriesCard
            catName="RINGS"
            catDesc=" The collection of bespoke rings fabricated with the rarest metals to
          exude elegance on the bearer."
          />
          <CategoriesCard
            catName="RINGS"
            catDesc=" The collection of bespoke rings fabricated with the rarest metals to
          exude elegance on the bearer."
          />
          <CategoriesCard
            catName="RINGS"
            catDesc=" The collection of bespoke rings fabricated with the rarest metals to
          exude elegance on the bearer."
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
