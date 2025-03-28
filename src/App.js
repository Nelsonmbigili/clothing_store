import {Routes, Route, Outlet} from 'react-router-dom'
import Navigation  from './components/navigation/navigation.jsx'
import Home from './routes/home/home.jsx';
import Authentication from './routes/authentication/authentication.jsx';

const Shop = ()=>{
  return (
    <div>
      <div>
        <h1>Shoping Page</h1>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

function App() {
  return (
    <Routes>
       <Route path="/" element={<Navigation/>}>
           <Route index element={<Home/>}/>
           <Route path='/shop' element={<Shop/>}/>
           <Route path='/auth' element={<Authentication/>}/>
       </Route>
    </Routes>
  )
};
export default App;