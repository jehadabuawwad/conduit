import React from "react";
import "./App.css";
import routes from "./config/routes";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
const App: React.FunctionComponent<{}> = (props) => {
  return (
    <div>
      <Header name="Header" />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              exact={route.component}
            ></Route>
          );
        })}
      </Switch>
      <Footer name="Footer" />
    </div>
  );
};

export default App;
