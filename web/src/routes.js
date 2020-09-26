import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import News from './pages/news';

const Routes = () => (

    <BrowserRouter>

        <Switch>

            <Route exact path="/" component={News} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/news" component={News} /> 
            <Route path="/news/:interest" component={News} /> 

        </Switch>

    </BrowserRouter>

)

export default Routes;