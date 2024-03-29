import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import dataReducer from "./data/reducer";

export default combineReducers({
  authReducer,
  dataReducer,
});
