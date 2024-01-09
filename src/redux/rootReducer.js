import { combineReducers } from "redux";
import categoryReducer from "./categoryBar/categoryReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
});

export default rootReducer;
