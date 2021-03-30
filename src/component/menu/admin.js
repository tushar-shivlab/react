import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenuComponent = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    Admin<span className="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">
                    dashboard
                </Link>
            </li>
        </ul>
    );
};

export default AdminMenuComponent;
