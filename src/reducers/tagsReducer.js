const TagsReducer = (state = [], action) => {
  switch (action.type) {
    case "tags":
      return action.data;
    default:
      return state;
  }
};

export default TagsReducer;
