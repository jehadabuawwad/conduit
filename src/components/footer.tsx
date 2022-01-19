import * as React from "react";
import { IFooter } from "../interfaces/components";
import "../style/footer.css";
import { Icon } from "@iconify/react";
const Footer: React.FunctionComponent<IFooter> = (props) => {
  return (
    <div>
      <a
        id="footer-link"
        href="https://github.com/gothinkster/react-redux-realworld-example-app"
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
      </a>
    </div>
  );
};

export default Footer;
