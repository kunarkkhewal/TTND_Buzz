import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/utils/Login/';
import Token from './components/utils/Token';
import Dashboard from './components/Dashboard/';
import Error from '../src/components/utils/Error/';

class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Login}
                    />

                    <Route
                        path='/token'
                        component={Token}
                    />

                    <PrivateRoute
                        path={'/dashboard'}
                        component={Dashboard}
                    />

                    <Route
                        path='/pagenotfound'
                        component={Error}
                    />
                    <Redirect from='*' to='/pagenotfound' />
                </Switch>
            </div>
        )
    }
}

export default Routes;

const PrivateRoute = ({ component: Component, ...restProps }) => {
    return (
        <Route
            {...restProps}
            render={(props) => localStorage.getItem("token") ? <Component {...props} /> : <Redirect to={'/'} />}
        />
    )
}