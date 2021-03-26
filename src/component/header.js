import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/images/logo.jpg';
import { MenuComponent } from './index';
import { UserContext, UserDispatchContext } from '../context/context';

// const name = '';
const HeaderComponent = () => {
    const userDetails = React.useContext(UserContext);
    const setUserDetails = useContext(UserDispatchContext);

    console.log('userDetails.username :>> ', userDetails.username);
    return (
        <div className="header">
            <Navbar expand="lg">
                <Navbar.Brand href="#home">
                    {/* <AuthStateItem title="Token" value={role} /> */}
                    <img src={logo} alt="Logo" width={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <MenuComponent />
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        {userDetails.username != undefined &&
                        userDetails.username ? (
                            <NavDropdown.Item href="#" disabled>
                                {userDetails.username}
                            </NavDropdown.Item>
                        ) : (
                            <NavDropdown.Item href="/login">
                                User
                            </NavDropdown.Item>
                        )}
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default HeaderComponent;
