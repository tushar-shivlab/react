import React from 'react';
import { Form } from 'react-bootstrap';

const TextInputComponent = (props) => {
    return (
        <Form.Control
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            autoComplete="section-blue shipping street-address"
            onChange={props.onchange}
        />
    );
};

export default TextInputComponent;
