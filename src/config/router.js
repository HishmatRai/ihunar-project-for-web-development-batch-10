import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,About,Gallery,PageNotFound,Contact} from './../pages'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
