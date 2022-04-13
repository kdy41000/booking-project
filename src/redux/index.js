import { combineReducers } from "redux";
import userReducer from "./user/reducer";
//import menusReducer from "./menus/reducer";
//import usersReducer from "./users/reducer";
//import housesReducer from './houses/reducer'

const rootReducer = combineReducers({
   userReducer
   // menuObj : menusReducer,
   // userObj : usersReducer,
   // housesObj : housesReducer
});

export default rootReducer;