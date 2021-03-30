import { Button } from 'react-bootstrap';
import React from 'react';

const ButtonComponent = (props) => {
    return (
        <Button
            type={props.type}
            name={props.name}
            className={props.classname}
            onClick={props.onClick}
            id={props.id}
            disabled={props.disabled}>
            {props.title}
        </Button>
    );
};

export default ButtonComponent;
