import { useContext } from 'react'
import { CartContext } from '../../context/cart';

import { ItemCountStyle, CartIconContainer} from './cart-icon.style.jsx';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
    const toogleIsCartOpen = ()=> setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer onClick={toogleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCountStyle>{cartCount}</ItemCountStyle>
        </CartIconContainer>
    )
}

export default CartIcon;