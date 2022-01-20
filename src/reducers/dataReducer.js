import { data } from "../static/data";

const DataReducer = (state = data, action) => {
  switch (action.type) {
    case "object":
      return action.data;
    default:
      return state;
  }
};

export default DataReducer;
