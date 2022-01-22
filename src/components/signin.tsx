import * as React from "react";
import { IForm } from "../interfaces/components";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { SignIn } from "../actions";
import { useState } from "react";
import authService from "../services/authService";
const SignInForm: React.FunctionComponent<IForm> = (props) => {
  const initalState = { email: "", password: "" };
  const dispatch = useDispatch();
  const [data, setData] = useState(initalState);
  const info = useSelector((state: RootStateOrAny) => state.userInfo);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
    dispatch(SignIn(data));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await authService.login(info.email, info.password);
  };
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <fieldset className="form-group">
          <input
            onChange={onChange}
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={data.email}
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            onChange={onChange}
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={data.password}
          />
        </fieldset>
        <button className="btn" type="submit">
          Sign in
        </button>
      </fieldset>
    </form>
  );
};

export default SignInForm;
