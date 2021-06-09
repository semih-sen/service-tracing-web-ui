import { combineReducers } from "redux";
import studentListReducer from "./studentListReducer";
import menuListReducer from "./menuListReducer";
import changeMenuReducer from "./changeMenuReducer";
import serviceListReducer from "./serviceListReducer";
import changeServiceReducer from "./changeServiceReducer";

const rootReducer = combineReducers({
  studentListReducer,
  changeMenuReducer,
  menuListReducer,
  serviceListReducer,
  changeServiceReducer
});

export default rootReducer;
