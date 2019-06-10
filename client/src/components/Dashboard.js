import React, { Component } from 'react';
import SideNavBar from './utils/SideNavBar/SideNavBar';
import Complaint from './Complaint/Complaint'
import Resolve from './Resolve/Resolve';
import { Route } from 'react-router-dom';
import Buzz from './Buzz/Buzz';
import Header from './utils/Header/Header';


class Dashboard extends Component {

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <aside>
                        <SideNavBar />
                    </aside>
                    <section>
                        <Route
                            exact path={`${this.props.match.path}/buzz`}
                            component={Buzz}
                        />
                        <Route
                            exact path="/dashboard/complaints"
                            component={Complaint}
                        />
                        <Route
                            exact path="/dashboard/resolve"
                            component={Resolve}
                        />
                    </section>
                </main>
            </div>
        )
    }
}

export default Dashboard;