import * as React from "react";
import { IProtectedRoute } from "../interfaces/components";
import { Route } from "react-router-dom";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";

export const ProtectedRoute: React.FunctionComponent<IProtectedRoute> = ({
  component: Component,
  ...rest
}: IProtectedRoute) => {
  const isAuth = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? (
          <SignIn name='Sign In' props={props} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export const PublicRoute: React.FunctionComponent<IProtectedRoute> = ({
  component: Component,
  ...rest
}: IProtectedRoute) => {
  const isAuth = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? <SignUp name='Sign Up' /> : <Component {...props} />
      }
    />
  );
};
