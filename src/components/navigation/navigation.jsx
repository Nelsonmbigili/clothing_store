import { Outlet } from "react-router"
import { Fragment } from "react";
import { Link } from "react-router-dom";
import './navigation.scss'
import {ReactComponent as Logo} from '../../Assets/logo.svg';


const Navigation = ()=>{
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
            <Logo className='logo'/>
        </Link>

        <div className="nav-links-container">
            <Link className="nav-link" to = '/shop'>
            SHOP
            </Link>
            <Link className="nav-link" to = '/sign-in'>
            Sign In
            </Link>
        </div>
      </div>
      <hr/>
      <Outlet/>

    </Fragment>
  )
}

export default Navigation;