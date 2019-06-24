import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideNavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from 'react-redux';

class SideNavBar extends Component {
    render() {
        return (
            <div className='sideNavBar'>
                <ul >
                    <li className="rounded-lg">
                        <Link to='/dashboard/buzz' className="link">Buzz</Link>
                    </li>
                    <li className="rounded-lg">
                        <Link to='/dashboard/complaints' className="link">Complaints</Link>
                    </li>
                    {this.props.user[0].role === 'admin' ? <li className="rounded-lg">
                        <Link to='/dashboard/resolve' className="link">Resolve</Link>
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
