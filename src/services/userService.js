import http from "./httpService";
import { config } from "../config/config";

const apiEndpoint = config.apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.name,
  });
}

export default {
  register,
};
