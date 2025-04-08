import { combineReducers } from "redux";
import { userReducer } from "./user/user";
import { CategoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: CategoriesReducer,
    cart: cartReducer,
});