import { Outlet } from "react-router-dom";
import CartContextProvider from "../store/CartContextProvider";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";
import { useContext, useState } from "react";
import AuthContext from "../store/auth-context";

const RootOutLay = ({children})=>{
    const authCtx = useContext(AuthContext)
    const [cartShow, setCartShow] = useState(false);
    return (
        <>
             <CartContextProvider>
             <Header onShow={setCartShow} />
             {authCtx.isLoggedIn && cartShow && <Cart onClose={setCartShow}></Cart>}
             {/* <Outlet/> */}
             {children}
             <Footer />
             </CartContextProvider>
        </>
    )
}
export default RootOutLay;