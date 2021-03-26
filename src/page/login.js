import React, { useState, useContext } from 'react';
import ApiInstance from '../config/config.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { UserContext } from '../context/context';

import {
    LabelComponent,
    TextInputComponent,
    SectionComponent,
    ButtonComponent,
} from '../component/index';
import { post } from '../action/actionindex';
import { Form, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
const ROW = styled(Row)`
    justify-content: center;
`;
const Column = styled(Col)`
    position: absolute;
    top: 40%;
    background-color: #ffffff;
    padding: 25px;
    box-shadow: 10px 10px 10px #000000;
`;

const LoginComponent = () => {
    const [username, setUserName] = useState(UserContext);
    var [email, setEmail] = useState();
    var [password, setPassword] = useState();
    var [errorObj, setErrorObj] = useState({
        emailerror: '',
        passworderror: '',
    });
    const history = useHistory();
    function handleInputChange(event) {
        event.stopPropagation();
        let field = event.target.name;
        let value = event.target.value;
        if (field === 'email') {
            setErrorObj({ emailerror: validate('email', value) });
            setEmail(value);
        } else {
            setErrorObj({ passworderror: validate('password', value) });
            setPassword(value);
        }
    }
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const login = await post(ApiInstance.loginurl, {
                email,
                password,
            });

            if (login.status === 200) {
                const { token, role } = login.data.data;
                setUserName(role);
                Cookies.set('token', token, {
                    sameSite: 'strict',
                    expires: 1,
                });
                Cookies.set('role', role, { sameSite: 'strict', expires: 1 });
                toast.success('Login Successfully !');
                history.push('/');
            }
        } catch (e) {
            toast.error('Login Failed ');
        }
    }
    const validate = (name, value) => {
        let error;
        if (name === 'email')
            error = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                value,
            )
                ? ''
                : 'You must enter a valid email address';
        if (name === 'password')
            error = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value)
                ? ''
                : 'You must enter a strong password which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character';

        return error;
    };

    return (
        <Container fluid>
            <ROW className="justify-content-md-center form_login">
                <Column lg={4} md={4} sm={6} xs={11}>
                    <SectionComponent title="Login" />
                    <Form
                        className="login_form"
                        onSubmit={handleSubmit}
                        action="#"
                        method="post">
                        <Form.Group controlId="login_email">
                            <LabelComponent
                                title="Enter email"
                                className="login-email email"
                            />
                            <TextInputComponent
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                onchange={handleInputChange}
                            />
                            <span style={{ color: 'red' }}>
                                {errorObj.emailerror}
                            </span>
                        </Form.Group>
                        <Form.Group controlId="current-password">
                            <LabelComponent
                                title="Enter Password"
                                className="login-password password"
                            />
                            <TextInputComponent
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                onchange={handleInputChange}
                            />
                            <span style={{ color: 'red' }}>
                                {errorObj.passworderror}
                            </span>
                        </Form.Group>
                        <Form.Group controlId="login-btn">
                            <ButtonComponent
                                title="login"
                                type="submit"
                                classname={
                                    (email != '' || password != '') &&
                                    (errorObj.emailerror == '' ||
                                        errorObj.passworderror == '')
                                        ? ''
                                        : 'disabled'
                                }
                                id="login_btn"
                                disabled={
                                    (email != '' || password != '') &&
                                    (errorObj.emailerror == '' ||
                                        errorObj.passworderror == '')
                                        ? false
                                        : true
                                }
                            />
                        </Form.Group>
                    </Form>
                </Column>
            </ROW>
            <ToastContainer />
        </Container>
    );
};

export default LoginComponent;
