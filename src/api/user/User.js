import axios from "axios";

export function GetUserInfo(sessionId) {
  return axios.get("http://localhost:3000/user/info", {
    headers: { SESSION_ID: sessionId },
  });
}
