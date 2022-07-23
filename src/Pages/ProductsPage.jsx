import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import LongButtons, { NormalButton } from "../Components/LongButtons";
import { useStateContext } from "../context/Statecontext";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactImageMagnify from "react-image-magnify";
import "../App.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const ProductsPage = () => {
  const { themeBG, handleAddProductToCart, themeShape } = useStateContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState();
  const [currentImg, setCurrentImg] = useState();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await axios.get(`/api/products/${id}`);
        setSingleProduct(results.data);
        setCurrentImg(singleProduct.image);
      } catch (e) {
        alert(e.response.data.error);
        setSingleProduct(false);
      }
    };
    fetchProducts();
  }, []);

  const handleGalleryClick = (imgLink) => {
    setCurrentImg(imgLink);
  };
  return (
    <>
      {singleProduct && (
        <div
          className={`bg-pry-50 text-c-green px-8 md:px-24 py-24 flex flex-col justify-between  w-full space-y-4 bg-[#F1FFFD]`}
        >
          <p className="text-c-green  font-body text-base font-medium ">
            <NavLink to="/">{`Home > `}</NavLink>
            <NavLink
              to={`/${singleProduct.category}`}
            >{`${singleProduct.category} > `}</NavLink>
            <NavLink
              to={`/products/${singleProduct._id}`}
            >{`${singleProduct.name} `}</NavLink>
          </p>
          <h2 className="font-fair  text-c-green text-3xl tracking-loose">
            Product Details
          </h2>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:space-x-12">
            <div className="flex flex-col justify-between items-center flex-1 h-4/5">
              <div
                className={`${themeBG} ${
                  themeShape ? themeShape : "rounded-lg"
                }  w-full h-full my-4 flex justify-center items-center`}
              >
                {/* <img
                  className={`${themeShape} transition  duration-1000 h-96 w-96`}
                  alt="Product-Pic"
                /> */}

                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: currentImg || singleProduct.image,
                    },
                    largeImage: {
                      width: 1200,
                      height: 1800,
                    },
                  }}
                />
              </div>
              <div className="flex justify-center items-center my-4 overflow-hidden	relative">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  pagination={{ clickable: true }}
                  grabCursor={true}
                  className="MySwipper w-96 overflow-hidden	"
                  slidesPerView={3}
                  breakpoints={{
                    0: {
                      slidesPerView: 4,
                      spaceBetween: 2,
                    },
                    760: {
                      slidesPerView: 4,
                      spaceBetween: 2,
                    },
                    960: {
                      slidesPerView: 4,
                      spaceBetween: 2,
                    },
                  }}
                >
                  {singleProduct.gallery.map((item) => {
                    return (
                      <SwiperSlide
                        key={item + Math.random() * 353}
                        onClick={() => handleGalleryClick(item)}
                        className="relative flex items-center justify-center"
                      >
                        <img
                          className={`${
                            themeShape ? themeShape : "rounded-lg"
                          } border-c-darkGreen  w-16 h-16 md:h-20 md:w-20 border p-2 m-2`}
                          src={item}
                          alt="Product-Pic"
                        />

                        {currentImg === item && (
                          <div
                            className={`${
                              themeShape ? themeShape : "rounded-lg"
                            } w-full h-full bg-c-gold opacity-50 absolute text-black flex items-center justify-center transition duration-1000`}
                          >
                            <i className="fa fa-check" aria-hidden="true"></i>
                          </div>
                        )}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <LongButtons
                to="products/all"
                text="Back to products"
                css={`bg-[#F1FFFD] border border-c-green hover:${themeBG} hover:text-grey`}
              />
            </div>
            <div className="flex flex-col justify-between flex-1  h-4/5 space-y-7 ">
              <p className="tracking-widest font-body uppercase  text-md">
                {singleProduct.category}
              </p>
              <p className="font-fair  text-c-green text-2xl">
                {singleProduct.name}
              </p>
              <p className=" text-base text-justify tracking-wide">
                {singleProduct.description}
              </p>
              <div className="flex flex-col">
                <p className="tracking-widest font-body my-2 text-pry-100 text-base">
                  Material: {singleProduct.material}
                </p>
                <p className="tracking-widest font-body my-2 text-pry-100 text-base">
                  Price: ${singleProduct.price}
                </p>
                <p className="tracking-widest font-body my-2 text-pry-100 text-base">
                  Color:Red
                </p>
              </div>{" "}
              <NormalButton
                to="products/all"
                click={() => handleAddProductToCart(singleProduct)}
                text="ADD TO CART"
                css={`bg-[#F1FFFD] border border-c-green hover:${themeBG} hover:text-grey`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsPage;
