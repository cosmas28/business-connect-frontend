import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import axios from "axios";

import DashboardNavBar from './../common/DashboardNavBar';
import UserBusinessView from './UserBusinessView';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.accessToken = sessionStorage.getItem('accessToken');
        this.apiUrl = 'https://weconnect-v2.herokuapp.com/api/v2/businesses';
    }

    render() {
        return (
            <div className="page-wrapper">
                <DashboardNavBar/>
                <Route exact path="/dashboard" render={
                    () => <Redirect to={{
                        'pathname': '/dashboard/user_business'
                    }}/>
                } />
            </div>
        );
    }
}


export default Dashboard;
