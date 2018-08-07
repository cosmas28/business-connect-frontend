// ./src/components/common/AlertMessage.js
import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {Object} props - properties from parent component
 * @returns {JSX} - render alert message
 */
const AlertMessage = props => {
    return (
        <div>
            {props.statusCode === 204 ? (
                <div>
                    {props.alertMessage &&
                    <div className="alert alert-success" role="alert">
                        {props.alertMessage}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    }
                </div>
            ) : (
                <div>
                    {props.alertMessage &&
                    <div className="alert alert-danger" role="alert">
                        {props.alertMessage}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    }
                </div>
            )}
        </div>
    );
};

// define prop types for AlertMessage
AlertMessage.propTypes = {
    'alertMessage': PropTypes.string,
    'statusCode': PropTypes.number
};

export default AlertMessage;
