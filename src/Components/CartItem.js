

import { useContext, useEffect, useState } from 'react';
import './CartItem.css'
import CartContext from '../store/cart-context';
const CartItem = props =>{
const [quantity, setQuantity] = useState(1)
const cartCtx = useContext(CartContext)

console.log(props.product.quantity)
useEffect(()=>{
    setQuantity([props.product.quantity])
},[props.product.quantity])

    return(
       <div>
        <div className='cartlist'>
            <div className='indiv'><img className='cartimg' src={props.product.imageUrl} alt="this is"/>{props.product.title}</div>
            <div  className='indiv'>{props.product.price} rs</div>
            <div  className='indiv'>
                 <form>
               <input type='number' value={quantity} onChange={(e)=>setQuantity(+e.target.value)}></input>
            </form>
               <button onClick={()=>cartCtx.removeFromCart(props.product)}>Romove</button>
            </div>
        
       </div>
       </div>
    )
}
export default CartItem;