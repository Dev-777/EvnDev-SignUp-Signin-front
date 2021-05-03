import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";

export const mainReducer = combineReducers({
  homeReducer,
});
