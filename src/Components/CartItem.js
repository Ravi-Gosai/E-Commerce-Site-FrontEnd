
import './CartItem.css'
const CartItem = props =>{

    return(
       <div>
        <div className='cartlist'>
             <img className='cartimg' src={props.product.imageUrl} alt="this is"/><span>{props.product.title}</span><span>{props.product.price}</span>
       </div>
       </div>
    )
}
export default CartItem;