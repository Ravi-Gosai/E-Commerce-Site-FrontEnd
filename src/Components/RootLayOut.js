import { Outlet } from "react-router-dom";
import CartContextProvider from "../store/CartContextProvider";
import Header from "./Header";
import Footer from "./Footer";

const RootOutLay = ({setCartShow,children})=>{
    return (
        <>
             <CartContextProvider>
             <Header onShow={setCartShow} />
             {/* <Outlet/> */}
             {children}
             <Footer />
             </CartContextProvider>
        </>
    )
}
export default RootOutLay;