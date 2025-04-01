import { Link } from 'react-router-dom';
import './category-preview.scss';
import ProductCard from '../product-card/product-card';

const CategoryPreview = ({title, products})=>
{
    console.log("title: ", title)
    return (
        <div className='category-preview-container'>
        
        <h2> <Link className='category-title' to={title}>{title.toUpperCase()}</Link></h2>
        <div className='preview'>
        {
            products
            .filter((_, index)=> index < 4)
            .map((product)=>
            <ProductCard key={product.id} product={product}/>)
        }
        </div>
        </div>
    )

}


export default CategoryPreview;