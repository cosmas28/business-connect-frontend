import React from 'react';
import PropTypes from 'prop-types';

import DashboardTitle from './../common/DashboardTitle';

const AddBusinessForm = props => {
    let responseMessage = null;
    if (props.successMessage) {
        responseMessage = <div className="alert alert-success" role="alert">
            {props.successMessage}
        </div>;
    } else if (props.errorMessage) {
        responseMessage = <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error</strong> {props.errorMessage}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>;
    } else {
        responseMessage = null;
    }
    return (
        <main className="main-body">
            <div className="container-fluid">
                <DashboardTitle title="Add Business"/>
                <div className="row no-gutters">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="main-login-page">
                            {responseMessage}
                            <form onSubmit={props.addBusinessHandler}>
                                <div className="form-input-division">
                                    <input type="text"
                                           name="name"
                                           className="test register-form-input"
                                           placeholder="Business Name"
                                           onChange={props.handleInputChange}
                                           required
                                    />
                                </div>
                                <div className="form-input-division">
                                    <input type="text"
                                           name="category"
                                           className="register-form-input"
                                           placeholder="Business Number"
                                           onChange={props.handleInputChange}
                                           required
                                    />
                                </div>
                                <div className="form-input-division">
                                    <input type="text"
                                           name="location"
                                           className="register-form-input"
                                           placeholder="Business Location"
                                           onChange={props.handleInputChange}
                                           required
                                    />
                                </div>
                                <div className="form-input-division">
                                    <textarea name="summary"
                                              className="register-form-input"
                                              placeholder="Business Description"
                                              rows="3"
                                              onChange={props.handleInputChange}
                                              required
                                    />
                                </div>
                                <div className="form-input-division">
                                    <button type="submit" className="btn btn-primary input-default form-btn">Register Business</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

AddBusinessForm.propTypes = {
    'addBusinessHandler': PropTypes.func.isRequired,
    'errorMessage': PropTypes.string,
    'handleInputChange': PropTypes.func.isRequired,
    'successMessage': PropTypes.string
};

export default AddBusinessForm;
