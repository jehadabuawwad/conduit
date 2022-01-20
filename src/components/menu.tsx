import * as React from "react";

import { IMenu } from "../interfaces/components";
import "../style/menu.css";
const Menu: React.FunctionComponent<IMenu> = (props) => {
  return (
    <div>
      <div className="feed-toggle">
        <ul className="nav">
          <li className="nav-item">
            <a href="" className="nav-link">
              Global Feed
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
