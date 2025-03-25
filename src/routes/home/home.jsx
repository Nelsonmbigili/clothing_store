import CategoryList from '../../components/category-list/category-list.jsx'

function home() {
const categories=[
    { 
        id: 1,
        title: 'Caps',
        imageUrl: "https://i.postimg.cc/59zmBJBm/caps.jpg"
    },
    { 
        id: 2,
        title: 'Jackets',
        imageUrl: 'https://i.postimg.cc/PJbZBtKs/jackets.webp'
    },
    { 
        id: 3,
        title: 'Sneakers',
        imageUrl: 'https://i.postimg.cc/8zZdpzGT/sneaker.jpg'
    },
    { 
        id: 4,
        title: 'Women',
        imageUrl: 'https://i.postimg.cc/DfQXfwQR/dress.avif'
    },
    { 
        id: 5,
        title: 'Men',
        imageUrl: 'https://i.postimg.cc/52yYmqcM/men.jpg'
    }
    ]
  return (
   <CategoryList categories={categories}/>
  )
};

export default home;
