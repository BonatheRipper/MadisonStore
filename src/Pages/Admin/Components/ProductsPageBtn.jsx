import React from "react";

const ProductsPageBtn = ({ text, icon }) => {
  return (
    <div
      className={`w-full shadow-sm hover:animate-pulse mb-2  rounded-lg border h-auto  font-bold text-xl p-2 md:mx-1 flex flex-col justify-center items-center`}
    >
      <span className="my-1 py-2 ">{icon}</span>
      <button>{text}</button>
    </div>
  );
};

export default ProductsPageBtn;
