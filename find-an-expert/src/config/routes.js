import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../component/Home/Home';
import Languages from '../component/Languages/Languages';
import Profile from '../component/Profile/Profile';
import EditProfile from '../component/EditProfile/EditProfile';
import Language from '../component/Language/Language';

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/languages" component={Languages} />
        <Route path="/profile" component={Profile} />
        <Route path="/profile/edit" component={EditProfile} />
        <Route path="/languages/:id" component={Language} />
    </Switch>
)