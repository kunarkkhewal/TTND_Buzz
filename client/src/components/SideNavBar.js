import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SideNavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/buzz'>Buzz</Link>
                    </li>
                    <li>
                        <Link to='/complaints'>Complaints</Link>
                    </li>
                    <li>
                        <Link to='/resolved'>Resolve</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default SideNavBar;
