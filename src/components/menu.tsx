import * as React from "react";

import { IMenu } from "../interfaces/components";
import "../style/menu.css";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
const Menu: React.FunctionComponent<IMenu> = (props) => {
  const selectedTag = useSelector((state: RootStateOrAny) => state.selectedTag);
  const handleTagSelection = () => {
    const element: any = document.getElementById("HomeMenu");
    element.style.borderBottom = "1px solid rgb(214, 214, 214)";
    return (
      <a href="" className="selceted-tag">
        # {selectedTag}
      </a>
    );
  };
  return (
    <div>
      <div className="feed-toggle">
        <ul className="nav">
          <li className="nav-item">
            <a id="HomeMenu" href="" className="nav-link">
              Global Feed
            </a>
            {selectedTag && handleTagSelection()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
