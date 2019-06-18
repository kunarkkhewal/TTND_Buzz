import React from 'react';
import './Header.css';
import companylogo from '../../../Assets/tothenewlogo.png';
import companybanner from '../../../Assets/landscape-2373649_1920.jpg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../../action/user.Action';
// import '../../../../node_modules/bootstrap/js/dist/modal';

class Header extends React.Component {

    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/')
    }

    componentDidMount = () => {
        this.props.getUser();
    }



    render() {

        const { role, department, username, emailId, thumbnail } = this.props.user[0];
        console.log("role=>>>>>>>>>>>>>>>", role)
        return (
            <header>
                <nav>
                    {console.log('in header wala part getting user', this.props.user[0])}
                    <Link to='/dashboard/buzz'>
                        <img src={companylogo} alt='logo' className='companylogo'></img></Link>
                    <span>
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" className="img" data-toggle="modal" data-target="#exampleModal">
                            <img src={thumbnail} alt="" />
                            </button>
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">{username}</h5>
                                        </div>
                                        <div className="modal-body">
                                            <img src={thumbnail} alt=""/>
                                            <h6>{emailId}</h6>
                                            <h6>{department}</h6>
                                            <h6>{role}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <button className='logout' onClick={this.logout}>Logout</button>
                    </span>
                </nav>
                <img src={companybanner} alt='companybanner' className='companybanner'></img>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.UserReducer.userData }
}

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);