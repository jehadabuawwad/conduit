export const CollectData = () => {
  return { type: "allData" };
};
export const collectSelectedTag = (data) => {
  return { type: "string", data: data };
};
