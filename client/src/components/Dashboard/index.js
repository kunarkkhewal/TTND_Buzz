import React, { Component } from 'react';
import SideNavBar from '../utils/SideNavBar';
import Complaint from '../Complaint/ComplaintManager'
import Resolve from '../Resolve/ResolveManager';
import { Route, Switch, Redirect } from 'react-router-dom';
import Buzz from '../Buzz/BuzzManager';
import Header from '../utils/Header';
import ErrorRoute from '../utils/Error';
import './Dashboard.css';
import { connect } from 'react-redux';


class Dashboard extends Component {

    render() {
        return (
            <div className='body'>
                <Header history={this.props.history} />
                <main className='container-fluid main'>
                    <aside className='aside'>
                        <SideNavBar />
                    </aside>
                    <section className='section'>
                        <Switch>
                            <Route
                                exact path={`${this.props.match.path}/buzz`}
                                component={Buzz}
                            />
                            <Route
                                exact path={`${this.props.match.path}/complaints`}
                                component={Complaint}
                            />
                            {(this.props.user[0].role === 'admin') ?
                                <Route
                                    exact path="/dashboard/resolve"
                                    component={Resolve}
                                />
                                : null}
                            <Route
                                path='/pagenotfound'
                                component={ErrorRoute}
                            />
                            <Redirect from='*' to="/pagenotfound" />
                        </Switch>
                    </section>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.UserReducer.userData }
}

export default connect(mapStateToProps)(Dashboard);