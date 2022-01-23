import * as React from "react";
import { IForm } from "../interfaces/components";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { SignUp } from "../actions";
import { useState } from "react";
import { register } from "../services/userService";
const SignUpForm: React.FunctionComponent<IForm> = (props) => {
  interface UserData {
    password: string;
    email: string;
    name: string;
  }
  
  const initalState = { email: "", password: "", name: "" };
  const dispatch = useDispatch();
  const [data, setData] = useState(initalState);
  const info = useSelector((state: RootStateOrAny) => state.UserInfo);
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //Dont Use ..>> // setData({ ...data, [event.target.name]: event.target.value });
    setData((prev: UserData) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    dispatch(SignUp(data));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await register(info);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <fieldset className="form-group">
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            placeholder="Name"
            value={data.name}
            name="name"
          />
        </fieldset>
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

export default SignUpForm;
