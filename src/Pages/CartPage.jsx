import React from "react";
import { ImBin } from "react-icons/im";
import { AiFillInfoCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/Statecontext";
import LongButtons, { NormalButton } from "../Components/LongButtons";
const CartPage = () => {
  const { themeBG, cart, updateCartHandler, themeShape } = useStateContext();
  return (
    <div className="bg-[#F1FFFD] px-8 md:px-24 py-24 flex flex-col justify-between items-center  w-full space-y-4">
      <div className="flex flex-col justify-start w-full py-4">
        <p className="text-c-green  py-4 font-medium ">
          <NavLink to="/">Home</NavLink> {`> Cart`}
        </p>
        <h2 className="font-fair  text-c-green text-3xl tracking-loose">
          Cart
        </h2>
      </div>
      {cart.cart.cartItems.length ? (
        <div className=" w-full  flex flex-col space-y-8">
          <p className="text-c-green   text-xl font-medium ">
            Items in cart (
            {cart.cart.cartItems.reduce((previousValue, currentValue) => {
              return previousValue + currentValue.quantity;
            }, 0)}
            )
          </p>
          <div className="flex flex-col md:flex-row justify-between w-full space-y-6 md:space-x-24">
            <div className="flex flex-col w-full md:w-3/5 space-y-6">
              {" "}
              {cart.cart.cartItems.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 py-4 border-b border-b-c-green"
                  >
                    <div className="md:w-80 w-80 h-80">
                      <img src={item.image} alt="Product" />
                    </div>
                    <div className="flex flex-col w-full space-y-4 md:space-y-6">
                      <div className="flex flex-row justify-between">
                        <p className="text-c-green  font-fair text-xl font-medium ">
                          {item.name}
                        </p>
                        <button
                          onClick={() => updateCartHandler(item, "DELETE")}
                          className="text-c-green font-body text-base hover:text-red-500"
                        >
                          <ImBin />
                        </button>
                      </div>
                      <p class="text-c-green  font-body text-base font-normal ">
                        Material: {item.material}
                      </p>
                      <p class="text-c-green   font-body text-base font-normal ">
                        Category: {item.category}
                      </p>
                      <p class="text-c-green   font-body text-base font-normal ">
                        Price: ${item.price}
                      </p>
                      <div class="flex space-x-2">
                        <button
                          onClick={() => updateCartHandler(item, "MINUS")}
                          class={`${themeShape} border  hover:${themeBG}  text-3xl  border-c-green w-8 h-8 py-2 px-4 flex justify-center items-center hover:bg-pry-100  text-c-green transition duration-900 hover:text-c-gold`}
                        >
                          -
                        </button>
                        <span
                          class={` ${themeShape} border  border-c-green w-12 flex justify-center transition duration-900 items-center  text-c-green`}
                        >
                          {item.quantity > 0 ? item.quantity : 0}
                        </span>
                        <button
                          onClick={() => updateCartHandler(item, "ADD")}
                          class={`${themeShape} border  text-3xl  border-c-green w-8 h-8  p-2 flex justify-center items-center hover:${themeBG}  text-c-green transition duration-900 hover:text-c-gold`}
                        >
                          +
                        </button>
                      </div>
                      <NavLink
                        to={`/products/${item._id}`}
                        className="text-c-green flex space-x-2 text-base p-2  items-center"
                      >
                        <AiFillInfoCircle />
                        <span> Product information</span>
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              class={`${themeBG} ${
                themeShape ? "rounded-xl " : ""
              } border border-gold w-full md:w-2/5 py-12 px-6 md:px-12 space-y-12 flex flex-col h-4/5 justify-start `}
            >
              <div class="border-b border-b-c-gold w-full flex justify-center">
                <h3 class="font-heading text-3xl text-gold mb-4">
                  Order summary
                </h3>
              </div>
              <div class="flex justify-between">
                <p class="text-gold font-body text-md text-center font-bold">
                  Subtotal
                </p>
                <p class="text-gold font-body text-md text-center font-bold">
                  $
                  {cart.cart.cartItems.reduce((previousValue, currentValue) => {
                    return (
                      previousValue + currentValue.price * currentValue.quantity
                    );
                  }, 0)}
                  .00
                </p>
              </div>
              <div class="flex justify-between">
                <p class="text-gold font-body text-md text-center font-bold">
                  Delivery Fee:
                </p>
                <p class="text-gold font-body text-md text-center font-bold">
                  3
                </p>
              </div>
              <div class="flex justify-between">
                <p class="text-gold font-body text-md text-center font-bold">
                  Total:
                </p>
                <p class="text-gold font-body text-md text-center font-bold">
                  $303.00
                </p>
              </div>
              <span>
                <button class="  text-lg flex justify-center items-center space-x-3 w-full text-gold border border-c-gold font-heading py-4 px-8  hover:bg-c-gold hover:text-c-green font-medium transition duration-300">
                  Checkout
                </button>
              </span>
              <p class="text-gold font-body text-md text-center font-bold">
                Please, use
                <span class="font-bold hover:text-pry-50 cursor-pointer animate-pulse">
                  4242 4242 4242 4242
                </span>
                as your card number with any three digits as CVC and a future
                date as expiration date during checkout.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${themeBG} flex flex-col justify-between items-center space-y-4 py-12  w-full mb-24 bg-pry-100 p-4 text-gold `}
        >
          <p className="text-center text-c-gold text-sm md:text-lg">
            You currently do not have any item in your cart yet
          </p>
          <LongButtons
            to="/allProducts"
            text="Explore"
            css={`
              ${themeBG} px-4 border border-c-gold hover:text-c-green
            `}
          />
        </div>
      )}
      <LongButtons
        to="/products"
        text="Back to products"
        css={`
        bg-[#F1FFFD] border w-full hover:text-black hover:border border-c-gold py-6
        `}
      />
    </div>
  );
};

export default CartPage;
