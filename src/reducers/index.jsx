import DataReducer from "./dataReducer";
import TagSelect from "./tagSelect";
import { combineReducers } from "redux";

export const AllReducers = combineReducers({
  data: DataReducer,
  selectedTag: TagSelect,
});
