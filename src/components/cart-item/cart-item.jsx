import {ItemDetailsContainer, CartItemContainer} from  './cart-item.style.jsx'

const CartItem = ({CartItem}) =>{
    const {name, imageUrl, price ,quantity}= CartItem;
    return (
        <CartItemContainer>
           <img src={imageUrl} alt={`${name}`}/>
           <ItemDetailsContainer>
           <span className='name'> {name}</span>
           <span className='price'> {quantity} x ${price}</span>
           </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;