import React from 'react';
import PropTypes from 'prop-types';

const OneBusinessView = props => {
    let renderedBusiness = null;
    if (props.errorMessage === null) {
        renderedBusiness = <div className="row no-gutters">
            <div className="col-md-5">
                <div className="view-left-side">
                    <a href="">
                        <img className="view-image" src="http://placehold.it/700x300" alt="" />
                    </a>
                </div>
            </div>
            <div className="col-md-7">
                <div className="view-right-side">
                    <h3>{props.businessName}</h3>
                    <h4>{props.businessOwner}</h4>
                    <p className="business-summary">{props.businessSummary}</p>
                    <div>
                        <i className="business-location">{props.businessLocation}</i>-
                        <strong className="business-category">{props.businessCategory}</strong>
                    </div>
                </div>
            </div>
        </div>;
    } else if (props.errorMessage) {
        renderedBusiness = <h3>{props.errorMessage}</h3>;
    } else {
        renderedBusiness = <p>You have not registered a business.Please register one.</p>;
    }

    return (
        <div className="single-business">
            {renderedBusiness}
        </div>
    );
};

OneBusinessView.propTypes = {
    'businessCategory': PropTypes.string.isRequired,
    'businessLocation': PropTypes.string.isRequired,
    'businessName': PropTypes.string.isRequired,
    'businessOwner': PropTypes.string.isRequired,
    'businessSummary': PropTypes.string.isRequired,
    'errorMessage': PropTypes.string
};

export default OneBusinessView;
