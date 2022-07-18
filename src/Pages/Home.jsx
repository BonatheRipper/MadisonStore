import React from "react";
import Header from "../Components/Header";
import WelcomeHome from "../Components/WelcomeHome";
import Categories from "../Components/Categories";
const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F1FFFD] ">
        <WelcomeHome />
        <Categories />
      </div>
    </>
  );
};

export default Home;
