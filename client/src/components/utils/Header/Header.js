import React from 'react';
import './Header.css';
import companylogo from '../../../Assets/tothenewlogo.png';
import companybanner from '../../../Assets/landscape-2373649_1920.jpg';
import { Link } from 'react-router-dom';

class Header extends React.Component {
        logout = () => {
            localStorage.removeItem('token');
            this.props.history.push('/')
        }

        render() {
            return (
                <header>
                    <nav>
                        <Link to='/dashboard/buzz'>
                        <img src={companylogo} alt='logo' className='companylogo'></img></Link>
                        {/* <img src={companylogo} alt='logo' className='companylogo'></img> */}
                        <button onClick={this.logout}>Logout</button>
                        {/* <i class="fas fa-sign-out-alt"></i> */}
                    </nav>
                    <img src={companybanner} alt='companybanner' className='companybanner'></img>
                </header>
            )
        }
    }

export default Header;