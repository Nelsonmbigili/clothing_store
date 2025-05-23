import { selectCategoryMap } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';
import { Fragment} from 'react';
import CategoryPreview from '../../components/category-preview/category-preview';


const CategoriesPreview = ()=> {
 const categoriesMap = useSelector(selectCategoryMap);
 
  return(
    <Fragment>
      { Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} products={products} title={title}/>
      }
        )}
    </Fragment>
  ) 
}

export default CategoriesPreview;