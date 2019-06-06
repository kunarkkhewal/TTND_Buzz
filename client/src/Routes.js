import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout'
import Token from './components/Token';
import Buzz from './components/Buzz/Buzz'

class Routes extends Component{
    
    render(){
        return(
            <Router>
                <Route
                    exact
                    path="/"
                    component = {Login}
                />

                <Route
                    path='/token'
                    component = {Token}
                />

                <PrivateRoute
                    path='/buzz'
                    component = {Buzz}
                />

                {/* <PrivateRoute
                    isLogin={localStorage.getItem("token") ? true : false}
                    path='/buzz'
                    component={Buzz}
                /> */}

                {/* <Route
                    path='/logout'
                    component={Logout}
                /> */}
            </Router>
        )
    }
}

export default Routes;

const PrivateRoute = ({ component: Component, isLogin, ...restProps }) => {
    
    console.log("hello ",localStorage.getItem("token"));
    isLogin = localStorage.getItem("token") ? true : false;
    console.log("islogon",isLogin);
    return(
        <Route
            {...restProps}
            render={(props) => isLogin ? <Component {...props}/> : <Redirect to={'/'} /> }
        />
    )
}