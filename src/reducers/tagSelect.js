const TagSelect = (state = "introduction", action) => {
  switch (action.type) {
    case "selectedTag":
      return state;
    default:
      return state;
  }
};

export default TagSelect;
