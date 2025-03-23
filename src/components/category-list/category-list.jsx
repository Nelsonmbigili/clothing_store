import CategoryItem from '../category-item/category-item.jsx'
import './category-list.scss'

const CategoryList=({categories})=>{
  return (
    <div className="category-list-container">
      {categories.map((category)=> ( 
        <CategoryItem key = {category.id} category={category}/>
      ))}
    </div>
  )
}
export default CategoryList;