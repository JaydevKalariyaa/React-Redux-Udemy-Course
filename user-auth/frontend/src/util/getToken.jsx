import { redirect } from "react-router-dom";

export default function getToken() {
  let token = localStorage.getItem("token");
  // if (!token) {
  //   return redirect("/auth");
  // }
  return token;
}
export function getAuthLoader() {
  let token = getToken();
  if (!token) {
    return redirect("/auth");
  }
  return null;
}
