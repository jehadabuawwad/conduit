import React from "react";
import "./App.css";
import routes from "./config/routes";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App: React.FunctionComponent<{}> = (props) => {
  return (
    <>
      <ToastContainer />
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
