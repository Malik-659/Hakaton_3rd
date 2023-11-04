import { createSlice } from "@reduxjs/toolkit";
import { activateCode, loginUser, registerUser } from "./usersActions";
import { addUserToLocalStorage, updateToken } from "../../helpers/function";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    loading: false,
    status: "",
  },
  reducers: {
    clearStatusState: (state) => {
      state.status = "";
    },
    clearUserState: (state) => {
      state.uesr = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        action.payload.navigate("/activeCode");
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        addUserToLocalStorage(action.payload.user, action.payload.data);
        updateToken();
        action.payload.navigate("/");
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(activateCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(activateCode.fulfilled, (state, action) => {
        state.loading = false;
        action.payload.navigate("/login");
      })
      .addCase(activateCode.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      });
  },
});

export const { clearStatusState, clearUserState } = usersSlice.actions;
export default usersSlice.reducer;
