import React from "react";
import "../style/signin.css";
import { Link } from "react-router-dom";
import SignInForm from "../components/signinform";
import IPage from "../interfaces/pages";

const SignIn: React.FunctionComponent<IPage> = (props) => {
  return (
    <div className='grid-container'>
      <div className='grid-col'>
        <div className='grid-row'>
          <h1 className='text-center'>Sign In</h1>
          <Link className='text-register' to='/sign-up'>
            Need an account?
          </Link>
        </div>
        <div className='grid-row'>
          <SignInForm name='Sing In' />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
