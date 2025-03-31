import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { useNavigate } from 'react-router';
import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import { useCallback } from 'react';

const CartDropdown = () => {
    const {cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen);
    const navigate = useNavigate();
    const goTOCheckOutHandler = () => {
        navigate('/checkout')
    }

    const handleClick = useCallback(() => {
        goTOCheckOutHandler();
        toggleIsCartOpen();
    }, [goTOCheckOutHandler, toggleIsCartOpen]);
    
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
               {cartItems.map((item) => (<CartItem key={item.id} CartItem={item}/>))}
            </div>
            <Button onClick={handleClick}>Go To checkout</Button>
        </div>

    )
}

export default CartDropdown;