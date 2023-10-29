import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget"
import apple from '../../assets/apple.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={apple} alt="" className='logo'/> 
            <Link to= '/'>Ishopp</Link>
            <nav className="nav">
                <Link to= '/category/celular'>Iphone</Link>
                <Link to= '/category/tablet'>Ipad</Link>
                <Link to= '/category/macbook'>Macbook</Link>
                <CartWidget/>
            </nav>
        </div>
    )
}  
      export default Navbar