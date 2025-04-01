import {CartDropdownContainer,EmptyMessage,CartItemsContainer} from './cart-dropdown.style.jsx';
import CartItem from '../cart-item/cart-item';
import { useNavigate } from 'react-router';
import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import { useCallback } from 'react';

const CartDropdown = () => {
   const {cartItems, setIsCartOpen} = useContext(CartContext);
   const navigate = useNavigate();
   const toggleIsCartOpen = useCallback(() => {
        setIsCartOpen((prev) => !prev);
    }, [setIsCartOpen]);

    const goTOCheckOutHandler = useCallback(() => {
        
        navigate('/checkout');
    }, [navigate]);

    const handleClick = useCallback(() => {
        goTOCheckOutHandler();
        toggleIsCartOpen();
    }, [goTOCheckOutHandler, toggleIsCartOpen]);
    
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (cartItems.map((item) => (<CartItem key={item.id} CartItem={item}/>)))
                                    : (<EmptyMessage>Your Cart is Empty</EmptyMessage>)
                }
            </CartItemsContainer>
            <Button onClick={handleClick}>Go To checkout</Button>
        </CartDropdownContainer>

    )
}

export default CartDropdown;