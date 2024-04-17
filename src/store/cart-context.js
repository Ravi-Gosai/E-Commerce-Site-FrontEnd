import { createContext } from "react";



const CartContext = createContext({
    addCartFun : (item)=>{},
    removeFromCart : (item)=>{},
    cartProduct : []
})
export default CartContext;
