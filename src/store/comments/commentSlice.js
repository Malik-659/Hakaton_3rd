import { createSlice } from "@reduxjs/toolkit";
import { getComments, postComment } from "./commentsActions";


const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    laoding: false,
    error: "",
    sidebar: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state, action) => {
        state.laoding = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.laoding = true;
        state.comments = action.payload;
      })
      .addCase(postComment.pending, (state) => {
        state.laoding = true;
      })
      .addCase(postComment.fulfilled, (state) => {
        state.laoding = false;
      });
  },
});

export const { toggleSidebar } = commentSlice.actions;
export default commentSlice.reducer;
