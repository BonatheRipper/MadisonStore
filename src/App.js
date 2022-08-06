import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { useStateContext } from "./context/Statecontext";
import "react-toastify/dist/ReactToastify.css";
import AboutPage from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Four0Four from "./Pages/Four0Four";

import AllProducts from "./Pages/AllProducts";
import ProductsByCategory from "./Pages/ProductsByCategory";
import Account from "./Pages/User/Account";
import UpdateAccount from "./Pages/User/UpdateAccount";
import ShippingAddress from "./Payments/ShippingAddress";
import PlaceOrder from "./Payments/placeOrder";
import PayForOrder from "./Payments/PayForOrder";
import "./index.css";
import "./App.css";
import SingleOrderHistory from "./Pages/User/SingleOrderHistory";
import CategoriesPage from "./Pages/CategoriesPage";
import OrderHistory from "./Pages/User/OrderHistory";
import AdminHome from "./Pages/Admin/AdminHome";
const App = () => {
  const { themeBG } = useStateContext();
  return (
    <BrowserRouter>
      <div
        className={`
      ${themeBG ? `text-c-gold  ` : ""} relative`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<UpdateAccount />} />
          <Route path="/products/:id" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shipping" element={<ShippingAddress />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/order/orderhistory" element={<OrderHistory />} />
          <Route
            path="/order/orderhistory/:orderId"
            element={<SingleOrderHistory />}
          />
          <Route path="/order/:orderId" element={<PayForOrder />} />
          <Route path="/shop" element={<AllProducts />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/shop/:catType" element={<ProductsByCategory />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="*" element={<Four0Four />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
// npm link ../node_modules/react
export default App;
