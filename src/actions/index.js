export const CollectData = (data) => {
  return { type: "object", data: data };
};
export const collectSelectedTag = (data) => {
  return { type: "string", data: data };
};
export const SetEmpty = () => {
  return { type: "home", data: {} };
};
export const signIn = (data) => {
  return { type: "SignIn", data: data };
};
export const SetEmpty = (data) => {
  return { type: "SignUp", data: data };
};
