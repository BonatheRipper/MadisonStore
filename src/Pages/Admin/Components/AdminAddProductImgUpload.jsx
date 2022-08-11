import React from "react";
import { FaImages } from "react-icons/fa";

const AdminAddProductImgUpload = ({ text, id }) => {
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
      <input type="file" id={id} className="hidden" />
    </div>
  );
};

export default AdminAddProductImgUpload;
