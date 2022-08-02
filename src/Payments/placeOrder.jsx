import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/Statecontext";
import axios from "axios";
import LongButtons from "../Components/LongButtons";
const orderReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_REQUEST":
      return { ...state, loading: true };
    case "CREATE_SUCCESS":
      return { ...state, loading: false };
    case "CREATE_FAIL":
      return { ...state, loading: true };
    default:
      return state;
  }
};

const PlaceOrder = () => {
  const { cart, user, cartDispatch, themeBG, ThemeShapes, themeShape } =
    useStateContext();
  const navigate = useNavigate();
  const [{ loading, error }, orderDispatch] = useReducer(orderReducer, {
    loading: false,
    error: "",
  });
  const itemsTotal = () => {
    return toFix(
      cart.cart.cartItems.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price * currentValue.quantity;
      }, 0)
    );
  };
  const toFix = (num) => {
    return Math.round(Number(num)).toFixed(2);
  };
  const shippingFee = () => {
    return toFix((0.5 * itemsTotal()) / 100);
  };
  const taxFee = () => {
    return toFix((0.2 * itemsTotal()) / 100);
  };
  const totalPrice = () => {
    const total =
      Number(itemsTotal()) + Number(shippingFee()) + Number(taxFee());
    return toFix(total);
  };
  const placeOrdersHandler = async () => {
    try {
      orderDispatch({ type: "CREATE_REQUEST" });
      const { data } = await axios.post(
        "/api/orders",
        {
          orderItems: cart.cart.cartItems,
          ShippingDetails: cart.ShippingDetails,
          PaymentMethod: cart.PaymentMethod,
          taxFee: taxFee(),
          shippingFee: shippingFee(),
          itemsTotal: itemsTotal(),
          totalPrice: totalPrice(),
        },
        { headers: { authorization: `Bearer ${user.token}` } }
      );
      orderDispatch({ type: "CREATE_SUCCESS" });
      cartDispatch({ type: "CLEAR_CART" });
      localStorage.removeItem("cartItems");
      navigate(`/order/${data.order._id}`);
    } catch (e) {
      orderDispatch({ type: "CREATE_FAIL" });
    }
  };
  useEffect(() => {
    // if (cart.cart.cartItems.length == 0) {
    //   return navigate("/shop");
    // }
    if (!user) {
      return navigate("/login");
    }
    if (cart.cart.ShippingDetails === {}) {
      return navigate("/shipping");
    }
    if (cart.cart.PaymentMethod === "") {
      return navigate("/cart");
    }
  }, [user, navigate, cart]);
  return (
    <>
      {cart.cart.cartItems.length ? (
        <div className="p-10  my-10 bg-[#F1FFFD] w-full">
          <h1 className="font-fair my-4 font-bold text-c-green text-xl">
            Preview Order
          </h1>
          <div className="flex md:flex-row flex-col justify-between ">
            <div
              className={` ${themeBG} md:mx-6 my-4 flex flex-col w-full rounded-md justify-start md:w-6/12 p-6`}
            >
              <div className="flex my-4 flex-col ">
                <h4
                  className={`${
                    themeShape === ThemeShapes.Rounded
                      ? "rounded-l-lg"
                      : "rounded-l-sm"
                  } font-bold py-1  px-2  border-l-4 border-c-gold`}
                >
                  {" "}
                  Shipping
                </h4>
                <div className=" border border-c-gold ">
                  <div className="flex py-1 px-4">
                    <p className="font-bold mr-2">Name: </p>
                    <span>{cart.ShippingDetails.Fname}</span>
                  </div>
                  <div className="flex py-1 px-4">
                    <p className="font-bold mr-2">Address: </p>
                    <span>{cart.ShippingDetails.address}</span>
                  </div>
                  <div className="flex py-1 px-4">
                    <NavLink
                      to="/shipping"
                      className="text-zinc-400 hover:text-white"
                    >
                      Edit
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex my-4 flex-col ">
                <h4
                  className={`${
                    themeShape === ThemeShapes.Rounded
                      ? "rounded-l-lg"
                      : "rounded-l-sm"
                  } font-bold py-1  px-2  border-l-4 border-c-gold`}
                >
                  Payment Method
                </h4>
                <div className=" border border-c-gold ">
                  <div className="flex py-1 px-4">
                    <p className="font-bold mr-2">Method: </p>
                    <span>{cart.PaymentMethod}</span>
                  </div>

                  <div className="flex py-1 px-4">
                    <NavLink
                      to="/cart"
                      className="text-zinc-400 hover:text-white"
                    >
                      Edit
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex my-4 flex-col ">
                <h4
                  className={`${
                    themeShape === ThemeShapes.Rounded
                      ? "rounded-l-lg"
                      : "rounded-l-sm"
                  } font-bold py-1  px-2  border-l-4 border-c-gold`}
                >
                  Items To Pay
                </h4>
                <div className=" border border-c-gold flex  flex-col  w-full ">
                  {cart.cart.cartItems.map((item) => {
                    return (
                      <div
                        className="flex py-2 px-4 justify-between space-x-6 items-center"
                        key={item.name}
                      >
                        <p className="font-bold ">
                          <img
                            className={`${themeShape} w-12 h-12 border  border-c-gold `}
                            src={item.image}
                            alt="Item"
                          />
                        </p>
                        <NavLink
                          to={`/products/${item._id}`}
                          className="text-xs hover:text-white "
                        >
                          {item.name}
                        </NavLink>
                        <span className="text-xs">{item.quantity}</span>
                        <span className="text-xs ">{item.price}</span>
                      </div>
                    );
                  })}

                  <div className="flex px-4 my-4">
                    <NavLink
                      to="/cart"
                      className="text-zinc-400 hover:text-white"
                    >
                      Edit
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` ${themeBG}  md:mx-6 h-64 my-4 flex flex-col w-full rounded-md justify-start md:w-6/12 p-6`}
            >
              <div className="flex my-4 flex-col ">
                <h4
                  className={`${
                    themeShape === ThemeShapes.Rounded
                      ? "rounded-l-lg"
                      : "rounded-l-sm"
                  } font-bold py-1  px-2  border-l-4 border-c-gold`}
                >
                  Order Summary
                </h4>
                <div className=" border border-c-gold ">
                  <div className="flex py-1 px-4 justify-between">
                    <p className="font-bold mr-2">Items Total: </p>
                    <span>${itemsTotal()}</span>
                  </div>

                  <div className="flex py-1 px-4 justify-between">
                    <p className="font-bold mr-2">Shipping: </p>
                    <span>${shippingFee()}</span>
                  </div>
                  <div className="flex py-1 px-4 justify-between">
                    <p className="font-bold mr-2">Tax: </p>
                    <span>${taxFee()}</span>
                  </div>
                  <div className="flex py-1 px-4 justify-between">
                    <p className="font-bold mr-2">Order Total: </p>
                    <span>${totalPrice()}</span>
                  </div>
                </div>
                <div className="flex py-2 px-4 justify-center border-4 border-c-gold hover:bg-c-gold hover:text-c-green">
                  {cart.cart.cartItems.length == 0 ? (
                    <NavLink to="/shop">Shop Items</NavLink>
                  ) : (
                    <button onClick={placeOrdersHandler} className="px-4">
                      Place Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${themeBG} flex flex-col justify-between items-center space-y-4 py-12 my-20 w-full mb-12 bg-pry-100 p-10 text-gold `}
        >
          <p className="text-center text-c-gold text-sm md:text-lg">
            You currently do not have any item to order
          </p>
          <LongButtons
            to="/shop"
            text="Explore"
            css={`
              ${themeBG} px-4 border border-c-gold hover:text-c-green
            `}
          />
        </div>
      )}
    </>
  );
};

export default PlaceOrder;
