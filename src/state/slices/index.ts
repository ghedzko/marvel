import { combineReducers } from "@reduxjs/toolkit";
import characters from "./characters";
const rootReducer = () =>
  combineReducers({
    characters,
  });

export default rootReducer;
