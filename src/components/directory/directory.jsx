import DirectoryItem from '../directory-item/directory-item';
import './directory.scss'

const Directory=({categories})=>{
  return (
    <div className="category-list-container">
      {categories.map((category)=> ( 
        <DirectoryItem key = {category.id} category={category}/>
      ))}
    </div>
  )
}
export default Directory;