
import "./App.css";
import Header from "./Components/Header";


import CartContextProvider from "./store/CartContextProvider";
import Footer from "./Components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Aboutpage from "./Components/AboutPage";
import HomePage from "./Components/HomePage";
import { useState } from "react";






function App() {
  const [cartShow, setCartShow] = useState(false);

  const router = createBrowserRouter([
  
    {path : '/', element : <HomePage cartShow={cartShow} setCartShow={setCartShow}></HomePage>},
    {path:'/about' , element : <Aboutpage/>}
  ])
 
  return (
    <>
     
      <CartContextProvider>
        <Header onShow={setCartShow}  />
    <RouterProvider router={router}>
     
    </RouterProvider>
        <Footer></Footer>
      </CartContextProvider>
     
    </>
  );
}

export default App;
