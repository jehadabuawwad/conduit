import * as React from "react";
import { IPost } from "../interfaces/components";
import "../style/post.css";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { CollectData } from "../actions";
import { useEffect } from "react";
import axios from "axios";
const Post: React.FunctionComponent<IPost> = (props) => {
  const data = useSelector((state: RootStateOrAny) => state.data);
  const selectedTag = useSelector((state: RootStateOrAny) => state.selectedTag);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      console.log("dasd");

      axios
        .get("https://api.realworld.io/api/articles?limit=10&offset=0")
        .then((response) => {
          console.log(response.data.articles);

          dispatch(CollectData(response.data.articles));
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);
  if (selectedTag) {
    var filtered: any = [];
    data.map((item: any) => {
      const tag = item.tagList;
      if (tag.includes(selectedTag)) {
        filtered.push(item);
      }
    });
  } else {
    filtered = data;
  }

  return (
    <div>
      <hr />
      {filtered.map((item: any, idx: any) => {
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
                    {item.author.username}
                  </a>
                  <span className="date">{item.createdAt}</span>
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
              <a className="preview-link" href="">
                <h1>{item.title}</h1>
                <p>{item.description}n</p>
                <div id="read">Read more...</div>
                <ul className="list">
                  {item.tagList &&
                    item.tagList.map((tag: string) => (
                      <li
                        style={{ padding: 5, display: "inline" }}
                        className="tags-list"
                      >
                        {tag}
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
