import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from './Cart.module.css'
import CartItem from "./CartItem";

const Cart = props =>{
    const cartCtx = useContext(CartContext)
    console.log(cartCtx)
    return(
    <div className={classes.cartdiv}>
    <div><h2 className={classes.h2}><span className={classes.span}> item</span> <span className={classes.span}>price</span> <sapn className={classes.span}>quantity</sapn></h2></div> 

    {cartCtx.cartProduct.map((cartProduct)=><CartItem product={cartProduct}></CartItem>)}
        <button onClick={()=>props.onClose(false)}>Close</button>
    </div>

    )
}
export default Cart;