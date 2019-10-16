// ./src/components/common/DashboardNavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import history from '../../helpers/history';
import axios from 'axios';

import './DashboardNavBar.css';

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
            <div className="navbar-wrap">
                <div className="logo-wrap">
                    <NavLink className="logo-text" to="/dashboard">Home</NavLink>
                </div>
                <div className="search-wrap">
                    <form>
                        <div className="form-item">
                            <input
                                type="text"
                                name="search"
                                className="form-text-input form-control"
                                placeholder="search"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default DashboardNavBar;
