import React from "react";
import IPage from "../interfaces/pages";
import "../style/signin.css";
const SignIn: React.FunctionComponent<IPage> = (props) => {
  return (
    <div className="grid-container">
      <div className="grid-col">
        <div className="grid-row">
          <h1 className="text-center">Sign In</h1>
          <a className="text-register" href="/register">
            Need an account?
          </a>
        </div>
        <div className="grid-row">
          <form>
            <fieldset>
              <fieldset className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </fieldset>
              <button className="btn" type="submit">
                Sign in
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
