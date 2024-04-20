import { useContext } from 'react';
import classes from './ProductItem.module.css'
import CartContext from '../store/cart-context';
import { NavLink } from 'react-router-dom';
const ProductItem = (props)=>{
    const cartCtx = useContext(CartContext)

    const blackColorimage = {
        image1 : 'https://www.istockphoto.com/photo/natural-black-gray-marble-texture-pattern-marble-wallpaper-background-mable-tile-for-gm1477944134-506347099?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fblack-color&utm_medium=affiliate&utm_source=unsplash&utm_term=black+color%3A%3A%3A'
    }
    return(
        <div className={classes.productitem} >
            <div> <NavLink to='/product' state={{product: props.product,blackColorimage:blackColorimage}} >{props.product.title}</NavLink></div>
            <div>
                <img className={classes.image} src={props.product.imageUrl} alt="this is"/>
            </div>
            <div>{props.product.price}rs <span><button onClick={()=>cartCtx.addCartFun(props.product)}> add to cart</button></span></div>
            
        </div>
    )
}
export default ProductItem;