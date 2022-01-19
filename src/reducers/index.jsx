import Reducer_1 from "./reducer1";
import Reducer_2 from "./reducer2";
import { combineReducers } from "redux";

export const AllReducers = combineReducers({
  reducer_1: Reducer_1,
  reducer_2: Reducer_2,
});
