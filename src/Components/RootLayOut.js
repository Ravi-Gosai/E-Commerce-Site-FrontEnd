import { Outlet } from "react-router-dom";
import CartContextProvider from "../store/CartContextProvider";
import Header from "./Header";
import Footer from "./Footer";

const RootOutLay = ({setCartShow})=>{
    return (
        <>
             <CartContextProvider>
             <Header onShow={setCartShow} />
             <Outlet/>
             <Footer />
             </CartContextProvider>
        </>
    )
}
export default RootOutLay;