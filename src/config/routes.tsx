import * as React from "react";
import { IProtectedRoute } from "../interfaces/route";
import { Route } from "react-router-dom";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import { useSelector, RootStateOrAny } from "react-redux";

export const ProtectedRoute: React.FunctionComponent<IProtectedRoute> = ({
  component: Component,
  ...rest
}: IProtectedRoute) => {
  const isLogged = useSelector((state: RootStateOrAny) => state.Token);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogged ? <SignIn name='Sign In' /> : <Component {...props} />
      }
    />
  );
};
