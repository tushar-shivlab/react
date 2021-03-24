import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    padding: 20px 0px;
`;
const H5 = styled.h5`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`;
const P = styled.p`
    font-size: 18px;
    @media (max-width: 1024px) {
        font-size: 16px;
    }
`;
const CardComponent = (props) => {
    return (
        <Title className="card">
            <div className="card-body">
                <H5 className="card-title">{props.title}</H5>
                <P className="card-text">{props.description}</P>
            </div>
        </Title>
    );
};

export default CardComponent;
