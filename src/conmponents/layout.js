import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const Layout = (props) => {
  return (
    <div>
      <Navbar title={props.title}/>
      {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
