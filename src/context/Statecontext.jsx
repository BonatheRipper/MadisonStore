import React, { createContext, useContext, useState } from "react";
import { useReducer } from "react";
import axios from "axios";
const productsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, items: action.payload || [], loading: false };
    case "FETCH_FAIL":
      return { ...state, items: false, loading: false, error: action.payload };
    default:
      return state;
  }
};
const cartReducer = (state, action) => {
  var newItem = action.payload;
  var cartItems;
  var newItemExist = state.cart.cartItems.find(
    (item) => item._id === action.payload._id
  );
  switch (action.type) {
    case "ADD_TO_CART":
      if (newItemExist) {
        newItemExist.quantity = newItemExist.quantity + 1;
        cartItems = state.cart.cartItems.map((item) =>
          item._id === newItemExist._id ? newItemExist : item
        );
      } else {
        newItem.quantity = 1;
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: newItemExist
            ? cartItems
            : [...state.cart.cartItems, newItem],
        },
      };
    case "REMOVE_FROM_CART":
      const newCartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: newCartItems,
        },
      };
    case "MINUS_FROM_CART":
      if (newItemExist) {
        newItemExist.quantity =
          newItemExist.quantity > 1 ? newItemExist.quantity - 1 : 1;
        cartItems = state.cart.cartItems.map((item) =>
          item._id === newItemExist._id ? newItemExist : item
        );
      } else {
        newItem.quantity = 1;
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: newItemExist
            ? cartItems
            : [...state.cart.cartItems, newItem],
        },
      };
    default:
      return state;
  }
};
const StateContext = createContext();
const ThemeBackground = [
  { color: "bg-black " },
  { color: "bg-c-green " },
  { color: "bg-c-indigo " },
  // { color: "bg-c-darkGreen " },
];
const ThemeShapes = {
  Rounded: "rounded-full",
  Square: "null",
};
const ThemeBorders = {
  Rounded: "rounded-t-full",
  Square: null,
};
export const ContextProvider = ({ children }) => {
  const [themeShape, setThemeShape] = useState(
    localStorage.getItem("themeShape") || ThemeShapes.Rounded
  );
  const [categories, setCats] = useState([]);

  const [themeBorder, setThemeBorder] = useState(ThemeBorders.Rounded);

  const [themeBG, setThemeBG] = useState(
    localStorage.getItem("themeBG") || ThemeBackground[1].color
  );
  const [sidebar, setSidebar] = useState(false);
  const [products, productsDispatch] = useReducer(productsReducer, {
    loading: true,
    error: "",
    items: false,
  });
  const [cart, cartDispatch] = useReducer(cartReducer, {
    cart: { cartItems: [] },
    shippingDetails: "",
    PaymentMethod: "",
  });
  const handleAddProductToCart = async (productToAddToCart) => {
    try {
      const existItem = cart.cart.cartItems.find(
        (x) => x._id === productToAddToCart._id
      );
      const id = productToAddToCart._id;
      const results = await axios.get(`/api/products/${id}`);
      const quantity = existItem ? existItem.quantity : 1;
      if (results.data.countInStock <= quantity) {
        return alert("Out of fucking stock");
      }
    } catch (e) {
      alert(e);
    }
    cartDispatch({ type: "ADD_TO_CART", payload: productToAddToCart });
  };
  const updateCartHandler = async (item, action) => {
    try {
      const existItem = cart.cart.cartItems.find((x) => x._id === item._id);
      const id = item._id;
      const results = await axios.get(`/api/products/${id}`);
      const quantity = existItem ? existItem.quantity : 1;
      if (action === "DELETE") {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: item });
        return;
      }
      if (action === "ADD") {
        if (results.data.countInStock <= quantity) {
          return console.log("Out of fucking stock");
        }
        cartDispatch({ type: "ADD_TO_CART", payload: item });
      }
    } catch (e) {
      alert(e);
    }

    if (action === "MINUS") {
      cartDispatch({ type: "MINUS_FROM_CART", payload: item });
    }
  };
  return (
    <StateContext.Provider
      value={{
        themeBG,
        handleAddProductToCart,
        updateCartHandler,
        ThemeBackground,
        cart,
        cartDispatch,
        categories,
        setCats,
        setThemeBG,
        products,
        productsDispatch,
        ThemeShapes,
        setThemeShape,
        themeBorder,
        themeShape,

        sidebar,
        setSidebar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
