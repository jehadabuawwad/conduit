import * as React from "react";
import { IHero } from "../interfaces/components";
import "../style/hero.css";
const Hero: React.FunctionComponent<IHero> = (props) => {
  return (
    <div id="banner">
      <div className="container">
        <h1 className="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};

export default Hero;
