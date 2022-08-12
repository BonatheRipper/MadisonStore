import React from "react";
import AdminFooter from "./Components/AdminFooter";
import AdminSharedHeader from "./Components/AdminSharedHeader";
import AdminAddProductInput from "./Components/AdminAddProductInput";
import AdminAddProductImgUpload from "./Components/AdminAddProductImgUpload";
import { useState } from "react";
import axios from "axios";
import { useStateContext } from "../../context/Statecontext";
import { toast } from "react-toastify";
const AdminAddProduct = () => {
  const { user } = useStateContext();

  const [slug, setSlug] = useState("");
  const [description, setDesciption] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");
  const [title, setTitle] = useState("");
  const [itemInStock, setItemInStock] = useState("");
  const [imageGallery, setImageGallery] = useState([]);
  const [imageGalleryBack, setImageGalleryBack] = useState([]);
  const [productImageBack, setProductImageBack] = useState([]);

  const [productImage, setProductImage] = useState([]);
  const handleUploadImageChange = (e) => {
    let imageArr = [];
    for (let image of e.target.files) {
      imageArr.push(URL.createObjectURL(image));
    }
    if (e.target.id === "imageGallery") {
      setImageGalleryBack(e.target.files);
      return setImageGallery(imageArr);
    }
    setProductImageBack(e.target.files[0]);
    return setProductImage(imageArr.slice(0, 1));
  };
  const handleProductAdd = async (e) => {
    e.preventDefault();
    var myFormData = new FormData();
    if (
      slug &&
      description &&
      price &&
      category &&
      material &&
      title &&
      itemInStock &&
      productImage.length !== 0
    ) {
      myFormData.append("slug", slug);
      myFormData.append("description", description);
      myFormData.append("price", price);
      myFormData.append("title", title);
      myFormData.append("itemInStock", itemInStock);
      myFormData.append("category", category);
      myFormData.append("material", material);

      if (imageGalleryBack) {
        for (const images of imageGalleryBack) {
          myFormData.append("imageGallery", images);
        }
      }
      if (productImageBack) {
        myFormData.append("productImage", productImageBack);
      }
      try {
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        const { data } = await axios.post(
          "/api/products/addNew",
          myFormData,
          config
        );
        toast(data.message);
      } catch (e) {
        console.log(e.response);
      }
    } else {
      return toast.error("Some inputs are empty");
    }
  };

  return (
    <>
      <div className="relative bg-[#F1FFFD] m-0  flex flex-col   h-full">
        <AdminSharedHeader />

        <div className="flex p-2 md:p-6 flex-col my-20 text-c-green">
          <h1 className=" font-fair text-xl font-bold">Add a Product</h1>
          <div className=" ">
            <form
              onSubmit={(e) => handleProductAdd(e)}
              className="p-2 md:p-4 border  shadow-lg"
            >
              <div className=" class name image flex flex-col py-2">
                <AdminAddProductImgUpload
                  text="Add media"
                  change={(e) => handleUploadImageChange(e)}
                  id="productImage"
                  images={productImage}
                  css="w-64 h-64 my-2 flex justify-start"
                />
                <div className="relative my-2 flex flex-col border py-2 px-2 ">
                  <label htmlFor="description" className=" py-2 text-sm">
                    Product title
                  </label>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    id="description"
                    className=" h-8 border"
                  />
                </div>
                <div className="relative my-2 flex flex-col border py-2 px-2 ">
                  <label htmlFor="description" className=" py-2 text-sm">
                    Product description
                  </label>
                  <textarea
                    id="description"
                    onChange={(e) => setDesciption(e.target.value)}
                    value={description}
                    className=" h-64 border"
                  ></textarea>
                </div>
                <div className="flex w-full  justify-between items-center">
                  <AdminAddProductInput
                    type="number"
                    text="Price($)"
                    width="w-24"
                    change={(e) => setPrice(e.target.value)}
                    value={price}
                    id="price"
                  />
                  <AdminAddProductInput
                    width="w-32"
                    type="text"
                    text="Slug"
                    change={(e) => setSlug(e.target.value)}
                    value={slug}
                    id="slug"
                  />
                </div>
                <div className="flex w-full  justify-between items-center">
                  <AdminAddProductInput
                    width="w-24"
                    type="text"
                    text="Category"
                    change={(e) => setCategory(e.target.value)}
                    value={category}
                    id="category"
                  />
                  <AdminAddProductInput
                    width="w-24"
                    type="text"
                    text="Material"
                    change={(e) => setMaterial(e.target.value)}
                    value={material}
                    id="material"
                  />
                </div>

                <AdminAddProductInput
                  type="number"
                  text="Items in stock"
                  change={(e) => setItemInStock(e.target.value)}
                  value={itemInStock}
                  width="w-auto"
                  id="itemsInStock"
                />

                <AdminAddProductImgUpload
                  text="Add Gallery"
                  change={(e) => handleUploadImageChange(e)}
                  images={imageGallery}
                  id="imageGallery"
                  css="w-20 h-16 my-4"
                />
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
