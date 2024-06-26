import React, { useState } from "react";
import { Layout } from "../conmponents";
const FunctionComponent = () => {
  const [color, setColor] = useState("blue");
  const [bgColor, setBgColor] = useState("green");
  const updateBgColor = () => {
    setBgColor("blue");
  };
  return (
    <Layout title="Contact">
      <h1 style={{ color: color, backgroundColor: bgColor }}>
        Function conmponent Page
      </h1>
      <button onClick={() => setColor("red")}>Change Color</button>
      <button onClick={updateBgColor}>Bg Color Change</button>
    </Layout>
  );
};
export default FunctionComponent;
