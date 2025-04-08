import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.jsx';
import { setIsCartOpen } from '../../store/cart/cart.action.jsx';

import { ItemCountStyle, CartIconContainer} from './cart-icon.style.jsx';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'

const CartIcon = () => {
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();
    const toogleIsCartOpen = ()=> dispatch(setIsCartOpen(!isCartOpen));
    return(
        <CartIconContainer onClick={toogleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCountStyle>{cartCount}</ItemCountStyle>
        </CartIconContainer>
    )
}

export default CartIcon;