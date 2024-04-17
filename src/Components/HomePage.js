import ProductItem from "./ProductItem";

import Cart from "./Cart";
const HomePage= ({cartShow,setCartShow})=>{

   
  
    
    const productList = [
      {
        title: "Colors",
  
        price: 100,
  
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  
        quantity: 1,
      },
  
      {
        title: "Black and white Colors",
  
        price: 50,
  
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        quantity: 1,
      },
  
      {
        title: "Yellow and Black Colors",
  
        price: 70,
  
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        quantity: 1,
      },
  
      {
        title: "Blue Color",
  
        price: 100,
  
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        quantity: 1,
      },
    ];
    return <>
         <div className="productlist">
          {!cartShow &&
            productList.map((product) => (
              <ProductItem key={product.title} product={product}></ProductItem>
            ))}
        </div>
        {cartShow && <Cart onClose={setCartShow}></Cart>}
    </>
}
export default HomePage;