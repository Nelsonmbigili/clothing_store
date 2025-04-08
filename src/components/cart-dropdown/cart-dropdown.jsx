import {CartDropdownContainer,EmptyMessage,CartItemsContainer} from './cart-dropdown.style.jsx';
import CartItem from '../cart-item/cart-item';
import { useNavigate } from 'react-router';
import Button from '../button/button';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.jsx';

const CartDropdown = () => {
   const cartItems = useSelector(selectCartItems);
  
   const navigate = useNavigate();
   
    const goTOCheckOutHandler = () => {
         navigate('/checkout');};
    
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (cartItems.map((item) => (<CartItem key={item.id} CartItem={item}/>)))
                                    : (<EmptyMessage>Your Cart is Empty</EmptyMessage>)
                }
            </CartItemsContainer>
            <Button onClick={goTOCheckOutHandler}>Go To checkout</Button>
        </CartDropdownContainer>

    )
}

export default CartDropdown;