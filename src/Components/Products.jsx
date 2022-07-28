import React from "react";
import { useStateContext } from "../context/Statecontext";
import ProductCard from "./ProductCard";
import ProductsMenuBtn from "./ProductsMenuBtn";
import { useState } from "react";
const Products = () => {
  const { themeBG, products, handleAddProductToCart, categories } =
    useStateContext();
  const [querySearch, setQuerySearch] = useState("");
  return (
    <div
      className={`${themeBG} relative px-8 md:px-24 py-32 flex flex-col space-y-8 justify-center items-center w-full `}
    >
      <div className="border-b border-b-[#D2B6A2]  w-full flex justify-center">
        <h3 className="font-heading text-3xl mb-4">Our Products</h3>
      </div>
      <div className="flex justify-center w-full md:items-center flex-wrap md:flex-nowrap">
        <ProductsMenuBtn click={(e) => setQuerySearch("")} text="All" />
        <>
          {categories.map((cat) => {
            return (
              <ProductsMenuBtn
                key={cat}
                click={(e) => setQuerySearch(e.target.value)}
                text={cat}
              />
            );
          })}
        </>
      </div>
      {products.items && (
        <div className="flex  justify-between flex-col md:flex-row w-full md:flex-wrap">
          {products.items.map((item) => {
            return (
              <ProductCard
                key={item._id}
                image={item.image}
                pID={item._id}
                catName={item.category}
                pName={item.name}
                price={item.price}
                pDesc={item.description}
                click={() => handleAddProductToCart(item)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
