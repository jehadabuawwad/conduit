import React from "react";
import Hero from "../components/hero";
import Post from "../components/post";
import IPage from "../interfaces/pages";
import "../style/home.css";
import TagsBox from "../components/tagsbox";
import Menu from "../components/menu";

const HomePage: React.FunctionComponent<IPage> = (props) => {
  return (
    <>
      <Hero name="Hero" />
      <div className="grid-container">
        <div className="grid-item item1">
          <Menu name="Menu" />
          <Post name="Post" />
        </div>
        <div className="grid-item item2">
          <TagsBox name="Tags Box" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
