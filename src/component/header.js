import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/images/logo.jpg';
import { MenuComponent } from './index';
const HeaderComponent = () => {
    return (
        <div className="header">
            <Navbar expand="lg">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" width={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <MenuComponent />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderComponent;
