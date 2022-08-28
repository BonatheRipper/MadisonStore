import React from "react";
import AdminFooter from "./Components/AdminFooter";
import AdminSharedHeader from "./Components/AdminSharedHeader";
import AdminAddProductInput from "./Components/AdminAddProductInput";
import AdminAddProductImgUpload from "./Components/AdminAddProductImgUpload";
import { useState } from "react";
import axios from "axios";
import { useStateContext } from "../../context/Statecontext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const AdminSettings = () => {
  const { user } = useStateContext();
  const [singleProduct, setSingleProduct] = useState(false);
  const { productId } = useParams();

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
  const [serverImage, setServerImage] = useState(false);
  const [serverGallery, setServerGallery] = useState(false);

  const [productImage, setProductImage] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setSingleProduct(false);
        const results = await axios.get(`/api/products/`);
        if (results.data) {
          setSingleProduct(results.data);
        } else {
        }
      } catch (e) {
        console.log(e.response.data.error);
        setSingleProduct(false);
      }
    };
    if (!singleProduct) {
      getProducts();
    } else {
      setSlug(singleProduct.slug);
      setSingleProduct(singleProduct);
      setCategory(singleProduct.category);
      setPrice(singleProduct.price);
      setDesciption(singleProduct.description);
      setTitle(singleProduct.name);
      setMaterial(singleProduct.material);
      setItemInStock(singleProduct.countInStock);
      setServerImage(singleProduct.image);
      setServerGallery(singleProduct.gallery);
    }
  }, [setSingleProduct, productId, singleProduct]);
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
  const handleProductEdit = async (e) => {
    e.preventDefault();
    console.log(serverImage);
    var myFormData = new FormData();
    if (
      (slug &&
        description &&
        price &&
        category &&
        material &&
        title &&
        itemInStock) ||
      (productImage.length !== 0 && serverImage.public_id !== "NONE")
    ) {
      myFormData.append("slug", slug);
      myFormData.append("description", description);
      myFormData.append("price", price);
      myFormData.append("title", title);
      myFormData.append("itemInStock", itemInStock);
      myFormData.append("category", category);
      myFormData.append("material", material);
      myFormData.append("serverImage", serverImage.public_id);

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
        const { data } = await axios.patch(
          `/api/products/${productId}`,
          myFormData,
          config
        );
        setSingleProduct(data.product);
        setImageGallery([]);
        setProductImage([]);
        setImageGalleryBack([]);
        return toast(data.message);
      } catch (e) {
        toast.error(e.response.data.error);
      }
    } else {
      return toast.error("Some inputs are empty");
    }
  };
  const handleImageDelete = async (e) => {
    const public_id = e.target.getAttribute("data-public_id");
    const imageType = e.target.getAttribute("data-key");
    try {
      const { data } = await axios.patch(
        `/api/products/imagedestroy/${productId}`,
        {
          public_id,
          imageType,
        }
      );
      if (data) {
        toast(data.message);
        setSingleProduct(data.product);
        console.log(data);
      }
    } catch (e) {
      toast.error(e.response.data.error);
    }
  };

  return (
    <>
      <div className="relative bg-[#F1FFFD] m-0  flex flex-col   h-full">
        <AdminSharedHeader />

        <div className="flex p-2 md:p-6 flex-col my-20 text-c-green">
          <h1 className=" font-fair text-xl font-bold">Website Settings</h1>
          <div className=" ">
            <form
              onSubmit={(e) => handleProductEdit(e)}
              className="p-2 md:p-4 border  shadow-lg"
            >
              <div className=" class name image flex flex-col py-2">
                <div className="relative my-2 flex flex-col border py-2 px-2 ">
                  <label htmlFor="description" className=" py-2 text-sm">
                    Site Title{" "}
                  </label>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    id="description"
                    className=" h-8 border"
                  />
                </div>
                <AdminAddProductImgUpload
                  text="Add media"
                  change={(e) => handleUploadImageChange(e)}
                  id="productImage"
                  click={(e) => handleImageDelete(e)}
                  images={productImage}
                  serverImage={serverImage}
                  css="w-64 h-64 my-2 flex justify-start"
                />
              </div>
              <button className="px-4 mt-4 py-2 border w-full bg-black text-c-gold">
                Update Website
              </button>
            </form>
          </div>
        </div>
        <AdminFooter />
      </div>
    </>
  );
};

export default AdminSettings;
