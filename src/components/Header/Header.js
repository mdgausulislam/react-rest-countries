import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome TO my Rest Countries</h2>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/Country">COuntry Details</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;