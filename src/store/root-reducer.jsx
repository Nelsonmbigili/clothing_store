import { combineReducers } from "redux";
import { userReducer } from "./user/user";
import { CategoriesReducer } from "./categories/category.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: CategoriesReducer,
});