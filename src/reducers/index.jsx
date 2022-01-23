import DataReducer from "./dataReducer";
import TagSelect from "./tagSelect";
import UserInfo from "./userInfo";
import { combineReducers } from "redux";
import TagsReducer from "./tagsReducer";
export const AllReducers = combineReducers({
  data: DataReducer,
  selectedTag: TagSelect,
  UserInfo: UserInfo,
  Tags: TagsReducer,
});
