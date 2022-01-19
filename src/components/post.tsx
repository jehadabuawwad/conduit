import * as React from "react";
import { IPost } from "../interfaces/components";
import "../style/post.css";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { Action_1 } from "../actions";
const Post: React.FunctionComponent<IPost> = (props) => {
  const data = useSelector((state: RootStateOrAny) => state.data);
  const dispatch = useDispatch();
  dispatch(Action_1());
  return (
    <div>
      {data.map((item: any, idx: any) => {
        return (
          <div>
            <div className="article-preview">
              <div className="article-meta">
                <a className="post-link" href="">
                  <img
                    className="post-icon"
                    src="https://api.realworld.io/images/demo-avatar.png"
                  />
                </a>
                <div className="info">
                  <a
                    className="author"
                    href="https://react-redux.realworld.io/#/@Gerome?_k=w6xx7a"
                  >
                    {item.author}
                  </a>
                  <span className="date">{item.date}</span>
                </div>
                <div className="likes">
                  <button className="like-button">
                    <Icon icon="ant-design:heart-filled" />
                    <p style={{ display: "inline", marginLeft: 5 }}>
                      {item.numOfLikes}
                    </p>
                  </button>
                </div>
              </div>
              <a className="preview-link" href="">
                <h1>{item.title}</h1>
                <p>{item.subtitle}n</p>
                <span>Read more...</span>
                <ul className="list">
                  {item.tags.map((item: string) => (
                    <li style={{ padding: 5, display:"inline" }} className="tags-list">
                      {item}
                    </li>
                  ))}
                </ul>
              </a>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;