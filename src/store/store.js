import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";

import tendersReducer from "./tenders/tendersSlice";

import commentSlice from "./comments/commentSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    users: usersReducer,
    tenders: tendersReducer,
    comments: commentSlice
  },
});
