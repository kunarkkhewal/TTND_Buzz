import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Token from './components/Token';
import Buzz from './components/Buzz/Buzz'

class Routes extends Component {

    render() {
        return (
            <div>
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
                    path={'/buzz'}
                    component={Buzz}
                />
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