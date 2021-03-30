import React from 'react';
import {
    AboutComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
} from '../page/index';

location.pathname;
import { Router, Switch, Route } from 'react-router-dom';
import { HeaderComponent } from './index';

const PublicRoutes = ({ history }) => {
    return (
        <Router history={history}>
            <HeaderComponent />
            <Switch>
                <Route path="/" exact component={HomeComponent} />
                <Route path="/about" exact component={AboutComponent} />
                <Route path="/login" exact component={LoginComponent} />
                <Route path="/admin/login" exact component={LoginComponent} />
                <Route
                    path="/admin/dashboard"
                    exact
                    component={DashboardComponent}
                />
            </Switch>
        </Router>
    );
};

export default PublicRoutes;
