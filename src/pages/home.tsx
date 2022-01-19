import React from "react";
import Hero from "../components/hero";
import IPage from "../interfaces/pages";
import "../style/home.css";
const HomePage: React.FunctionComponent<IPage> = (props) => {
  return (
    <div>
      <Hero name="Hero" />
    </div>
  );
};

export default HomePage;
