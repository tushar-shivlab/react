import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children, ...props }) => {
    const role = Cookies.get('role');
    const token = Cookies.get('token');

    const [authState, setAuthState] = useState({
        role,
        token,
    });

    const setAuthInfo = ({ role, token }) => {
        Cookies.set('role', role);
        Cookies.set('token', token);

        setAuthState({
            role,
            token,
        });
    };

    const logout = () => {
        Cookies.remove('role');
        Cookies.remove('token');
        setAuthState({});
        toast.success('Logout Successfully');
        props.history.push('/login');
    };

    const isAuthenticated = () => {
        if (!authState.token) {
            return false;
        }
        if (!authState.role) {
            return false;
        }
    };

    return (
        <Provider
            value={{
                authState,
                setAuthState: (authInfo) => setAuthInfo(authInfo),
                logout,
                isAuthenticated,
            }}>
            {children}
            <ToastContainer />
        </Provider>
    );
};

export { AuthContext, AuthProvider };
