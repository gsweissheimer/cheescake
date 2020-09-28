import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import News from './pages/news';

const Routes = () => (

    <BrowserRouter>

        <Switch>

            <Route exact path="/" component={News} />
            <Route path="/welcome" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/news" component={News} /> 
            <Route path="/news/:interest" component={News} /> 
            <Route path="/Politics" component={News} />
            <Route path="/Business" component={News} />
            <Route path="/Tech" component={News} />
            <Route path="/Science" component={News} />
            <Route path="/Sports" component={News} />

        </Switch>

    </BrowserRouter>

)

export default Routes;