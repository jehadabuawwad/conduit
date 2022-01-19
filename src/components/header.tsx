import * as React from "react";
import { IHeader } from "../interfaces/components";
import "../style/header.css";
const Header: React.FunctionComponent<IHeader> = (props) => {
  return (
    <div>
      <header>
        <a id="navbar-brand" href="/">
          conduit
        </a>
        <nav>
          <div id="links">
            <a href="/">Home</a>
            <a href="/sign-in">Sign In</a>
            <a href="/sign-out">Sign Up</a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
