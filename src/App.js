import {Routes, Route} from 'react-router-dom'
import Navigation  from './components/navigation/navigation.jsx'
import Home from './routes/home/home.jsx';
import Authentication from './routes/authentication/authentication.jsx';
import Shop from './routes/shop/shop.jsx';
import Checkout from './routes/checkout/checkout.jsx';


function App() {
  return (
    <Routes>
       <Route path="/" element={<Navigation/>}>
           <Route index element={<Home/>}/>
           <Route path='/shop/*' element={<Shop/>}/>
           <Route path='/auth' element={<Authentication/>}/>
           <Route path='/checkout' element={<Checkout/>}/>
       </Route>
    </Routes>
  )
};
export default App;