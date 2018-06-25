import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";

import { NavLink } from 'react-router-dom';

class DashboardNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.logoutUrl = 'https://weconnect-v2.herokuapp.com/api/v2/auth/logout';
        this.onClickLogout = this.onClickLogout.bind(this)
    }

    onClickLogout  = event => {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('userId');
        axios({ method: 'post', url: this.logoutUrl });
    }

    render() {
        let isRedirect = null;
        if (sessionStorage.getItem('accessToken') === null) {
            isRedirect = <Redirect to={{
                pathname: '/login'
            }} />;
        }

        return (
            <header>
                {isRedirect}
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <nav className="navbar fixed-top navbar-expand-lg account-menu navbar-light ">
                            <a className="navbar-brand we-logo">WeConnect</a>
                            <button className="navbar-toggler we-toggler" type="button" data-toggle="collapse" data-target="#sideNavbar" aria-controls="sideNavbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="sideNavbar">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                            Profile
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="nav-link" to="/dashboard/register_business" >Create business</NavLink>
                                            <NavLink className="nav-link" to="/dashboard/user_business" >View my business</NavLink>
                                            <a className="dropdown-item" href="" onClick={this.onClickLogout} >Logout</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
} 

export default DashboardNavBar;
