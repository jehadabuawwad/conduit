import React from "react";

import "./App.css";
import routes from "./config/routes";
import { Route, Switch } from "react-router-dom";
const App: React.FunctionComponent<{}> = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default App;
