import React from 'react';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='custom-nav'>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <div>
                <Link className='custom-link' to="/">Shop</Link>
                <Link className='custom-link' to="/orders">Orders</Link>
                <Link className='custom-link' to="/inventory">Inventory</Link>
                <Link className='custom-link' to="/login">Login/Register</Link>
            </div>
        </nav>
    );
};

export default Header;