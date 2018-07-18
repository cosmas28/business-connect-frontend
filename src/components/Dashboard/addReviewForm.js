import React from 'react';
import PropTypes from 'prop-types';

const AddReviewForm = props => {
    return (
        <form onSubmit={props.addReviewHandler}>
            <div className="form-input-division">
                <textarea
                    name="review"
                    className="register-form-input"
                    placeholder="Write a review"
                    rows="2"
                    onChange={props.handleInputChange}
                    >
                </textarea>
            </div>
            <div className="form-input-division">
                <button type="submit" className="btn btn-primary">Post review</button>
            </div>
        </form>
    );
};

AddReviewForm.propTypes = {
    'addReviewHandler': PropTypes.func.isRequired,
    'handleInputChange': PropTypes.func.isRequired
};

export default AddReviewForm;
