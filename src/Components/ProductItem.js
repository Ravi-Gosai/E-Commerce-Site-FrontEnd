import { useContext } from 'react';
import classes from './ProductItem.module.css'
import CartContext from '../store/cart-context';
const ProductItem = (props)=>{
    const cartCtx = useContext(CartContext)
    return(
        <div className={classes.productitem}>
            <div>{props.product.title}</div>
            <div>
                <img className={classes.image} src={props.product.imageUrl} alt="this is"/>
            </div>
            <div>{props.product.price}rs <span><button onClick={()=>cartCtx.addCartFun(props.product)}> add to cart</button></span></div>
            
        </div>
    )
}
export default ProductItem;