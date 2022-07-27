import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useStateContext } from "../context/Statecontext";
import ProductsMenuBtn from "../Components/ProductsMenuBtn";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const catOrders = {
  arr: [
    "Newest",
    "Oldest",
    "Ascending",
    "Descending",
    "Highest to lowest price",
    "Lowest to highest price",
  ],
  value: "Newest",
};
const AllProducts = () => {
  const { themeBG, products, handleAddProductToCart, productsDispatch } =
    useStateContext();
  const [pageNumber, setPageNumber] = useState(0);
  const [cats, setCats] = useState([]);
  const [selects, setSelects] = useState("");
  const [sortCat, setSortCat] = useState(catOrders);

  const [totalPages, setTotalPages] = useState(1);
  const pages = new Array(totalPages).fill(totalPages);
  let num = -1;
  const handleClick = (currentPageNum) => {
    setPageNumber(currentPageNum);
  };
  const clearSearchFilter = () => {
    setSelects("");
  };
  const handleSortCat = (action) => {
    let allPost;
    if (action === "Oldest") {
      allPost = products.items.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (action === "Newest") {
      allPost = products.items.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    } else if (action === "Ascending") {
      allPost = products.items.sort();
    } else if (action === "Descending") {
      allPost = products.items.reverse();
    } else if (action === "Lowest to highest price") {
      allPost = products.items.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
    } else if (action === "Highest to lowest price") {
      allPost = products.items.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
    }
    setSortCat({ ...sortCat, value: action });
    return productsDispatch({
      type: "FETCH_SUCCESS",
      payload: allPost,
    });
  };

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      productsDispatch({ type: "FETCH_REQUEST" });
      try {
        const results = await axios.get(
          `/api/products/allproducts?page=${pageNumber}&searchbyCategoryName=${selects}`
        );
        setCats(results.data.categories[0].category);
        setTotalPages(results.data.totalPages);
        setSortCat({ ...sortCat, value: "Newest" });
        productsDispatch({
          type: "FETCH_SUCCESS",
          payload: results.data.products,
        });
      } catch (e) {
        productsDispatch({ type: "FETCH_FAIL", payload: e.message });
      }
    };
    fetchProducts();
    console.log(products);
  }, [pageNumber, selects]);
  return (
    <div
      className={`bg-[#F1FFFD] relative px-8 md:px-24 py-32 flex flex-col space-y-8 justify-center items-center w-full `}
    >
      <div className="flex flex-col justify-start w-full">
        <div className="flex space-x-2 justify-start w-full py-2">
          <NavLink className="text-c-green" to="/">
            Home >
          </NavLink>
          <NavLink className="text-c-green" to="/shop">
            Products
          </NavLink>
        </div>
        <h2 className="text-c-green text-2xl font-fair py-2  font-bold">
          All Products
        </h2>

        <div className="flex  flex-col py-2">
          <label
            className="font-sans   text-c-green text-sm"
            htmlFor="category"
          >
            Filter by:
          </label>
          <div className="flex justify-between w-full space-y-4 md:space-x-4  md:space-y-0 md:w-4/5 flex-col md:flex-row">
            <select
              id="category"
              value={selects}
              onChange={(e) => setSelects(e.target.value)}
              name="category"
              className="bg-[#F1FFFD] border border-c-green md:w-2/5 text-c-green px-6 capitalize hover:bg-c-green hover:text-c-gold py-2 bg-pry-50 transition duration-300 ease-in"
            >
              <option disabled>Category</option>
              {cats.map((cat) => {
                return (
                  <>
                    <option key={cat}>{cat}</option>
                  </>
                );
              })}
            </select>
            <select
              id="sort"
              name="sort"
              value={sortCat.value}
              onChange={(e) => handleSortCat(e.target.value)}
              className="bg-[#F1FFFD] border border-c-green md:w-2/5 text-c-green px-6 capitalize hover:bg-c-green hover:text-c-gold py-2 bg-pry-50 transition duration-300 ease-in"
            >
              {sortCat.arr.map((sort) => {
                return (
                  <>
                    <option value={sort} key={sort}>
                      {sort}
                    </option>
                  </>
                );
              })}
            </select>
            <button
              onClick={() => clearSearchFilter()}
              className="text-c-green text-sm border-b border-b-c-green px-4 py-2 md:w-2/5 hover:text-red-500 hover:border-b-red-500 transition duration-300 ease-in"
            >
              Clear filters
            </button>
          </div>
        </div>
      </div>

      {products.items && (
        <div className="flex  justify-between flex-col md:flex-row w-full md:flex-wrap">
          {products.items.map((item) => {
            return (
              <div data-aos="fade-up">
                <ProductCard
                  key={item._id}
                  image={item.image}
                  css={`
                    ${themeBG}
                  `}
                  css2="bg-c-gold"
                  pID={item._id}
                  catName={item.category}
                  pName={item.name}
                  price={item.price}
                  pDesc={item.description}
                  click={() => handleAddProductToCart(item)}
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="justify-self-end self-end">
        <nav aria-label="pagination navigation">
          <ul className="flex flex-row">
            <li>
              <button
                className={` ${
                  pageNumber > 0 ? "text-c-green border-c-green " : ""
                }  border  text-sm  px-2  rounded-full h-6 mx-1 w-6 flex items-center justify-center`}
                tabIndex="-1"
                type="button"
                disabled={pageNumber === 0}
                value={-1}
                onClick={(e) => setPageNumber(pageNumber - 1)}
                aria-label="Go to previous page"
              >
                {`<`}
              </button>
            </li>

            {pages.map((index) => {
              num++;
              return (
                <li>
                  <button
                    className={` ${
                      num === pageNumber ? themeBG : "text-c-green"
                    } border text-sm  px-2 border-c-green rounded-full h-6 mx-1 w-6 flex items-center justify-center`}
                    type="button"
                    value={num}
                    key={num}
                    onClick={(e) => handleClick(Number(e.target.value))}
                    id={num}
                  >
                    {num}
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </button>
                </li>
              );
            })}

            <li>
              <button
                className={`border text-sm  px-2 ${
                  pageNumber !== num ? "text-c-green border-c-green " : ""
                } rounded-full h-6 mx-1 w-6 flex items-center justify-center`}
                tabIndex="+1"
                type="button"
                value={num}
                disabled={pageNumber === num}
                aria-label="Go to next page"
                onClick={(e) => setPageNumber(pageNumber + 1)}
              >
                {`>`}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AllProducts;
