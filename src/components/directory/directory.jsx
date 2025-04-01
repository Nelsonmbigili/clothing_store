import DirectoryItem from '../directory-item/directory-item';
import './directory.scss'

const categories=[
  { 
      id: 1,
      title: 'Hats',
      imageUrl: "https://i.postimg.cc/59zmBJBm/caps.jpg",
      route: 'shop/hats'
  },
  { 
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.postimg.cc/PJbZBtKs/jackets.webp',
      route: 'shop/jackets'
  },
  { 
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.postimg.cc/8zZdpzGT/sneaker.jpg',
      route: 'shop/sneakers'
  },
  { 
      id: 4,
      title: 'Women',
      imageUrl: 'https://i.postimg.cc/DfQXfwQR/dress.avif',
      route: 'shop/womens'
  },
  { 
      id: 5,
      title: 'Men',
      imageUrl: 'https://i.postimg.cc/52yYmqcM/men.jpg',
      route: 'shop/mens'
  }
  ]


const Directory=()=>{
  
  return (
    <div className="category-list-container">
      {categories.map((category)=> ( 
        <DirectoryItem key = {category.id} category={category}/>
      ))}
    </div>
  )
}
export default Directory;