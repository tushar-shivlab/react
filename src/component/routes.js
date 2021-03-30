import React from 'react';
import { AboutComponent, LoginComponent, HomeComponent } from '../page/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HeaderComponent } from './index';
const PublicRoutes = ({ history }) => {
    return (
        <Router history={history}>
            <HeaderComponent />
            <Switch>
                <Route path="/" exact component={HomeComponent} />
                <Route path="/about" exact component={AboutComponent} />
                <Route path="/login" exact component={LoginComponent} />
            </Switch>
        </Router>
    );
};

export default PublicRoutes;
