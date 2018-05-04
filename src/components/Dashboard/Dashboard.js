import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import axios from "axios";

import DashboardNavBar from './../common/DashboardNavBar';
import UserBusinessView from './UserBusinessView';
import AddBusinessForm from './AddBusinessForm'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'errorMessage': '',
            'successMessage': ''
        };
        this.apiUrl = 'https://weconnect-v2.herokuapp.com/api/v2/businesses';
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    };

    addBusinessHandler = event => {
        event.preventDefault();
        const input = {
            'name': this.state.name,
            'category': this.state.category,
            'location': this.state.location,
            'summary': this.state.summary
        };
        axios.post(this.apiUrl, input, { 'headers': { 'Authorization': `Bearer ${this.props.access_token}` } }).then(response => {
            this.setState({ 'successMessage': response.data.message });
            event.target.reset();
        }).catch((error) => {
            if (error.response) {
                this.setState({ 'errorMessage': error.response.data.message });
            }
        });
    };

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
                <Route path="/dashboard/register_business" render={() => (
                    <AddBusinessForm
                        addBusinessHandler={this.addBusinessHandler}
                        errorMessage={this.state.errorMessage}
                        handleInputChange={this.handleInputChange}
                        successMessage={this.successMessage}
                    />
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
