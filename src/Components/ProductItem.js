import classes from './ProductItem.module.css'
const ProductItem = (props)=>{
    return(
        <div className={classes.productitem}>
            <div>{props.product.title}</div>
            <div>
                <img className={classes.image} src={props.product.imageUrl} alt="this is"/>
            </div>
            <div>{props.product.price} <span><button> add to cart</button></span></div>
            
        </div>
    )
}
export default ProductItem;