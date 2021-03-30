import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/images/logo.jpg';
import { MenuComponent, ButtonComponent } from './index';
import { AuthContext } from '../context/context';
import { useHistory } from 'react-router-dom';

// const name = '';
const HeaderComponent = () => {
    const history = useHistory();
    const { authState, logout } = useContext(AuthContext);

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

                {authState.role ? (
                    <ButtonComponent
                        title="logout"
                        onClick={logout}
                        type="button"
                        name="logout"
                        className="btn btn-success"
                        id="logout"
                    />
                ) : (
                    <ButtonComponent
                        title="Login"
                        onClick={() => history.push('/login')}
                        type="button"
                        name="login"
                        className="btn btn-success"
                        id="login"
                    />
                )}
            </Navbar>
        </div>
    );
};

export default HeaderComponent;
