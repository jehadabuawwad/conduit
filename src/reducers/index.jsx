import DataReducer from "./dataReducer";
import { combineReducers } from "redux";

export const AllReducers = combineReducers({
  data: DataReducer,
});
