import * as React from "react";
import { IForm } from "../interfaces/components";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { signUp } from "../actions";
import { useState } from "react";
import * as userService from "../services/userService";
const RegisterForm: React.FunctionComponent<IForm> = (props) => {
  interface UserData {
    name: string;
    password: string;
    email: string;
  }
  const initialState = {
    name: "",
    password: "",
    email: "",
  };
  const [data, setData] = useState<UserData>(initialState);
  const dispatch = useDispatch();
  const info = useSelector((state: RootStateOrAny) => state.userInfo);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
    dispatch(signUp(data));
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await userService.register(info);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset>
          <fieldset className="form-group">
            <input
              onChange={onChange}
              name="name"
              type="text"
              className="form-control"
              placeholder="Name"
              value={data.name}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              onChange={onChange}
              name="email"
              type="text"
              className="form-control"
              placeholder="Email"
              value={data.email}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              onChange={onChange}
              name="password"
              type="text"
              className="form-control"
              placeholder="Password"
              value={data.password}
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
