import { useLocation } from 'react-router-dom';
import './ShowSingleProductPage.css'
const ShowSingleProductPage = ()=>{
const location = useLocation()


console.log(location.state.product)

// console.log(location.state.price)
    return(
        <>
        <div className='productdiv'>
            hello
           {location.state.product.title}
        </div>

        <div className='allimage'>
            
        </div>
        </>
    )
}
export default ShowSingleProductPage;