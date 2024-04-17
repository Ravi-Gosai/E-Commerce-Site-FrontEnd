import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from './Cart.module.css'
import CartItem from "./CartItem";

const Cart = props =>{
    const cartCtx = useContext(CartContext)
    
    return(
    <div className={classes.cartdiv}>
         <button onClick={()=>props.onClose(false)}>Close</button>
    <div><h2 className={classes.h2}><span className={classes.span}> item</span> <span className={classes.span}>price</span> <span className={classes.span}>quantity</span></h2></div> 

    {cartCtx.cartProduct.map((cartProduct)=><CartItem key={cartProduct.title} product={cartProduct}></CartItem>)}
       
    </div>

    )
}
export default Cart;