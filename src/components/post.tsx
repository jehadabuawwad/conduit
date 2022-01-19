import * as React from "react";
import { IPost } from "../interfaces/components";
import "../style/post.css";

import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
const Post: React.FunctionComponent<IPost> = (props) => {
  const data = useSelector((state: RootStateOrAny) => state.data);

  return <div></div>;
};

export default Post;
