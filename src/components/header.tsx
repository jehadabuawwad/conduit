import * as React from "react";
import "../style/header.css";
import { IHeader } from "../interfaces/components";
import { Link, useHistory } from "react-router-dom";
const Header: React.FunctionComponent<IHeader> = (props) => {
  const isLogged = localStorage.getItem("token");
  const history = useHistory();
  const handleSignOut = () => {
    localStorage.clear();
    setTimeout(() => {
      history.push("/");
      window.location.reload();
    }, 50);
  };

  return (
    <>
      <header>
        <Link id='navbar-brand' to='/'>
          conduit
        </Link>
        <nav>
          <div id='links'>
            <Link to='/'>Home</Link>

            {isLogged ? (
              <Link onClick={handleSignOut} to='/sign-in'>
                Sign Out
              </Link>
            ) : (
              <>
                <Link to='/sign-in'>Sign In</Link>
                <Link to='/sign-up'>Sign Up</Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
