export const CollectData = (data) => {
  return { type: "object", data: data };
};
export const collectSelectedTag = (data) => {
  return { type: "string", data: data };
};
export const SetEmpty = () => {
  return { type: "home", data: {} };
};
