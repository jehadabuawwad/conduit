import * as React from "react";
import { ITagsBox } from "../interfaces/components";
import "../style/tagsbox.css";
import { collectSelectedTag } from "../actions";
import { useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { Link } from "react-router-dom";
import { config } from "../config/config";
import useResource from "../services/useResource";
const TagsBox: React.FunctionComponent<ITagsBox> = (props) => {
  const dispatch = useDispatch();
  const selectedTags = useSelector((state: RootStateOrAny) => state.Tags);
  const { getTags } = useResource();

  useEffect(() => {
    getTags(config.tagsUrl);
  }, [getTags]);

  return (
    <div className='sidebar'>
      <p>Popular Tags</p>
      <div className='tag-list'>
        {selectedTags.map((item: string) => (
          <Link
            to='#'
            key={item}
            className='tag'
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
