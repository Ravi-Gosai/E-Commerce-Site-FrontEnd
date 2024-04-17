import "./App.css";


import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Aboutpage from "./Components/AboutPage";
import HomePage from "./Components/HomePage";
import { useState } from "react";
import RootOutLay from "./Components/RootLayOut";
import WelComePage from "./Components/welpage/WelcomePage";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const router = createBrowserRouter([
    {
      path : '/',
      element : <RootOutLay setCartShow={setCartShow}/> ,
      children :[
        {
          path : '/about',
          element : <Aboutpage/>
        },
        {
          path : '/',
          element : <HomePage cartShow={cartShow} setCartShow={setCartShow}></HomePage>
        },
        {
          path : '/welcome',
          element : <WelComePage></WelComePage>
        }
      ]
    }
  ])

  return (
   
      <RouterProvider router={router}></RouterProvider>
     
   
  );
}

export default App;
