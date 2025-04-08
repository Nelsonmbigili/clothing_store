import { Outlet } from "react-router"
import { Fragment} from "react";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { Link } from "react-router-dom";
import './navigation.scss'
import { signOutUser } from "../../utils/firebase/firebase";
import {ReactComponent as Logo} from '../../Assets/logo.svg';
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = ()=>{
  
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

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
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
              Sign Out
              </span>
            ):(
              <Link className="nav-link" to = '/auth'>
                  Sign In
              </Link>
            )}
            <CartIcon/>
        </div>
        {isCartOpen &&  <CartDropdown/> }
      </div>
      <hr/>
      <Outlet/>

    </Fragment>
  )
}

export default Navigation;