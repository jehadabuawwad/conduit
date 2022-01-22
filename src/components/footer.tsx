import * as React from "react";
import { IFooter } from "../interfaces/components";
import "../style/footer.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
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
