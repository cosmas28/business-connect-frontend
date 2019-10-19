import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import SidePane from '../SidePane';
import InputBox from '../InputBox';
import TextAreaBox from '../TextAreaBox';

import './BusinessPane.css';

class BusinessPane extends React.Component {
  constructor(props) {
    super(props);
    this.accessToken = sessionStorage.getItem('accessToken');
    this.state = {
      category: 'education',
      description: '',
      location: '',
      name: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleAddBusiness = (event) => {
    event.preventDefault();
    const { category, description, name, location } = this.state;
    const input = {
      category: category,
      location: location,
      name: name,
      summary: description
    }

    this.props.addBusiness(this.accessToken, input).then(() => this.setState({
      category: 'education',
      description: '',
      location: '',
      name: ''
    }))
  }

  render() {
    const { title, handleCancelButton, showSidePane, businessToEdit } = this.props;
    const { category, description, location, name } = this.state;

    return (
      <SidePane
        handleCancelButton={handleCancelButton}
        title={title}
        showSidePane={showSidePane}
      >
        <form className="business-form">
          <div className="select-wrap">
            <select value={category} onChange={this.handleInputChange} name="category" className="custom-select">
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
              label="ADD BUSINESS"
              disabled={''}
              handleOnClick={this.handleAddBusiness}
            />
          </div>
        </form>
      </SidePane>
    );
  }
}

BusinessPane.propTypes = {
  addBusiness: PropTypes.func,
  businessToEdit: PropTypes.object,
  handleCancelButton: PropTypes.func.isRequired,
  showSidePane: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default BusinessPane;
