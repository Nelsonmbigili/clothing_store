 import createAction from "../../utils/reducer/reducer";
import { CART_ACTION_TYPES } from "./cart.types";



const addCartItem = (cartItems, productToAdd) =>{
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if(existingCartItem)
        {
            console.log("added 2.2")
            return cartItems.map((cartItem) => 
                cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity+1}
                : cartItem
        )}
        console.log("added 1.1")
    return [...cartItems, { ...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) =>{
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id);
    if (existingCartItem.quantity ===1){
        return cartItems.filter(cartItem=>cartItem.id!== cartItemToRemove.id);
    }
    
    return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity-1}
        : cartItem
)
    }

const clearCartItem  = (cartItems, cartItemToClear) => cartItems.filter(cartItem=>cartItem.id!== cartItemToClear.id);


export const setIsCartOpen = (bool) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const addItemToCart = (cartItems, productToAdd)=>{
    const newCartItems = (addCartItem(cartItems, productToAdd));
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};

export const removeItemFromCart = (cartItems ,cartItemToRemove)=>{
    const newCartItems = (removeCartItem(cartItems, cartItemToRemove))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemTClear)=>{
    const newCartItems = (clearCartItem(cartItems, cartItemTClear))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
};