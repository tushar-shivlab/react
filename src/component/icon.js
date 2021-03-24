import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Person } from 'react-bootstrap-icons';

const IconComponent = () => {
    return (
        <Row className="icon">
            <Col md={4}>
                <div className="man-option">
                    <Person size={40} />
                    <ul className="man-ul">
                        <li>login</li>
                        <li>Register</li>
                    </ul>
                </div>
            </Col>
            {/* <Col md={4}>
                <Person size={40} />
                <span> 6</span>
            </Col>
            <Col md={4}>
                <Person size={40} />
                <span> 5</span>
            </Col> */}
        </Row>
    );
};

export default IconComponent;
