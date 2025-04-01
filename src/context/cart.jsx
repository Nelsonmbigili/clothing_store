import { createContext, useState , useEffect} from "react";

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



export const CartContext = createContext({
   isCartOpen: false,
   setIsCartOpen: () => {},
   cartItems: [],
   removeItemFromCart: ()=>{},
   clearItemFromCart: () => {},
   cartCount: 0,
   total: 0
   
});

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    },[cartItems] )

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal);
    },[cartItems] )

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd))
    };

    const removeItemFromCart = (cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    };

    const clearItemFromCart = (cartItemTClear)=>{
        setCartItems(clearCartItem(cartItems, cartItemTClear))
    };

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount,removeItemFromCart, clearItemFromCart, cartTotal}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};

