import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo.jpg';
import { MenuComponent } from './index';

console.log('logo :>> ', logo);
const HeaderComponent = () => {
    return (
        <div className="header">
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <img src={logo} alt="Logo" />
                    </Col>

                    <Col md={6}>
                        <MenuComponent />
                    </Col>
                    <Col md={4}>1 of 1</Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderComponent;
