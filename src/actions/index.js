export const CollectData = (data) => {
  return { type: "object", data: data };
};
export const collectSelectedTag = (data) => {
  return { type: "string", data: data };
};
export const CollectTags = (data) => {
  return { type: "tags", data: data };
};
export const SetEmpty = () => {
  return { type: "home", data: {} };
};
export const SignIn = (data) => {
  return { type: "SignIn", data: data, loggedIn: false };
};
export const SignUp = (data) => {
  return { type: "SignUp", data: data };
};

export const SetToken = (token) => {
  return { type: "token", data: token };
};
export const ClearToken = () => {
  return { type: "clearToken" };
};
