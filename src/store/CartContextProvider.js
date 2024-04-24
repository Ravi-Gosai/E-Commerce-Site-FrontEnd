import { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const [cartProduct, setCartProduct] = useState(JSON.parse(localStorage.getItem('item')));

useEffect(()=>{
  localStorage.setItem('item' ,JSON.stringify(cartProduct))


},[cartProduct])
useEffect(()=>{
// setCartProduct((localStorage.getItem('item').json()))
},[])
  
  const addCartFun = (item) => {
    // console.log(item)
    const checkProduct = cartProduct.find(
      (product) => item.title === product.title
    );
    if (checkProduct === undefined) {
      setCartProduct([...cartProduct, item]);
    } else {
      setCartProduct(() => {
        const currCartList = [...cartProduct];
        const index = currCartList.findIndex(
          (product) => item.title === product.title
        );
        // console.log(index)
        currCartList[index].quantity = currCartList[index].quantity + 1;
        return currCartList;
      });
    }

    // console.log(cartProduct)
  };
  const removeFromCartFun = (item)=>{
    console.log(item)
    setCartProduct(()=>{
      const index = cartProduct.findIndex((product)=>product.title === item.title)
      // console.log(index)
      const upadateCartlist = [...cartProduct]
      upadateCartlist.splice(index,1)
      return upadateCartlist
    })
  }

  const cartproduct = {
    addCartFun: addCartFun,
    removeFromCart:removeFromCartFun,
    cartProduct: cartProduct,
  };
  return (
    <CartContext.Provider value={cartproduct}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
