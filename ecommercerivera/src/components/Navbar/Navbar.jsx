import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget"
import apple from '../../assets/apple.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={apple} alt="" className='logo'/> 
            <h1>Ishopp</h1>
            <nav className="nav">
                <button>Iphone</button>
                <button>Ipad</button>
                <button>Macbook</button>
                <CartWidget/>
            </nav>
        </div>
    )
}  
      export default Navbar