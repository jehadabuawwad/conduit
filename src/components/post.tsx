import * as React from "react";
import { IPost } from "../interfaces/components";
import "../style/post.css";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { CollectData } from "../actions";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { config } from '../config/config';
const Post: React.FunctionComponent<IPost> = (props) => {
  const data = useSelector((state: RootStateOrAny) => state.data);
  const selectedTag = useSelector((state: RootStateOrAny) => state.selectedTag);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      axios
        .get(config.postUrl)
        .then((response) => {
          dispatch(CollectData(response.data.articles));
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, [dispatch]);
  if (selectedTag) {
    var filtered: any = [];
    data.forEach((item: any) => {
      const tag = item.tagList;
      if (tag.includes(selectedTag)) {
        filtered.push(item);
      }
    });
  } else {
    filtered = data;
  }

  return (
    <>
      <hr />
      {filtered.map((item: any, idx: any) => {
        return (
          <div>
            <div className="article-preview">
              <div className="article-meta">
                <Link className="post-link" to="">
                  <img
                    alt="missing"
                    className="post-icon"
                    src="https://api.realworld.io/images/demo-avatar.png"
                  />
                </Link>
                <div className="info">
                  <Link
                    className="author"
                    to="https://react-redux.realworld.io/#/@Gerome?_k=w6xx7a"
                  >
                    {item.author.username}
                  </Link>
                  <span className="date">
                    <Moment>{item.createdAt}</Moment>
                  </span>
                </div>
                <div className="likes">
                  <button className="like-button">
                    <Icon icon="ant-design:heart-filled" />
                    <p style={{ display: "inline", marginLeft: 5 }}>
                      {item.favoritesCount}
                    </p>
                  </button>
                </div>
              </div>
              <Link className="preview-link" to="">
                <h1>{item.title}</h1>
                <p>{item.description}n</p>
                <div id="read">Read more...</div>
                <ul className="list">
                  {item.tagList &&
                    item.tagList.map((tag: string, idx: number) => (
                      <li
                        key={idx}
                        style={{ padding: 5, display: "inline" }}
                        className="tags-list"
                      >
                        {tag}
                      </li>
                    ))}
                </ul>
              </Link>
              <hr />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
