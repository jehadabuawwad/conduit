import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status === 400 &&
    error.response.status !== 200;

  if (expectedError) {
    logger.log(error);
    toast.error("Please Check again for the entered data");
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
