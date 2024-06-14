import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import PageNotFound from "../pages/page-not-found";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
