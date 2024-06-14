import React from "react";
import {Link,useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate  =useNavigate()
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>

      <hr />
      <button onClick={()=> window.location.assign("/")}>Home</button>
      <button onClick={()=> window.location.assign("/about")}>About</button>
      <hr />
      <h1>Router navigation</h1>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <button onClick={()=>navigate("/")}>
     Home
      </button>
      <button onClick={()=>navigate('/about')}>
     About
      </button>
    </div>
  );
};
export default Home;
