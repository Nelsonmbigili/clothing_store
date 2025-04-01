import { createContext, useState , useEffect} from "react";
import {  getCategoriesAndDocuments } from "../utils/firebase/firebase.jsx";
import SHOP_DATA from '../Mock-DB/shop-data.js';

export const CategoriesContext = createContext({
   categoriesMap: {},
});

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap]= useState({});
    // useEffect(()=>{
    //     try {
    //         addCollectionAndDocuments('categories', SHOP_DATA);
    //       } catch (error) {
    //         console.error("Firestore error:", error);
    //       }
    // },[])

    useEffect(()=>{
        const getCategoriesMap = async ()=> {
          const categoryMap =  await getCategoriesAndDocuments();
          console.log(categoryMap);
          setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);
    const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
};