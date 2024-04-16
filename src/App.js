import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ProductItem from "./Components/ProductItem";
import Cart from "./Components/Cart";
import CartContextProvider from "./store/CartContextProvider";




function App() {

  const[cartShow, setCartShow] = useState(false)
  const productList = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <>
    <CartContextProvider>
    <Header onShow={setCartShow}/>
      <div className="productlist">
      { !cartShow && productList.map((product)=><ProductItem product={product}></ProductItem>)}
      </div>
      {cartShow && <Cart onClose={setCartShow}></Cart>}
      </CartContextProvider>
    </>
  );
}

export default App;
