import React, { Component } from 'react';
import ttnd from '../../../Assets/TTN-logo-removebg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import './Login.css'

class App extends Component {

    componentDidMount = () => {
        if (localStorage.getItem('token')) {
            console.log('in login=>>>>', this.props)
            this.props.history.push('/dashboard/buzz')
        }
    }

    render() {
        return (
            <div className="loginDiv">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={ttnd} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Welcome To TTND-Buzz</h5>
                        <a href="http://localhost:5000/auth/google" class="button">
                                <span className="google-logo">{google}</span>
                                <span class="button-label">Sign in with Google</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const google = <FontAwesomeIcon icon={faGoogle} />

export default App;
