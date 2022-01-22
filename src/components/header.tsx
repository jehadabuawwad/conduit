import * as React from "react";
import { IHeader } from "../interfaces/components";
import "../style/header.css";
import { Link, Redirect } from "react-router-dom";
const Header: React.FunctionComponent<IHeader> = (props) => {
  const isLogged = localStorage.getItem("token");
  const handleSignOut = () => {
    localStorage.clear();
    setTimeout(() => {
      const isLogged = Boolean(localStorage.getItem("token"));
      document.location.reload();
    }, 250);
  };
  if (!isLogged) {
    return (
      <>
        <Redirect to="/sign-in" />;
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
  }
  return (
    <>
      <Redirect to="/" />;
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

export default Header;
