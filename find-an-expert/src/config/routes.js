import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../component/Home/Home';
import Languages from '../component/Languages/Languages';
import Profile from '../component/Profile/Profile';

export default (
    <Switch>
        <Route expact path="/" component={Home}/>
        <Route path="/languages" component={Languages} />
        <Route path="/profile" component={Profile} />
    </Switch>
)