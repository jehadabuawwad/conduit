import * as React from "react";
import { IPost } from "../interfaces/components";
import "../style/post.css";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
const Post: React.FunctionComponent<IPost> = (props) => {
  const data = useSelector((state: RootStateOrAny) => state.data);

  return (
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
            Gerome
          </a>
          <span className="date">Wed Nov 24 2021</span>
        </div>
        <div className="likes">
          <button className="like-button">
            <Icon icon="ant-design:heart-filled" />
            <p style={{ display: "inline", marginLeft: 5 }}>111</p>
          </button>
        </div>
      </div>
      <a className="preview-link" href="">
        <h1>Create a new implementation</h1>
        <p>join the community by creating a new implementation</p>
        <span>Read more...</span>
        <ul className="list">
          <li style={{ padding: 5 }} className="tags-list">
            implementations
          </li>
        </ul>
      </a>
      <hr />
    </div>
  );
};

export default Post;
