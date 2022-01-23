import * as React from "react";
import { IForm } from "../interfaces/components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../services/authService";
import { SignIn } from "../actions";
const LoginForm: React.FunctionComponent<IForm> = (props) => {
  interface UserData {
    password: string;
    email: string;
  }
  const initialState = {
    password: "",
    email: "",
  };
  const [data, setData] = useState<UserData>(initialState);
  const dispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //Dont Use ..>> // setData({ ...data, [event.target.name]: event.target.value });
    setData((prev: UserData) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    dispatch(SignIn(data));
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(data.email, data.password);
    await setTimeout(function () {
      window.location.reload();
    }, 500);
  };
  return (
    <>
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
    </>
  );
};

export default LoginForm;
