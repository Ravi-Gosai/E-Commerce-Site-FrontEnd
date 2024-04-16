import classes from './Header.module.css'
const Header = (props)=>{


    return <div className={classes.header}>
        <h2>E-Commerce Website</h2> 
        <div className={classes.cartbtndiv}>
            <button className={classes.cartbtn} onClick={()=>props.onShow(true)}>My Cart</button>
        </div>
    </div>
}
export default Header;