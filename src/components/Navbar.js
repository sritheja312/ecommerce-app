import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Navbar(){
    const { cartItems } = useContext(CartContext);
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/about"> AboutUs </Link>
            <Link to="/products"> Products </Link>
            <Link to="/cart"> Cart({totalQuantity}) </Link>
            <Link to="/checkout"> Checkout </Link>
            <Link to="/login"> Login/ Register </Link>
        </nav>
    );
}