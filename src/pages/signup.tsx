import React from "react";
import IPage from "../interfaces/pages";
import "../style/signup.css";
import { Link } from "react-router-dom";
import RegisterForm from "../components/registerform";
const SignUp: React.FunctionComponent<IPage> = (props) => {
  return (
    <div className="grid-container">
      <div className="grid-col">
        <div className="grid-row">
          <h1 className="text-center">Sign Up</h1>
          <Link className="text-register" to="/sign-in">
            Have an account?
          </Link>
        </div>
        <div className="grid-row">
          <RegisterForm name="Register Form" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
