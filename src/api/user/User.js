import axios from "axios";
import { getSessionId } from "../SessionIdUtils";

export function GetUserInfo() {
  return axios.get("http://localhost:3000/user/info", {
    headers: { SESSION_ID: getSessionId() },
  });
}
