import React from "react";
import {  Card,  Layout } from "../conmponents";
import "./home.css";
import { FaFacebook } from "react-icons/fa";
import { SiYoutubekids } from "react-icons/si";

const Home = () => {
  const CardList = [
    {
      icon: "https://ihunar.com/static/software-development-fd2689b86be84f80acea358918d09549.png",
      heading: "Software Development",
      paragraph:
        "Making software programs are not an easy job, but our Software developers are very experienced and familiar with all modern tools.",
    },
    {
      icon: "https://ihunar.com/static/web-60a248a5620f89fa664ec599a06b323d.png",
      heading: "Web Development",
      paragraph:
        "Our Flexible and Expert IT team can turn your local or international business or idea into Responsive and attractive website.",
    },
    {
      icon: "https://ihunar.com/static/software-development-fd2689b86be84f80acea358918d09549.png",
      heading: "Software Development",
      paragraph:
        "Making software programs are not an easy job, but our Software developers are very experienced and familiar with all modern tools.",
    },
    {
      icon: "https://ihunar.com/static/web-60a248a5620f89fa664ec599a06b323d.png",
      heading: "Web Development",
      paragraph:
        "Our Flexible and Expert IT team can turn your local or international business or idea into Responsive and attractive website.",
    },
    {
      icon: "https://ihunar.com/static/software-development-fd2689b86be84f80acea358918d09549.png",
      heading: "Software Development",
      paragraph:
        "Making software programs are not an easy job, but our Software developers are very experienced and familiar with all modern tools.",
    },
    {
      icon: "https://ihunar.com/static/web-60a248a5620f89fa664ec599a06b323d.png",
      heading: "Web Development",
      paragraph:
        "Our Flexible and Expert IT team can turn your local or international business or idea into Responsive and attractive website.",
    },
  ];
  return (
    <div>
      <Layout title="Home">
        <h1>Home Page</h1>
        <FaFacebook size={250} color="red"/>
        <SiYoutubekids size={500} color="green"/>
        <Card data={CardList} />
      </Layout>
    </div>
  );
};
export default Home;
