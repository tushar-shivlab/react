import React from 'react';
import './assets/css/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeComponent } from './page/index';
import { HeaderComponent } from './component/index';

const App = () => {
    return (
        <>
            <HeaderComponent />
            <HomeComponent />
        </>
    );
};

export default App;
