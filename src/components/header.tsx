import * as React from "react";
import "../style/header.css";
import { IHeader } from "../interfaces/components";
import { Redirect } from "react-router-dom";
import HeaderSection from "./headersection";
const Header: React.FunctionComponent<IHeader> = (props) => {
  const isLogged = localStorage.getItem("token");
  if (!isLogged) {
    return (
      <>
        <Redirect to="/sign-in" />;
        <HeaderSection name="Header Section" />
      </>
    );
  }
  return (
    <>
      <Redirect to="/" />;
      <HeaderSection name="Header Section" />
    </>
  );
};

export default Header;
