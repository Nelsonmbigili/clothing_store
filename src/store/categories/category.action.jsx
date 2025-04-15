import { CATEGORIES_ACTION_TYPES } from "./category.types";
import createAction from "../../utils/reducer/reducer";

export const fetchCategoriesStart = () => 
     createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START);

export const fetchCategoriesSuccess = (categoriesArray) => 
     createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS,categoriesArray);

export const fetchCategoriesFailed = (error) => 
     createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED, error);