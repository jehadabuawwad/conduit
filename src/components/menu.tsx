import "../style/menu.css";
import { IMenu } from "../interfaces/components";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { Link } from "react-router-dom";
import { SetEmpty } from "../actions";
const Menu: React.FunctionComponent<IMenu> = (props) => {
  const dispatch = useDispatch();
  const selectedTag = useSelector((state: RootStateOrAny) => state.selectedTag);
  const handleTagSelection = () => {
    const element: any = document.getElementById("HomeMenu");
    element.style.borderBottom = "1px solid rgb(214, 214, 214)";
    return (
      <Link to="" className="selceted-tag">
        # {selectedTag}
      </Link>
    );
  };

  const handleTagUnSelect = () => {
    const element: any = document.getElementById("HomeMenu");
    element.style.borderBottom = "2px solid #5cb85c";
    dispatch(SetEmpty());
  };
  return (
    <>
      <div className="feed-toggle">
        <ul className="nav">
          <li className="nav-item">
            <Link
              onClick={handleTagUnSelect}
              id="HomeMenu"
              to=""
              className="nav-link"
            >
              Global Feed
            </Link>
            {selectedTag && handleTagSelection()}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
