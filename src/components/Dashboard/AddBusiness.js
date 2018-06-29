import React from 'react';
import axios from "axios";
import { connect } from 'react-redux';

import DashboardNavBar from './../common/DashboardNavBar';
import AddBusinessForm from './AddBusinessForm';
import * as actions from '../../actions/businessActions';

class AddBusiness extends React.Component {
    constructor(props) {
        super(props);
        this.accessToken = sessionStorage.getItem('accessToken');
        this.handleInputChange = this.handleInputChange.bind(this)
        this.addBusinessHandler = this.addBusinessHandler.bind(this)
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
        this.props.registerBusiness(this.accessToken, input)
    };

    render() {
        return (
        <div className="page-wrapper">
            <DashboardNavBar/>
            <AddBusinessForm 
                addBusinessHandler={this.addBusinessHandler}
                handleInputChange={this.handleInputChange}
                responseMessage={this.props.responseMessage}
            />
        </div>
        )
    }
}

//Maps state from store to props
const mapStateToProps = (state) => {
    return {
        responseMessage: state.registerBusiness.response_message,
    }
}

//Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        registerBusiness: (accessToken, inputData) => dispatch(actions.registerBusiness(accessToken, inputData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBusiness);
