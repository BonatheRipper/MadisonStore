import React, { createContext, useContext, useState } from "react";
import { useReducer } from "react";

const productsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, items: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, items: false, error: action.payload };
    default:
      return state;
  }
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let newItem = action.payload;
      let cartItems;
      var newItemExist = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
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

    default:
      return state;
  }
};
const StateContext = createContext();
const ThemeBackground = [
  { color: "bg-black " },
  { color: "bg-c-green " },
  { color: "bg-c-indigo " },
  { color: "bg-c-darkGreen " },
];
const ThemeShapes = {
  Rounded: "rounded-full",
  Square: null,
};
const ThemeBorders = {
  Rounded: "rounded-t-full",
  Square: null,
};
export const ContextProvider = ({ children }) => {
  const [themeShape, setThemeShape] = useState(ThemeShapes.Rounded);
  const [themeBorder, setThemeBorder] = useState(ThemeBorders.Rounded);

  const [themeBG, setThemeBG] = useState(ThemeBackground[1].color);
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
  const handleAddProductToCart = (productToAddToCart) => {
    cartDispatch({ type: "ADD_TO_CART", payload: productToAddToCart });
  };
  return (
    <StateContext.Provider
      value={{
        themeBG,
        handleAddProductToCart,
        ThemeBackground,
        cart,
        cartDispatch,
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
