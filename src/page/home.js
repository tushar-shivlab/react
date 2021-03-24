import React from 'react';
import { SliderComponent, CardComponent } from '../component/index';
import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';
const Card = styled.div`
    float: left;
    margin-left: 25px;
    box-shadow: 0px 13px 10px 1px grey;
    @media (max-width: 1024px) {
        margin-left: 0px;
        box-shadow: none;
    }
`;

const HomeComponent = () => {
    return (
        <>
            <SliderComponent />
            <Container fluid className="card_section">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <Card>
                            <CardComponent
                                title="happy"
                                description="Some quick example text to build on the card title and make
                    up the bulk of the card's content."
                            />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <Card>
                            <CardComponent
                                title="happy"
                                description="Some quick example text to build on the card title and make
                    up the bulk of the card's content."
                            />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <Card>
                            <CardComponent
                                title="happy"
                                description="Some quick example text to build on the card title and make
                    up the bulk of the card's content."
                            />
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <Card>
                            <CardComponent
                                title="happy"
                                description="Some quick example text to build on the card title and make
                    up the bulk of the card's content."
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomeComponent;
