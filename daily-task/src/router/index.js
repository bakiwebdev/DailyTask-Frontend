import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";
import Today from "../pages/today/index";
import Personal from "../pages/personal/index";
import App from "../App";
import NavBar from "../components/nav_bar";
const PageRouter = () => {
  return (
    <div className="flex ">
      {/* primary navigation */}
      <NavBar />
      {/* page main body */}
      <div className="flex-1 bg-green-300">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="today" element={<Today />} />
            <Route path="personal" element={<Personal />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default PageRouter;
