import * as React from "react";
import { IForm } from "../interfaces/components";
const RegisterForm: React.FunctionComponent<IForm> = (props) => {
  return (
    <>
      <form>
        <fieldset>
          <fieldset className="form-group">
            <input
              type="username"
              className="form-control"
              placeholder="Username"
            />
          </fieldset>
          <fieldset className="form-group">
            <input type="email" className="form-control" placeholder="Email" />
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
    </>
  );
};

export default RegisterForm;
