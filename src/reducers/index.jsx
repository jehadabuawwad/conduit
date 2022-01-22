import DataReducer from "./dataReducer";
import TagSelect from "./tagSelect";
import UserInfo from "./userInfo";
import { combineReducers } from "redux";

export const AllReducers = combineReducers({
  data: DataReducer,
  selectedTag: TagSelect,
  UserInfo: UserInfo,
});
