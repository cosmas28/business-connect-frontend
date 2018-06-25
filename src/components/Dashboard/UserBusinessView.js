import React from 'react';
import axios from "axios";
import PropTypes from 'prop-types';

import DashboardNavBar from './../common/DashboardNavBar';
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
        this.accessToken = sessionStorage.getItem('accessToken');
        this.userId = sessionStorage.getItem('userId');
        this.apiUrl = `https://weconnect-v2.herokuapp.com/api/v2/businesses/user/${this.userId}`;
    }

    componentDidMount() {
        axios.get(this.apiUrl, { 'headers': { 'Authorization': `Bearer ${this.accessToken}` } })
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
            <div>
                <DashboardNavBar/>
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
            </div>
        );
    }

}

export default UserBusinessView;
