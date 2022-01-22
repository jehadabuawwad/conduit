const UserInfo = (state = {}, action) => {
  switch (action.type) {
    case "SignIn":
      return action.data;
    case "SignUp":
      return action.data;
    default:
      return state;
  }
};

export default UserInfo;
