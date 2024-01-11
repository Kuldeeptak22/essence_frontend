import { combineReducers } from "redux";
import categoryReducer from "./categoryBar/categoryReducer";
import subCategoryReducer from "./subCategory/subCategoryReducer";
import productReducer from "./products/productReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  subCategory: subCategoryReducer,
  product: productReducer,
});

export default rootReducer;
