import {Routes, Route, Outlet} from 'react-router-dom'
import Navigation  from './components/navigation/navigation.jsx'
import Home from './routes/home/home.jsx';
import SignIn from './routes/sign-in/sign-in.jsx';

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
           <Route path='/sign-in' element={<SignIn/>}/>
       </Route>
    </Routes>
  )
};
export default App;