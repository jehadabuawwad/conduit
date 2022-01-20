const TagSelect = (state = "", action) => {
  switch (action.type) {
    case "string":
      return action.data;
    default:
      return state;
  }
};

export default TagSelect;
