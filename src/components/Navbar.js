import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Navbar(){
    const { cartItems } = useContext(CartContext);

    return (
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/about"> AboutUs </Link>
            <Link to="/products"> Products </Link>
            <Link to="/cart"> Cart({cartItems.length}) </Link>
            <Link to="/checkout"> Checkout </Link>
            <Link to="/login"> Login/ Register </Link>
        </nav>
    );
}