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
//lank" style="position:fixed;bottom:0;width:100%;background:linear-gradient(#485563, #29323c);text-align: center;padding:15px;box-shadow:0 5px 5px 5px rgba(0,0,0,0.4);z-index:999;color:#fff;font-size:1.5rem;display:block"><i class="ion-social-github"></i>&nbsp;&nbsp;Fork on GitHub</a>
