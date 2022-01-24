import * as React from "react";
import { IForm } from "../interfaces/components";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { SignIn } from "../actions";
import { useState } from "react";
import useAuth from "../services/authService";
import { useHistory } from "react-router-dom";
const SignInForm: React.FunctionComponent<IForm> = (props) => {
  const history = useHistory();
  interface UserData {
    password: string;
    email: string;
  }

  const initalState = { email: "", password: "" };
  const dispatch = useDispatch();
  const { login } = useAuth();
  const [data, setData] = useState(initalState);
  const info = useSelector((state: RootStateOrAny) => state.UserInfo);

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
    await login(info.email, info.password);
    await history.push("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <fieldset className='form-group'>
          <input
            onChange={onChange}
            type='text'
            className='form-control'
            placeholder='Email'
            value={data.email}
            name='email'
          />
        </fieldset>
        <fieldset className='form-group'>
          <input
            onChange={onChange}
            type='text'
            className='form-control'
            placeholder='Password'
            value={data.password}
            name='password'
          />
        </fieldset>
        <button className='btn' type='submit'>
          Sign in
        </button>
      </fieldset>
    </form>
  );
};

export default SignInForm;
