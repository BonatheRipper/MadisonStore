import React from "react";
import AdminFooter from "./Components/AdminFooter";
import AdminSharedHeader from "./Components/AdminSharedHeader";
import AdminAddProductInput from "./Components/AdminAddProductInput";
import AdminAddProductImgUpload from "./Components/AdminAddProductImgUpload";

const AdminAddProduct = () => {
  const handleProductAdd = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="relative bg-[#F1FFFD] m-0 text-c-green flex flex-col   h-full">
        <AdminSharedHeader />

        <div className="flex p-2 md:p-6 flex-col my-20">
          <h1 className="text-c-green font-fair text-xl font-bold">
            Add a Product
          </h1>
          <div className=" ">
            <form
              onSubmit={(e) => handleProductAdd(e)}
              className="p-2 md:p-4 border  shadow-lg"
            >
              <div className=" class name image flex flex-col py-2">
                <AdminAddProductImgUpload text="Add media" id="files" />
                <div className="relative my-2 flex flex-col border py-2 px-2 ">
                  <label htmlFor="description" className=" py-2 text-sm">
                    Product title
                  </label>
                  <input type="text" id="description" className=" h-8 border" />
                </div>
                <div className="relative my-2 flex flex-col border py-2 px-2 ">
                  <label htmlFor="description" className=" py-2 text-sm">
                    Product description
                  </label>
                  <input
                    type="text"
                    id="description"
                    className=" h-64 border"
                  />
                </div>
                <div className="flex w-full  justify-between items-center">
                  <AdminAddProductInput
                    type="number"
                    text="Price($)"
                    width="w-24"
                    id="price"
                  />
                  <AdminAddProductInput
                    width="w-24"
                    type="text"
                    text="Slug"
                    id="slug"
                  />
                </div>
                <div className="flex w-full  justify-between items-center">
                  <AdminAddProductInput
                    width="w-24"
                    type="text"
                    text="Category"
                    id="category"
                  />
                  <AdminAddProductInput
                    width="w-24"
                    type="text"
                    text="Materia"
                    id="material"
                  />
                </div>

                <AdminAddProductInput
                  type="text"
                  text="Items in stock"
                  width="w-auto"
                  id="itemsInStock"
                />

                <AdminAddProductImgUpload text="Add Gallery" id="gallery" />
              </div>
              <button className="px-4 mt-4 py-2 border w-full bg-black text-c-gold">
                Save Product
              </button>
            </form>
          </div>
        </div>
        <AdminFooter />
      </div>
    </>
  );
};

export default AdminAddProduct;
