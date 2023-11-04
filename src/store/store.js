import { configureStore } from "@reduxjs/toolkit";

import tendersReducer from "./tenders/tendersSlice";

import commentSlice from "./comments/commentSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    tenders: tendersReducer,
    comments: commentSlice
  },
});
