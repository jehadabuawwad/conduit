import { data } from "../static/data";

const DataReducer = (state = data, action) => {
  switch (action.type) {
    case "type_1":
      return state;

    default:
      return state;
  }
};

export default DataReducer;
