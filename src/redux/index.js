import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import menuReducer from "./menu/reducer";
//import menusReducer from "./menus/reducer";
//import usersReducer from "./users/reducer";
//import housesReducer from './houses/reducer'

const rootReducer = combineReducers({
   userReducer,
   menuReducer
   // menuObj : menusReducer,
   // userObj : usersReducer,
   // housesObj : housesReducer
});

export default rootReducer;