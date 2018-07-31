// ./src/components/common/DashboardNavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import history from '../../helpers/history';
import axios from 'axios';

class DashboardNavBar extends React.Component {

    /**
     *
     * @param {Object} props - passed properties
     */
    constructor(props) {
        super(props);
        this.state = {};
        this.accessToken = sessionStorage.getItem('accessToken');
        this.logoutUrl = process.env.REACT_APP_API_URL + '/auth/logout';
        this.onClickLogout = this.onClickLogout.bind(this);
    }

    // event hander for logout link, when clicked
    onClickLogout() {
        axios.post(this.logoutUrl, {}, {
                'headers': {
                'Authorization': `Bearer ${this.accessToken}`,
                'content-type': 'application/json'
            }
        });
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('loggedIn');
        sessionStorage.removeItem('userId');
        history.push('/login');
    }

    // renders JSX for dashboard navigation bar
    render() {
        return (
            <header>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <nav className="navbar fixed-top navbar-expand-lg account-menu navbar-light ">
                            <NavLink className="navbar-brand we-logo" to="/dashboard">WeConnect</NavLink>
                            <button className="navbar-toggler we-toggler" type="button" data-toggle="collapse" data-target="#sideNavbar" aria-controls="sideNavbar" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"> </span>
                            </button>

                            <div className="collapse navbar-collapse" id="sideNavbar">
                                <ul className="navbar-nav ml-auto">
                                    <li><NavLink className="nav-link" to="/dashboard">Dashboard</NavLink></li>
                                    <li><a className="nav-link" href="" onClick={this.onClickLogout} >Logout</a></li>
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
