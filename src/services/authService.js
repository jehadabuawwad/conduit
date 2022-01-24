import http from "./httpService";
import { config } from "../config/config";
import { useDispatch } from "react-redux";
import { SetToken } from "../actions";
import { ClearToken } from "../actions";
import { useHistory } from "react-router-dom";

export default function useAuth() {
  const dispatch = useDispatch();
  const history = useHistory();

  async function login(email, password) {
    const { data: jwt } = await http.post(config.apiUrl + "/auth", {
      email,
      password,
    });
    dispatch(SetToken(jwt));
  }

  async function logout() {
    await dispatch(ClearToken());
    await history.push("/");
  }
  async function register(user) {
    return http.post(config.apiUrl + "/users", {
      email: user.email,
      password: user.password,
      name: user.name,
    });
  }
  return {
    login,
    logout,
    register,
  };
}
