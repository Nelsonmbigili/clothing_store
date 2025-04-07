import { Routes, Route } from 'react-router';
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import './shop.scss'
import { useEffect } from 'react';
import { getCategoriesAndDocuments} from '../../utils/firebase/firebase';
import { setCategories } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';

const Shop = ()=> {
  const dispatch = useDispatch();

  useEffect(()=>{
    const getCategoriesMap = async ()=> {
      const categoriesArray =  await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray ));
    }
    getCategoriesMap();
}, [dispatch]);

  return(
    
    <Routes> 
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':category' element={<Category/>}/>
    </Routes>
   
  );
}

export default Shop;