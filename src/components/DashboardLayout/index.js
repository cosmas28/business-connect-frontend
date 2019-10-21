import React from 'react';
import { FaConnectdevelop } from 'react-icons/fa';
import PropTypes from 'prop-types';

import PageHeader from '../PageHeader/';
import SideNavBar from '../../components/SideNavBar';
import BusinessPane from '../BusinessPane';
import UserAvator from '../UserAvator';

import './DashboardLayout.css';

class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSidePane: false };
  }

  toggleSidePane = () => this.setState({ showSidePane: !this.state.showSidePane })

  render() {
    return (
      <div className="page-wrapper">
        <div className="side-navbar">
          <div className="wrap-logo">
            <FaConnectdevelop size={30} />
          </div>
          <SideNavBar handleAddButton={this.toggleSidePane} />
          <UserAvator
            userName="Cosmas Billa"
          />
        </div>
        <div className="overview">
          <PageHeader pageTitle={this.props.pageTitle} />
          {this.props.children}
          <BusinessPane
            title="Add Business Idea"
            handleCancelButton={this.toggleSidePane}
            showSidePane={this.state.showSidePane}
            addBusiness={this.props.handleAddBusiness}
          />
        </div>
      </div>
    );
  }
}

DashboardLayout.propTypes = {
  'pageTitle': PropTypes.string.isRequired,
  handleAddBusiness: PropTypes.func,
}

export default DashboardLayout;
