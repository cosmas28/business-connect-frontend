import React from 'react';
import axios from "axios";
import PropTypes from 'prop-types';

import DashboardTitle from './../common/DashboardTitle';
import OneBusinessView from './ViewBusiness/OneBusinessView';

class UserBusinessView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            errorMessage: '',
            location: '',
            name: '',
            owner: '',
            summary: ''
        };
        this.apiUrl = `https://weconnect-v2.herokuapp.com/api/v2/businesses/user/${this.props.user_id}`;
    }

    componentDidMount() {
        axios.get(this.apiUrl, { 'headers': { 'Authorization': `Bearer ${this.props.access_token}` } })
            .then(response => {
                this.setState({
                    category: response.data.category,
                    location: response.data.location,
                    name: response.data.name,
                    owner: response.data.created_by,
                    summary: response.data.summary
                });
            })
            .catch(error => {
            if (error.response) {
                this.setState({ errorMessage: error.request.response_message });
            } else if (error.request) {
                this.setState({ errorMessage: error.request.response_message });
            }
        });
    }

    render() {
        return (
            <main className="main-body">
                <div className="container-fluid">
                    <DashboardTitle title="My business"/>
                    <OneBusinessView
                        businessCategory={this.state.category}
                        businessLocation={this.state.location}
                        businessName={this.state.name}
                        businessOwner={this.state.owner}
                        businessSummary={this.state.summary}
                        errorMessage={this.state.errorMessage}
                    />
                </div>
            </main>
        );
    }

}

UserBusinessView.propTypes = {
    'access_token': PropTypes.string.isRequired,
    'user_id': PropTypes.number.isRequired
};

export default UserBusinessView;
