import { useContext } from 'react'
import { CartContext } from '../../context/cart';

import './cart-icon.scss';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
    const toogleIsCartOpen = ()=> setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toogleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;