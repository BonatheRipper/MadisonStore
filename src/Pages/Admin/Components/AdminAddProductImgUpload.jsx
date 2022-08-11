import { change } from "@syncfusion/ej2-react-grids";
import React, { forwardRef } from "react";
import { useState } from "react";
import { FaImages } from "react-icons/fa";
const AdminAddProductImgUpload = ({ css, text, id, change, images }) => {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="flex items-center border  w-28 py-2 text-sm"
      >
        <span className="px-1">
          <FaImages />
        </span>
        <span className="px-1">{text}</span>
      </label>
      <input
        onChange={change}
        type="file"
        accept="image/*"
        multiple
        id={id}
        name={id === "imageGallery" ? "imageGallery" : "productImage"}
        className="hidden"
      />
      <div className="flex flex-row">
        {images.length !== 0 && (
          <>
            {images.map((image) => {
              return <img src={image} alt={text} className={`${css} mx-2`} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminAddProductImgUpload;
