import * as React from "react";
import { IHeader } from "../interfaces/components";
import "../style/header.css";
import { Link } from "react-router-dom";
const Header: React.FunctionComponent<IHeader> = (props) => {
  const loggedIn = Boolean(localStorage.getItem("token"));
  const handleLogOut = () => {
    localStorage.clear();
    setTimeout(function () {
      window.location.reload();
    }, 500);
  };
  return (
    <>
      <header>
        <Link id="navbar-brand" to="/">
          conduit
        </Link>
        <nav>
          <div id="links">
            <Link to="/">Home</Link>
            {loggedIn ? (
              <Link onClick={handleLogOut} to="/">
                Sign Out
              </Link>
            ) : (
              <>
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
