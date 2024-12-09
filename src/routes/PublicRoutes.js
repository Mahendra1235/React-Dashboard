import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import Login from './dashboard/Login';

function PublicRoutes() {
    return (
        <Switch>
            <Route path={SLUGS.Login} render={() => <div> <Login/></div>} />
            {/* <Route path={SLUGS.signup} render={() => <div>signup</div>} /> */}
            {/* <Route path={SLUGS.forgotPassword} render={() => <div>forgotPassword</div>} /> */}
            <Redirect to={SLUGS.Login} />
        </Switch>
    );
}

export default PublicRoutes;
