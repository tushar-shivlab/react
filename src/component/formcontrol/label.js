import React from 'react';
import { Label, Form } from 'react-bootstrap';

const LabelComponent = (props) => {
    return <Form.Label>{props.title}</Form.Label>;
};

export default LabelComponent;
