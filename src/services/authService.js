import jwtDecode from "jwt-decode";
import http from "./httpService";
import { config } from "../config/config";
import { useDispatch } from "react-redux";
import { SetToken } from "../actions";
import { ClearToken } from "../actions";
import { useHistory } from "react-router-dom";

const apiEndpoint = config.apiUrl + "/auth";

export default function useAuth() {
  const dispatch = useDispatch();
  const history = useHistory();

  async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    dispatch(SetToken(jwt));
  }

  async function logout() {
    await dispatch(ClearToken());
    await history.push("/");
  }

  return {
    login,
    logout,
  };
}
