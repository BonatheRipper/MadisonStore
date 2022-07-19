import React from "react";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Four0Four from "./Pages/Four0Four";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { useStateContext } from "./context/Statecontext";
import LoadingScreen from "./Screens/LoadingScreen";
import AboutPage from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Categories from "./Components/Categories";
import ThemeSettings from "./Components/ThemeSettings";
const App = () => {
  const { themeBG } = useStateContext();

  return (
    <div
      className={`
      ${themeBG ? `text-c-gold  ` : ""} relative`}
    >
      <BrowserRouter>
        {/* <LoadingScreen /> */}
        <ThemeSettings />

        <Navbar />
        <Sidebar />

        <Routes>
          <Route component={<Four0Four />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
// https://maplestore.netlify.app/
