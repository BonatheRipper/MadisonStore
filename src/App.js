import React from "react";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Four0Four from "./Pages/Four0Four";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { useStateContext } from "./context/Statecontext";
import LoadingScreen from "./Screens/LoadingScreen";
const App = () => {
  const { themeBG, setTheme, sidebar, setSidebar } = useStateContext();

  return (
    <div
      className={`
      ${themeBG ? `text-c-gold  ` : ""} relative`}
    >
      <BrowserRouter>
        {/* <LoadingScreen /> */}

        <Navbar />
        <Sidebar />

        <Routes>
          <Route component={<Four0Four />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
// https://maplestore.netlify.app/
