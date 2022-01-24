import * as React from "react";
import Moment from "react-moment";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";
import { IPost } from "../interfaces/components";
import useResource from "../services/useResource";
import "../style/post.css";
import { config } from "../config/config";

const Post: React.FunctionComponent<IPost> = (props) => {
  let data: any = useSelector((state: RootStateOrAny) => state.data);
  const selectedTag = useSelector((state: RootStateOrAny) => state.selectedTag);
  const { getResource } = useResource();

  useEffect(() => {
    getResource(config.postUrl);
  }, [getResource]);

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
      {filtered.map((item: any) => {
        return (
          <div>
            <div className='article-preview'>
              <div className='article-meta'>
                <Link className='post-link' to=''>
                  <img
                    alt='missing'
                    className='post-icon'
                    src='https://api.realworld.io/images/demo-avatar.png'
                  />
                </Link>
                <div className='info'>
                  <Link className='author' to='#'>
                    {item.author.username}
                  </Link>
                  <span className='date'>
                    <Moment>{item.createdAt}</Moment>
                  </span>
                </div>
                <div className='likes'>
                  <button className='like-button'>
                    <Icon icon='ant-design:heart-filled' />
                    <p style={{ display: "inline", marginLeft: 5 }}>{item.favoritesCount}</p>
                  </button>
                </div>
              </div>
              <Link className='preview-link' to=''>
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
                <div id='read'>Read more...</div>
                <ul className='list'>
                  {item.tagList &&
                    item.tagList.map((tag: string, idx: number) => (
                      <li
                        key={item}
                        style={{ padding: 5, display: "inline" }}
                        className='tags-list'
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
