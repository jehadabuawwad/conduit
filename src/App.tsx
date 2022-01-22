import React from "react";
import "./App.css";
import routes from "./config/routes";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import SignIn from "./pages/signin";
import HomePage from "./pages/home";

const App: React.FunctionComponent<{}> = (props) => {
  const loggedIn = Boolean(localStorage.getItem("token"));
  return (
    <>
      <Header name="Header" />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
            ></Route>
          );
        })}
      </Switch>
      <Footer name="Footer" />
    </>
  );
};

export default App;
