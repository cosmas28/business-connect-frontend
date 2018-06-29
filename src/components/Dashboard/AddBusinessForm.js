import React from 'react';
import PropTypes from 'prop-types';

import DashboardTitle from './../common/DashboardTitle';

const AddBusinessForm = props => {
    let responseMessage = null;
    if (props.responseMessage === 'Business has been registered successfully!') {
        responseMessage = <div className="alert alert-success" role="alert">
            {props.responseMessage}
        </div>;
    } else {
        responseMessage = <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error</strong> {props.responseMessage}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>;
    }

    return (
        <main className="main-body">
            <div className="container-fluid">
                <DashboardTitle title="Add Business"/>
                <div className="row no-gutters">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="create-business-page">
                        {props.responseMessage &&
                            responseMessage
                        }
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
                                           placeholder="Business Category"
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
    'handleInputChange': PropTypes.func.isRequired,
    'responseMessage': PropTypes.string
};

export default AddBusinessForm;
