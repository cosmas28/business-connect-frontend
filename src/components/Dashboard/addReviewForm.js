// ./src/components/Dashboard/addReviewForm.js
import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {Object} props - properties from parent component
 * @returns {JSX} - render dashboard title bar
 */
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
          required
        ></textarea>
      </div>
      <div className="form-input-division">
        <button type="submit" className="btn btn-primary">
          Post review
        </button>
      </div>
    </form>
  );
};

// define prop types for AddReviewForm
AddReviewForm.propTypes = {
  addReviewHandler: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default AddReviewForm;
