import './CartWidget.css'
import bag from '../../assets/bag.svg'

const CartWidget = () =>{
    return (
        <>
        <button> <img src={bag} className='bag' /> 0 </button>
        </>
    )
}
export default CartWidget