import * as React from "react";
import "../style/footer.css";
import { IFooter } from "../interfaces/components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const Footer: React.FunctionComponent<IFooter> = (props) => {
  return (
    <>
      <Link
        id="footer-link"
        to="https://github.com/gothinkster/react-redux-realworld-example-app"
        target="_blank"
      >
        <Icon
          style={{
            marginRight: 10,
            marginLeft: "auto",
            verticalAlign: "center",
          }}
          icon="ion:logo-github"
        />
        Fork on GitHub
      </Link>
    </>
  );
};

export default Footer;
