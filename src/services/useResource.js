import axios from "axios";
import { useDispatch } from "react-redux";
import { CollectData } from "../actions/index";
import { CollectTags } from "../actions";

export default function useResource() {
  const dispatch = useDispatch();
  const getResource = async (url) => {
    await axios
      .get(url)
      .then((response) => {
        dispatch(CollectData(response.data.articles));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getTags = (url) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(CollectTags(response.data.tags));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return {
    getResource,
    getTags,
  };
}
