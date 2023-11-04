import { configureStore } from "@reduxjs/toolkit";
import tendersReducer from "./tenders/tendersSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    tenders: tendersReducer,
  },
});
