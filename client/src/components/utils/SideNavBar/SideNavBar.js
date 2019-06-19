import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SideNavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";

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
                    <li className="rounded-lg">
                        <Link to='/dashboard/resolve' className="link">Resolve</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default SideNavBar;
