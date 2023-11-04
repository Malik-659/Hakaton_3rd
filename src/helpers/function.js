import axios from "axios";
import { USERS_API } from "./const";

export const addUserToLocalStorage = (user, tokens) => {
  localStorage.setItem("tenderUser", JSON.stringify(user));
  localStorage.setItem("tenderTokens", JSON.stringify(tokens));
};

export const logout = () => {
  localStorage.removeItem("tenderUser");
  localStorage.removeItem("tenderTokens");
};

export const checkUserLogin = () => {
  const user = localStorage.getItem("tenderUser");
  if (!user) return false;
  return true;
};

export const updateToken = () => {
  let updateFunc = setInterval(async () => {
    const tokens = JSON.parse(localStorage.getItem("tenderTokens"));
    if (!tokens) return clearInterval(updateFunc);
    const Authorization = `Bearer ${tokens.access}`;
    const { data } = await axios.post(
      `${USERS_API}/refresh/`,
      { refresh: tokens.refresh },
      { headers: { Authorization } }
    );
    localStorage.setItem(
      "tenderTokens",
      JSON.stringify({ refresh: tokens.refresh, access: data.access })
    );
    console.log("a");
  }, 1000 * 60 * 60 * 12);
};
