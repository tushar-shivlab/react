import React, { useEffect, useState } from 'react';
import './assets/css/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PublicRoutes } from './component/index';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/context';
import Cookies from 'js-cookie';
import { createBrowserHistory } from 'history';

const App = () => {
    const role = Cookies.get('role');
    const history = createBrowserHistory();
    return (
        <AuthProvider history={history}>
            <PublicRoutes history={history} />
        </AuthProvider>
    );
};

export default App;
