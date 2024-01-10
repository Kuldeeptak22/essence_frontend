import { combineReducers } from "redux";
import categoryReducer from "./categoryBar/categoryReducer";
import subCategoryReducer from "./subCategory/subCategoryReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  subCategory:subCategoryReducer
});

export default rootReducer;
