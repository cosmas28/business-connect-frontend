// ./src/reducers/index.js
import { combineReducers } from "redux";
import {
  businessesReducer,
  userBusinessReducer,
  businessReducer,
  searchReducer
} from "./businessesReducers";
import { responseMessageReducer } from "./responseMsgReducers";

// root reducer
export default combineReducers({
  business: businessReducer,
  businesses: businessesReducer,
  searchResults: searchReducer,
  toast: responseMessageReducer,
  userBusinesses: userBusinessReducer
});
