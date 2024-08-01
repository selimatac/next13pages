// reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
// slice'larınızı import edin
import exampleSlice from "./exampleSlice";

const rootReducer = combineReducers({
  example: exampleSlice,
  // diğer slice'lar
});

export default rootReducer;
