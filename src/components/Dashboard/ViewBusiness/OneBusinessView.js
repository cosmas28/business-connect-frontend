import React from 'react';
import PropTypes from 'prop-types';

const OneBusinessView = props => {
    let renderedBusiness = null;
    if (props.businessName) {
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
    } else {
        renderedBusiness = <h2>No registered business</h2>
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
    'businessSummary': PropTypes.string.isRequired
};

export default OneBusinessView;
