import React from 'react';
import './Header.css';
import companylogo from '../../../Assets/tothenewlogo.png';
import companybanner from '../../../Assets/banner1.jpg';

class Header extends React.Component {
    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/')
    }

    render() {
        return (
            <header>
                <nav>
                    <img src={companylogo} alt='logo' className='companylogo'></img>
                    <button onClick={this.logout}>Logout</button>
                    {/* <i class="fas fa-sign-out-alt"></i> */}
                </nav>
                <img src={companybanner} alt='companybanner' className='companybanner'></img>
            </header>
        )
    }
}

export default Header;