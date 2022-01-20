import * as React from "react";
import { Link } from "react-router-dom";
import { ITagsBox } from "../interfaces/components";
import "../style/tagsbox.css";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { collectSelectedTag } from "../actions";
const TagsBox: React.FunctionComponent<ITagsBox> = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        <Link
          onClick={() => dispatch(collectSelectedTag("welcome"))}
          to=""
          className="tag"
        >
          welcome
        </Link>
        <Link
          to=""
          onClick={() => dispatch(collectSelectedTag("implementations"))}
          className="tag"
        >
          implementations
        </Link>
        <Link
          to=""
          onClick={() => dispatch(collectSelectedTag("codebaseShow"))}
          className="tag"
        >
          codebaseShow
        </Link>
        <Link
          to=""
          onClick={() => dispatch(collectSelectedTag("introduction"))}
          className="tag"
        >
          introduction
        </Link>
      </div>
    </div>
  );
};

export default TagsBox;
