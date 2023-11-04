import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USERS_API } from "../../helpers/const";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ user, navigate }) => {
    const userData = new FormData();
    userData.append("email", user.email);
    userData.append("first_name", user.firstName);
    userData.append("last_name", user.lastName);
    userData.append("password", user.password);
    userData.append("password_confirm", user.passwordConfirm);
    await axios.post(`${USERS_API}/register/`, userData);
    alert("Регистрация прошла успешно");
    return { navigate };
  }
);

export const activateCode = createAsyncThunk(
  "users/activateCode",
  async ({ user, navigate }) => {
    const userData = new FormData();
    userData.append("email", user.email);
    userData.append("code", user.code);
    await axios.post(`${USERS_API}/activate_code/`, userData);
    alert("Аккаунт активирован");
    return { navigate };
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ user, navigate }) => {
    const userData = new FormData();
    userData.append("email", user.email);
    userData.append("password", user.password);
    const { data } = await axios.post(`${USERS_API}/login/`, userData);
    return { data, navigate, user: user.email };
  }
);
