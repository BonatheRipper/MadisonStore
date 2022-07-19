import React from "react";
import { useStateContext } from "../context/Statecontext";
import ProductCard from "./ProductCard";
import ProductsMenuBtn from "./ProductsMenuBtn";
const Products = () => {
  const { themeBG } = useStateContext();
  const ProductsArr = [
    {
      pName: "Cianaga Shoes",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969785257gavin-allanwood-ndpX28miBtE-unsplash.png?alt=media&token=a2226fcf-4564-4a14-868b-19b1fda97f95",
      catName: "Rings",
      price: "$800",
    },
    {
      pName: "Cianaga Shoes",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969785257gavin-allanwood-ndpX28miBtE-unsplash.png?alt=media&token=a2226fcf-4564-4a14-868b-19b1fda97f95",
      catName: "Earrings",
      price: "$800",
    },
    {
      pName: "Cianaga Shoes",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969785257gavin-allanwood-ndpX28miBtE-unsplash.png?alt=media&token=a2226fcf-4564-4a14-868b-19b1fda97f95",
      catName: "Watches",
      price: "$800",
    },
    {
      pName: "Cianaga Shoes",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969785257gavin-allanwood-ndpX28miBtE-unsplash.png?alt=media&token=a2226fcf-4564-4a14-868b-19b1fda97f95",
      catName: "Necklace",
      price: "$800",
    },
    {
      pName: "Cianaga Shoes",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969785257gavin-allanwood-ndpX28miBtE-unsplash.png?alt=media&token=a2226fcf-4564-4a14-868b-19b1fda97f95",
      catName: "Bags",
      price: "$800",
    },
    {
      pName: "Cianaga Shoes",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-abdaf.appspot.com/o/1654969785257gavin-allanwood-ndpX28miBtE-unsplash.png?alt=media&token=a2226fcf-4564-4a14-868b-19b1fda97f95",
      catName: "Shoes",
      price: "$800",
    },
  ];
  return (
    <div
      className={`${themeBG}  px-8 md:px-24 py-32 flex flex-col space-y-8 justify-center items-center w-full `}
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
      <div className="flex  justify-between flex-col md:flex-row w-full md:flex-wrap">
        {ProductsArr.map((item) => {
          return (
            <ProductCard
              image={item.image}
              catName={item.catName}
              pName={item.pName}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
