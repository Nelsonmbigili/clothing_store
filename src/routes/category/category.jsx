import { useState, useEffect, Fragment} from 'react';
import ProductCard from '../../components/product-card/product-card';
import { useParams } from 'react-router';
import './category.scss';
import { useSelector } from 'react-redux';
import { selectCategoryMap } from '../../store/categories/category.selector';
const Category = ()=>{
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoryMap);
    const  [products, setProducts]= useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);}, [category, categoriesMap])
    
    return (
        <Fragment>
             <h2 className='title'>{category.toLocaleUpperCase()}</h2>
             <div className='category-container'>
                {
                products && products.map((product)=> <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </Fragment>
    )
}

export default Category;