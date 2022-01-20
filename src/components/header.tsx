import * as React from "react";
import { IHeader } from "../interfaces/components";
import "../style/header.css";
import { Link } from "react-router-dom";
const Header: React.FunctionComponent<IHeader> = (props) => {
  return (
    <div>
      <header>
        <a id="navbar-brand" href="/">
          conduit
        </a>
        <nav>
          <div id="links">
            <Link to="/">Home</Link>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
