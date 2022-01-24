import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ProtectedRoute, PublicRoute } from "./config/routes";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
const App: React.FunctionComponent<{}> = (props) => {
  return (
    <>
      <ToastContainer />
      <Header name='Header' />
      <Switch>
        <Route path='/sign-in' component={SignIn}></Route>
        <Route path='/sign-up' component={SignUp}></Route>
        <ProtectedRoute name='Protected Route' component={HomePage} />
        <PublicRoute name='Public Route' component={SignUp} />
      </Switch>
      <Footer name='Footer' />
    </>
  );
};

export default App;
