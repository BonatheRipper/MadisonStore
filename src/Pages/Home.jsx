import React from "react";
import Header from "../Components/Header";
import WelcomeHome from "../Components/WelcomeHome";
import Categories from "../Components/Categories";
import About from "../Components/About";
import Products from "../Components/Products";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div id="Welcome&Categories" className="bg-[#F1FFFD] ">
        <WelcomeHome />
        <Categories />
        <About />
        <Products />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};

export default Home;
