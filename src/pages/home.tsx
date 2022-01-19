import React from "react";
import Hero from "../components/hero";
import Post from "../components/post";
import IPage from "../interfaces/pages";
import "../style/home.css";
const HomePage: React.FunctionComponent<IPage> = (props) => {
  return (
    <div>
      <Hero name="Hero" />
      <Post name="Post"/>
    </div>
  );
};

export default HomePage;
