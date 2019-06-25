import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SideNavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';

class SideNavBar extends Component {
    render() {
        return (
            <div className='sideNavBar'>
                <ul >
                    <li className="rounded-lg">
                        <NavLink to='/dashboard/buzz' className="link">Buzz</NavLink>
                    </li>
                    <li className="rounded-lg">
                        <NavLink to='/dashboard/complaints' className="link">Complaints</NavLink>
                    </li>
                    {this.props.user[0].role === 'admin' ? <li className="rounded-lg">
                        <NavLink to='/dashboard/resolve' className="link">Resolve</NavLink>
                    </li> : null}
                </ul>

                <p>&copy; 2019 To The New Digital</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.UserReducer.userData }
}

export default connect(mapStateToProps)(SideNavBar);
