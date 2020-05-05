import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import SidePane from "../SidePane";
import InputBox from "../InputBox";
import TextAreaBox from "../TextAreaBox";

import "./BusinessPane.css";

class BusinessPane extends React.Component {
  constructor(props) {
    super(props);
    this.accessToken = sessionStorage.getItem("accessToken");
    this.state = {
      category: "education",
      description: "",
      location: "",
      name: ""
    };
  }

  componentDidMount() {
    this.setBusinessToEdit();
  }

  componentDidUpdate({ business }) {
    if (this.props.business !== business) {
      this.setBusinessToEdit();
    }
  }

  setBusinessToEdit = () => {
    if (!this.props.business) return;
    const { name, summary, location, category } = this.props.business;
    this.setState({
      category: category,
      description: summary,
      location: location,
      name: name
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { category, description, name, location } = this.state;
    const { onSubmit, business } = this.props;
    const input = {
      category: category,
      location: location,
      name: name,
      summary: description
    };

    if (business) {
      onSubmit(this.accessToken, business.id, input).then(
        () => this.props.onDone
      );
    } else {
      onSubmit(this.accessToken, input).then(() => this.props.onDone());
    }
  };

  render() {
    const { showSidePane, business } = this.props;
    const { category, description, location, name } = this.state;
    const title = business ? `Edit ${name}` : "ADD BUSINESS IDEA";

    return (
      <SidePane
        handleCancelButton={this.props.onDone}
        title={title}
        showSidePane={showSidePane}
      >
        <form className="business-form">
          <div className="select-wrap">
            <select
              value={category}
              onChange={this.handleInputChange}
              name="category"
              className="custom-select"
            >
              <option value="technology">Technology</option>
              <option value="fashion">Fashion</option>
              <option value="education">Education</option>
              <option value="media">Media</option>
              <option value="enternaiment">Enternaiment</option>
              <option value="food">Food</option>
              <option value="mobile">Mobile</option>
              <option value="logistics">Logistics</option>
            </select>
          </div>
          <InputBox
            type="text"
            value={name}
            name="name"
            placeholder="Business Name"
            errorMessage=""
            handleOnChange={this.handleInputChange}
          />
          <InputBox
            type="text"
            value={location}
            name="location"
            placeholder="Location"
            errorMessage=""
            handleOnChange={this.handleInputChange}
          />
          <TextAreaBox
            name="description"
            value={description}
            placeholder="Description"
            rowsCount="3"
            handleOnChange={this.handleInputChange}
          />
          <div className="form-item">
            <Button
              typeColor="primary"
              label={business ? "EDIT IDEA" : "ADD IDEA"}
              disabled={""}
              handleOnClick={this.handleSubmit}
            />
          </div>
        </form>
      </SidePane>
    );
  }
}

BusinessPane.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  business: PropTypes.object,
  onDone: PropTypes.func.isRequired,
  showSidePane: PropTypes.bool.isRequired
};

export default BusinessPane;
