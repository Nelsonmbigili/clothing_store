import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../../context/cart';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
               {cartItems.map((item) => (<CartItem key={item.id} CartItem={item}/>))}
            </div>
            <Button>Go To checkout</Button>
        </div>

    )
}

export default CartDropdown;