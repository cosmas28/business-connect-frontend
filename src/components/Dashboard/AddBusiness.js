import React from 'react';
import axios from "axios";

import DashboardNavBar from './../common/DashboardNavBar';
import AddBusinessForm from './AddBusinessForm'

class AddBusiness extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: '',
            successMessage: ''
        };
        this.accessToken = sessionStorage.getItem('accessToken');
        this.handleInputChange = this.handleInputChange.bind(this)
        this.addBusinessHandler = this.addBusinessHandler.bind(this)
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
            name: this.state.name,
            category: this.state.category,
            location: this.state.location,
            summary: this.state.summary
        };
        axios.post(this.apiUrl, input, { 'headers': { 'Authorization': `Bearer ${this.accessToken}` } }).then(response => {
            this.setState({ successMessage: response.data.response_message });
            event.target.reset();
        }).catch((error) => {
            if (error.response) {
                this.setState({ errorMessage: error.response.data.response_message });
            }
        });
    };

    render() {
        return (
        <div className="page-wrapper">
            <DashboardNavBar/>
            <AddBusinessForm 
                addBusinessHandler={this.addBusinessHandler}
                handleInputChange={this.handleInputChange}
                errorMessage={this.state.errorMessage}
                successMessage={this.state.successMessage}

            />
        </div>
        )
    }
}

export default AddBusiness;
