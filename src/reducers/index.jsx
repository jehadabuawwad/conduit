import DataReducer from "./dataReducer";
import TagSelect from "./tagSelect";
import { combineReducers } from "redux";
import userInfo from "./userInfo";

export const AllReducers = combineReducers({
  data: DataReducer,
  selectedTag: TagSelect,
  userInfo: userInfo,
});
