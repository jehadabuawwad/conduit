export const CollectData = (data) => {
  return { type: "object", data: data };
};
export const collectSelectedTag = (data) => {
  return { type: "string", data: data };
};
export const SetEmpty = () => {
  return { type: "home", data: {} };
};
export const login = (data) => {
  return { type: "login", data: data };
};
export const signUp = (data) => {
  return { type: "signUp", data: data };
};
