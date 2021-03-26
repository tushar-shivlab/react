import React, { useEffect, useState } from 'react';
import './assets/css/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PublicRoutes } from './component/index';
import { UserProvider } from './context/context';
import Cookies from 'js-cookie';

const App = () => {
    const role = Cookies.get('role');

    return (
        <UserProvider>
            <PublicRoutes />
        </UserProvider>
    );
};

export default App;
