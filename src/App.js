import React from "react";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Four0Four from "./Pages/Four0Four";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { useStateContext } from "./context/Statecontext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutPage from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Categories from "./Components/Categories";
import ThemeSettings from "./Components/ThemeSettings";
import ProductsPage from "./Pages/ProductsPage";
import Footer from "./Components/Footer";
import CartPage from "./Pages/CartPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AllProducts from "./Pages/AllProducts";
import ProductsByCategory from "./Pages/ProductsByCategory";
import Account from "./Pages/Account";
import UpdateAccount from "./Pages/UpdateAccount";
import ShippingAddress from "./Payments/ShippingAddress";
import PlaceOrder from "./Payments/placeOrder";
import PayForOrder from "./Payments/PayForOrder";
import "./index.css";
import "./App.css";
import OrderHistory from "./Pages/OrderHistory";
import SingleOrderHistory from "./Pages/SingleOrderHistory";
const App = () => {
  const { themeBG } = useStateContext();
  return (
    <BrowserRouter>
      <div
        className={`
      ${themeBG ? `text-c-gold  ` : ""} relative`}
      >
        <ToastContainer />
        <ThemeSettings />
        <Navbar />
        <Sidebar />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route component={<Four0Four />} />
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
          <Route path="/categories" element={<Categories />} />
          <Route path="/shop/:catType" element={<ProductsByCategory />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
// npm link ../node_modules/react
export default App;
