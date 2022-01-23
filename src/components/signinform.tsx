import * as React from "react";
import { IForm } from "../interfaces/components";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { SignIn } from "../actions";
import { useState } from "react";
import { login } from "../services/authService";
const SignInForm: React.FunctionComponent<IForm> = (props) => {
  const initalState = { email: "", password: "" };
  const dispatch = useDispatch();
  const [data, setData] = useState(initalState);
  const info = useSelector((state: RootStateOrAny) => state.UserInfo);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
    dispatch(SignIn(data));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(info.email, info.password);
    setTimeout(() => {
      window.location.reload();
    }, 250);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <fieldset className="form-group">
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            placeholder="Email"
            value={data.email}
            name="email"
          />
        </fieldset>
        <fieldset className="form-group">
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            placeholder="Password"
            value={data.password}
            name="password"
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
