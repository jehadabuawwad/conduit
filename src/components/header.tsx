import * as React from "react";
import "../style/header.css";
import { IHeader } from "../interfaces/components";
import HeaderSection from "./headersection";
const Header: React.FunctionComponent<IHeader> = (props) => {
  return (
    <>
      <HeaderSection name="Header Section" />
    </>
  );
};

export default Header;
