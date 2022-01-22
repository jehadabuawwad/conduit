export const CollectData = (data) => {
  return { type: "object", data: data };
};
export const collectSelectedTag = (data) => {
  return { type: "string", data: data };
};
export const SetEmpty = () => {
  return { type: "home", data: {} };
};
export const SignIn = (data) => {
  return { type: "signIn", data: data };
};
export const signUp = (data) => {
  return { type: "signUp", data: data };
};
