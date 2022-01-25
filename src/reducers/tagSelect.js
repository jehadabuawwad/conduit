const TagSelect = (state = "", action) => {
  switch (action.type) {
    case "string":
      return action.data;
    case "home":
      return "";
    default:
      return state;
  }
};

export default TagSelect;
