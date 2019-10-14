// ./src/components/Dashboard/AddBusiness.js
import React from 'react';
import { connect } from 'react-redux';

import DashboardNavBar from './../common/DashboardNavBar';
import AddBusinessForm from './AddBusinessForm';
import * as actions from '../../actions/businessActions';

export class AddBusiness extends React.Component {

    /**
     *
     * @param {Object} props - passed properties
     */
    constructor(props) {
        super(props);
        this.accessToken = sessionStorage.getItem('accessToken');
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addBusinessHandler = this.addBusinessHandler.bind(this);
    }

    // event handler for business registration input change
    handleInputChange(event) {
        // const object = event.target;
        // const { value: v, name: key } = object;
        // this.setState({ [key]: v });
        const target = event.target;
        const options = target.options;
        const indexx = options && options.selectedIndex;
        const selectedValue = options && options[indexx].value;
        const value = target.type === 'select-multiple'
                                        ? selectedValue
                                        : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    // event handler for business registration form onSubmit event
    addBusinessHandler(event) {
        event.preventDefault();
        const input = {
            category: this.state.category,
            location: this.state.location,
            name: this.state.name,
            summary: this.state.summary
        };
        this.props.registerBusiness(this.accessToken, input);
    }

    // renders JSX content
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
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state) => {
    return {
        // responseMessage: state.registerBusiness.response_message,
        responseMessage: state.messages.response_message
    };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        registerBusiness: (accessToken, inputData) => dispatch(actions.registerBusiness(accessToken, inputData))
    };
};

// use connect to put mapStateToProps and mapDispatchToProps together
export default connect(mapStateToProps, mapDispatchToProps)(AddBusiness);
