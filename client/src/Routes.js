import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/utils/Login/';
import Token from './components/utils/Token';
import Dashboard from './components/Dashboard/';

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
                    <Redirect from='*' to='/' />
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