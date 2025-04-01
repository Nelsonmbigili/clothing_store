
import { CategoriesContext } from '../../context/categories'; 
import { Fragment, useContext} from 'react';
import CategoryPreview from '../../components/category-preview/category-preview';


const CategoriesPreview = ()=> {
  const {categoriesMap}= useContext(CategoriesContext);
  console.log("The Categories Map",categoriesMap);

  return(
    <Fragment>
      { Object.keys(categoriesMap).map((title) => {
        console.log("before title : ", title)
        const products = categoriesMap[title];
        return <CategoryPreview key={title} products={products} title={title}/>
      }
        )}
    </Fragment>
  ) 
}

export default CategoriesPreview;