import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SideNavBar.css';

class SideNavBar extends Component {
    render() {
        return (
            <div className='sideNavBar'>
                <ul>
                    <li>
                        <Link to='/dashboard/buzz'>Buzz</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/complaints'>Complaints</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/resolve'>Resolve</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default SideNavBar;
