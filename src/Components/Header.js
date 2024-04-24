import { useContext } from 'react';
import classes from './Header.module.css'
import CartContext from '../store/cart-context';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';
const Header = (props)=>{
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate()
const cartCtx = useContext(CartContext)

const logoutHandler = ()=>{
    authCtx.logout();
    navigate.apply('/')
}
const totalQunantity = cartCtx.cartProduct.reduce((intial, product)=>{
    return intial + product.quantity
},0)


    return <div className={classes.header}>
        <h2>E-Commerce Website</h2> 
        <ul className={classes.ul}>
        <NavLink to='/home'> <li className={classes.li}>Home</li></NavLink>
        <NavLink to='/about'> <li className={classes.li}>about</li></NavLink>
        <NavLink to='/welcome'> <li className={classes.li}>Welcome page</li></NavLink>
        { !authCtx.isLoggedIn && <NavLink to='/login'> <li className={classes.li}>login</li></NavLink>}
       {authCtx.isLoggedIn && <button onClick={logoutHandler}>logout</button> }

        </ul>
        <div className={classes.cartbtndiv}>
            <button className={classes.cartbtn} onClick={()=>props.onShow(true)}>My Cart {totalQunantity}</button>
        </div>
    </div>
}
export default Header;