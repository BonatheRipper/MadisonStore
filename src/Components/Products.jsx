import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useStateContext } from "../context/Statecontext";
import ProductCard from "./ProductCard";
import ProductsMenuBtn from "./ProductsMenuBtn";
import axios from "axios";
const Products = ({}) => {
  const { themeBG, products, handleAddProductToCart, productsDispatch } =
    useStateContext();

  useEffect(() => {
    const fetchProducts = async () => {
      productsDispatch({ type: "FETCH_REQUEST" });
      try {
        const results = await axios.get("/api/products");
        productsDispatch({ type: "FETCH_SUCCESS", payload: results.data });
      } catch (e) {
        productsDispatch({ type: "FETCH_SUCCESS", payload: e.message });
      }
    };
    fetchProducts();
  }, []);

  return (
    <div
      className={`${themeBG} relative px-8 md:px-24 py-32 flex flex-col space-y-8 justify-center items-center w-full `}
    >
      <div className="border-b border-b-[#D2B6A2]  w-full flex justify-center">
        <h3 className="font-heading text-3xl mb-4">Our Products</h3>
      </div>
      <div className="flex justify-center w-full md:items-center flex-wrap md:flex-nowrap">
        <ProductsMenuBtn to="/all" text="All" />
        <ProductsMenuBtn to="/rings" text="Rings" />
        <ProductsMenuBtn to="/necklace" text="Necklace" />
        <ProductsMenuBtn to="/watches" text="Watches" />
        <ProductsMenuBtn to="/earrings" text="Earrings" />
        <ProductsMenuBtn to="/bags" text="Bags" />
        <ProductsMenuBtn to="/shoes" text="Shoes" />
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
