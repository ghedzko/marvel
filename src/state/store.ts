import { configureStore } from "@reduxjs/toolkit";
import createRootReducer from "./slices";

export const store = configureStore({
  reducer: createRootReducer(),
  devTools: true,
});
