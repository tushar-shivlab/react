import React from 'react';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    Home<span className="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">
                    Login
                </Link>
            </li>
        </ul>
    );
};

export default MenuComponent;
