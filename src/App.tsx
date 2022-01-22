import React from "react";
import "./App.css";
import routes from "./config/routes";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import SignIn from "./pages/signin";
const App: React.FunctionComponent<{}> = (props) => {
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
