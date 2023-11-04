import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./comments/commentSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    comments: commentSlice
  },
});
