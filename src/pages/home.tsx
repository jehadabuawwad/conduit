import React from "react";
import Hero from "../components/hero";
import Post from "../components/post";
import IPage from "../interfaces/pages";
import "../style/home.css";

const HomePage: React.FunctionComponent<IPage> = (props) => {
  return (
    <>
      <Hero name="Hero" />
      <div className="grid-container">
        <div className="grid-item item1">
          <Post name="Post"/>
        </div>
        <div className="grid-item item2">THIS COMPONENT FOR TAGS</div>
      </div>
    </>
  );
};

export default HomePage;
