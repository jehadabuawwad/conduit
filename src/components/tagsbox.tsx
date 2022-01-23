import * as React from "react";
import { ITagsBox } from "../interfaces/components";
import "../style/tagsbox.css";
import { collectSelectedTag } from "../actions";
import { useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { CollectTags } from "../actions";
import { config } from "../config/config";
const TagsBox: React.FunctionComponent<ITagsBox> = (props) => {
  const dispatch = useDispatch();
  const selectedTags = useSelector((state: RootStateOrAny) => state.Tags);
  useEffect(() => {
    axios
      .get(config.tagsUrl)
      .then((response) => {
        dispatch(CollectTags(response.data.tags));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(selectedTags);
  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        {selectedTags.map((item: string, idx: number) => (
          <Link
            to="#"
            key={idx}
            className="tag"
            onClick={() => dispatch(collectSelectedTag(item))}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsBox;
