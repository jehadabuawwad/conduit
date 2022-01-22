const userInfo = (state = {}, action) => {
  switch (action.type) {
    case "login":
      return action.data;
    case "signUp":
      return action.data;
    default:
      return state;
  }
};

export default userInfo;
