import axios from "axios";

export function SignInApi(request) {
  return axios.post("http://localhost:3000/user/signin", request);
}

export function ValidateSessionApi(request) {
  return axios.post("http://localhost:3000/user/session/validate", request);
}
