import * as React from "react";
import "../style/header.css";
import { IHeader } from "../interfaces/components";
import { Link } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";
import useAuth from "../services/authService";
const Header: React.FunctionComponent<IHeader> = (props) => {
  const isLogged = useSelector((state: RootStateOrAny) => state.Token);
  const { logout } = useAuth();
  return (
    <>
      <header>
        <Link id='navbar-brand' to='/'>
          conduit
        </Link>
        <nav>
          <div id='links'>
            {isLogged ? (
              <>
                <Link to='/'>Home</Link>
                <Link onClick={logout} to='/sign-in'>
                  Sign Out
                </Link>
              </>
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
