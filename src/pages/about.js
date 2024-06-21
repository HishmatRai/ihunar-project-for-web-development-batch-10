import React from "react";
import {  Card,  Layout } from "../conmponents";
const About = () => {
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
  ];
  return (
    <Layout title="About">
      <h1>About Page</h1>
      <Card data={CardList} />
    </Layout>
  );
};
export default About;
