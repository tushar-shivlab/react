import React from 'react';
import './assets/css/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PublicRoutes, HeaderComponent } from './component/index';
import { HomeComponent } from './page/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const App = () => {
    return (
        <>
            <PublicRoutes />
        </>
    );
};

export default App;
