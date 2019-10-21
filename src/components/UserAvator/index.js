import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaCaretRight } from 'react-icons/fa';
import axios from 'axios';

import NavBarLink from '../NavBarLink';
import history from '../../helpers/history';

import './UserAvator.css';

class UserAvator extends React.Component {
  constructor(props) {
    super(props);
    this.accessToken = sessionStorage.getItem('accessToken');
    this.logoutUrl = process.env.REACT_APP_API_URL + '/auth/logout';
    this.state = { showDropDown: false };
  }

  toggleDropdown = () => this.setState({
    showDropDown: !this.state.showDropDown
  })

  handleLogout = () => {
    axios.post(this.logoutUrl, {}, {
        'headers': {
        'Authorization': `Bearer ${this.accessToken}`,
        'content-type': 'application/json'
      }
    });
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('userId');
    history.push('/login');
  }

  render () {
    return (
      <div className="user-avator">
        <div className=""><FaUser size={30} color="#ffffff" /></div>
        <div className="avator-dropdown">
          <div className="user-name">
              <p>{this.props.userName}</p>
              <button onClick={this.toggleDropdown} className="dropdown-button">
                  <FaCaretRight size={20} color="#ffffff"/>
              </button>
          </div>
          <div className={`dropdown-content ${this.state.showDropDown && 'dropdown-content--active'}`}>
            <NavBarLink
              iconName="settings"
              label="Settings"
              type="button"
            />
            <NavBarLink
              iconName="logout"
              label="Logout"
              type="button"
              onClickLink={this.handleLogout}
            />
          </div>
        </div>
      </div>
    );
  }
}

UserAvator.propTypes = { 'userName': PropTypes.string.isRequired };

export default UserAvator;
