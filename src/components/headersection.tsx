import * as React from "react";
import "../style/header.css";
import { IHeader } from "../interfaces/components";
import { Link } from "react-router-dom";
const HeaderSection: React.FunctionComponent<IHeader> = (props) => {
  const isLogged = localStorage.getItem("token");
  const handleSignOut = () => {
    localStorage.clear();
    setTimeout(() => {
      document.location.reload();
    }, 250);
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

            {isLogged ? (
              <Link onClick={handleSignOut} to="/sign-in">
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

export default HeaderSection;
