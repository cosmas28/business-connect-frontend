import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

import DashboardNavBar from './../common/DashboardNavBar';
import UserBusinessView from './UserBusinessView';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="page-wrapper">
                <DashboardNavBar/>
                <Route path="/dashboard" render={
                    () => <Redirect to={{
                        'pathname': '/dashboard/user_business',
                        'state': {
                            'access_token': this.props.access_token,
                            'user_id': this.props.user_id
                        }
                    }}/>
                } />
                <Route path="/dashboard/user_business" render={() => (
                    <UserBusinessView
                        access_token={this.props.access_token}
                        user_id={this.props.user_id}/>
                ) }/>
            </div>
        );
    }
}

Dashboard.propTypes = {
    'access_token': PropTypes.string.isRequired,
    'user_id': PropTypes.number.isRequired
};

export default Dashboard;
