import { data } from "../static/data";

const DataReducer = (state = data, action) => {
  
  switch (action.type) {
    case "allData":
      return state;
    default:
      return state;
  }
};

export default DataReducer;
