import React from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/Statecontext";
const PlaceOrder = () => {
  const { cart, user, themeBG, ThemeShapes, themeShape } = useStateContext();
  const navigate = useNavigate();
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
  const orderTotal = () => {
    const total =
      Number(itemsTotal()) + Number(shippingFee()) + Number(taxFee());
    return toFix(total);
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
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
                <NavLink to="/cart" className="text-zinc-400 hover:text-white">
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
                <NavLink to="/cart" className="text-zinc-400 hover:text-white">
                  Edit
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${themeBG}  md:mx-6 h-64 my-2 flex flex-col w-full rounded-md justify-start md:w-6/12 p-6`}
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
                <span>${orderTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
