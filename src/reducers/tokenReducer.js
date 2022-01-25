const TokenReducer = (state = "", action) => {
  switch (action.type) {
    case "token":
      return action.data;
    case "clearToken":
      return "";
    default:
      return state;
  }
};

export default TokenReducer;
