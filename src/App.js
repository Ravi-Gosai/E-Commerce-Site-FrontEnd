import "./App.css";


import { RouterProvider, Routes, createBrowserRouter ,Route, Navigate,} from "react-router-dom";
import Aboutpage from "./Components/AboutPage";
import HomePage from "./Components/HomePage";
import { useContext, useState } from "react";
import RootOutLay from "./Components/RootLayOut";
import WelComePage from "./Components/welpage/WelcomePage";
import ContactUsPage from "./Components/ContactUsPage";
import ShowSingleProductPage from "./Components/ShowSingleProductPage.";
import AuthPage from "./Components/AuthPage";
import AuthContext from "./store/auth-context";

function App() {
  // const [cartShow, setCartShow] = useState(false);

  const authCtx = useContext(AuthContext)

  // const router = createBrowserRouter([
  //   {
  //     path : '/',
  //     element : <RootOutLay setCartShow={setCartShow}/> ,
  //     children :[
  //       {
  //         path : '/about',
  //         element : <Aboutpage/>
  //       },
  //       {
  //         path : '/',
  //         element : <HomePage cartShow={cartShow} setCartShow={setCartShow}></HomePage>
  //       },
  //       {
  //         path : '/welcome',
  //         element : <WelComePage></WelComePage>
  //       },
  //       {
  //         path : '/contactUs',
  //         element : <ContactUsPage></ContactUsPage>
  //       },
  //       {
  //         path : '/product',
  //         element : <ShowSingleProductPage></ShowSingleProductPage>
  //       }
  //     ]
  //   }
  // ])

  return (
    <RootOutLay>
    <Routes>
      <Route path='/' element={ <Navigate to='/welcome' />}>
       
      </Route>
      <Route path='/about' element={ <Aboutpage/> }></Route>
      
      {authCtx.isLoggedIn && <Route path='/home' element={ <HomePage />}></Route>}
      {!authCtx.isLoggedIn && <Route path='/home' element={ <Navigate to='/login' />}></Route>}
      {!authCtx.isLoggedIn && <Route path='/login' element={<AuthPage></AuthPage> }></Route>}
      <Route path='/welcome' element={ <WelComePage/>}></Route>
      <Route path='/contactUs' element={ <ContactUsPage/>}></Route>
      {authCtx.isLoggedIn && <Route path='/product' element={<ShowSingleProductPage/> }></Route>}
      
      
    </Routes>
    </RootOutLay>
      // <RouterProvider router={router}></RouterProvider>
     
   
  );
}

export default App;
