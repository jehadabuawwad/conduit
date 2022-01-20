import * as React from "react";

import { ITagsBox } from "../interfaces/components";
import "../style/tagsbox.css";
const TagsBox: React.FunctionComponent<ITagsBox> = (props) => {
  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        <a href="" className="tag">
          welcome
        </a>
        <a href="" className="tag">
          implementations
        </a>
        <a href="" className="tag">
          codebaseShow
        </a>
        <a href="" className="tag">
          introduction
        </a>
      </div>
    </div>
  );
};

export default TagsBox;
