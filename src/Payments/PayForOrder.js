import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { useStateContext } from "../context/Statecontext";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function paymentReducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, error: "", order: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
const PayForOrder = () => {
  const { cart, user, cartDispatch, themeBG, ThemeShapes, themeShape } =
    useStateContext();
  const [{ loading, error, order }, paymentDispatch] = useReducer(
    paymentReducer,
    { loading: true, error: "", order: {} }
  );
  const navigate = useNavigate();
  const { orderId } = useParams();
  useEffect(() => {
    const getOrder = async () => {
      try {
        paymentDispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${user.token}` },
        });
        paymentDispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (e) {
        paymentDispatch({ type: "FETC_FAIL", payload: e });
      }
    };
    if (!user) {
      navigate("/login");
    }
    if (!order._id || (order._id && order._id) !== orderId) {
      getOrder();
    }
  }, [order, user, orderId, navigate]);
  console.log(order);

  return (
    <div className="p-10  my-10 bg-[#F1FFFD] w-full">
      <h1 className="font-fair my-4 font-bold text-c-green text-xl">
        Order: {order._id}
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
                <span>{order.ShippingDetails.Fname}</span>
              </div>
              <div className="flex py-1 px-4">
                <p className="font-bold mr-2">Address: </p>
                <span>{order.ShippingDetails.address}</span>
              </div>
              <div className="flex py-1 px-4">
                <p className="font-bold mr-2">Delivered: </p>
                <span>{order.isDelivered ? "Yes" : "Not delivered"}</span>
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
                <span>{order.PaymentMethod}</span>
              </div>
              <div className="flex py-1 px-4">
                <p className="font-bold mr-2">Paid: </p>
                <span>{order.isPaid ? "Yes" : "Not paid"}</span>
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
              {order.orderItems.map((item) => {
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
                    <span className="text-xs ">${item.price}</span>
                  </div>
                );
              })}
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
                <span>${order.itemsTotal}</span>
              </div>

              <div className="flex py-1 px-4 justify-between">
                <p className="font-bold mr-2">Shipping: </p>
                <span>${order.shippingFee}</span>
              </div>
              <div className="flex py-1 px-4 justify-between">
                <p className="font-bold mr-2">Tax: </p>
                <span>${order.taxFee}</span>
              </div>
              <div className="flex py-1 px-4 justify-between">
                <p className="font-bold mr-2">Order Total: </p>
                <span>${order.totalPrice}</span>
              </div>
            </div>
            <div className="flex py-2 px-4 justify-center border-4 border-c-gold hover:bg-c-gold hover:text-c-green">
              <button className="px-4">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayForOrder;
