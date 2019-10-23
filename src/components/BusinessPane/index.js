import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import SidePane from "../SidePane";
import InputBox from "../InputBox";
import TextAreaBox from "../TextAreaBox";

import "./BusinessPane.css";

const renderSubmitButton = (mode, addModeHandler, editModeHandler) => {
  if (mode === "Add") {
    return (
      <Button
        typeColor="primary"
        label="ADD IDEA"
        disabled={""}
        handleOnClick={addModeHandler}
      />
    );
  }

  return (
    <Button
      typeColor="primary"
      label="EDIT IDEA"
      disabled={""}
      handleOnClick={editModeHandler}
    />
  );
};

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

  componentDidUpdate({ businessToEdit }) {
    if (this.props.businessToEdit !== businessToEdit) {
      const { name, summary, location, category } = this.props.businessToEdit;
      this.setState({
        category: category,
        description: summary,
        location: location,
        name: name
      });
    }
  }

  resetState = () =>
    this.setState(
      {
        category: "education",
        description: "",
        location: "",
        name: ""
      },
      () => this.props.handleCancelButton()
    );

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleAddBusiness = event => {
    event.preventDefault();
    const { category, description, name, location } = this.state;
    const input = {
      category: category,
      location: location,
      name: name,
      summary: description
    };

    if (this.props.mode === "Add") {
      this.props
        .addBusiness(this.accessToken, input)
        .then(() => this.resetState());
    } else {
      this.props
        .editBusiness(this.accessToken, this.props.businessToEdit.id, input)
        .then(() => this.resetState());
    }
  };

  render() {
    const { mode, showSidePane } = this.props;
    const { category, description, location, name } = this.state;
    const title = mode === "Add" ? "ADD BUSINESS IDEA" : `Edit ${name}`;

    return (
      <SidePane
        handleCancelButton={this.resetState}
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
            {renderSubmitButton(
              mode,
              this.handleAddBusiness,
              this.handleAddBusiness
            )}
          </div>
        </form>
      </SidePane>
    );
  }
}

BusinessPane.propTypes = {
  addBusiness: PropTypes.func,
  businessToEdit: PropTypes.object,
  editBusiness: PropTypes.func.isRequired,
  handleCancelButton: PropTypes.func.isRequired,
  showSidePane: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired
};

export default BusinessPane;
