import React from 'react';
import PropTypes from 'prop-types';

import NavBarLink from '../../components/NavBarLink';

import './SideNavBar.css';

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeLink: 'Home' };
  }

  toggleActiveLink = (linkName) => () => this.setState({
    activeLink: linkName
  })

  render () {
    return (
      <div className="nav-links">
        <NavBarLink
          isActive={this.state.activeLink === 'Home' && true}
          iconName="Home"
          url="/dashboard"
          label="Home"
          onClickLink={this.toggleActiveLink('Home')}
        />
        <NavBarLink
          isActive={this.state.activeLink === 'My Businesses' && true}
          iconName="My Businesses"
          url="/dashboard"
          label="My Businesses"
          onClickLink={this.toggleActiveLink('My Businesses')}
        />
        <NavBarLink
          iconName="Add Business"
          url=""
          label="Add Business"
          onClickLink={this.props.handleAddButton}
        />
      </div>
    );
  }
}

SideNavBar.propTypes = { 'handleAddButton': PropTypes.func.isRequired }

export default SideNavBar;
