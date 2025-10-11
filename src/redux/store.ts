import { configureStore } from "@reduxjs/toolkit";
import webConfigReducer from "./inputConfig";

export const store = configureStore({
  reducer: {
    inputFields: webConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
