// ./src/components/Dashboard/Dashboard.js
import React from "react";
import { connect } from "react-redux";
import JwPagination from "jw-react-pagination";

import DashboardLayout from "../../components/DashboardLayout";
import BusinessCard from "../BusinessCard";
import BusinessPane from "../BusinessPane";

import {
  fetchBusinesses,
  searchBusinesses,
  registerBusiness,
  updateBusiness
} from "../../actions/businessActions";

import "./Dashboard.css";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.authUser = sessionStorage.getItem("userId");
    this.accessToken = sessionStorage.getItem("accessToken");
    this.state = {
      pageOfItems: []
    };
  }

  componentDidMount() {
    this.props.fetchBusinesses(this.accessToken);
  }

  handleSearch = event => {
    event.preventDefault();
    this.props
      .searchBusinesses(this.accessToken, this.state.search)
      .then(() => {
        this.props.history.push("/search/results/" + this.state.search);
      });
  };

  toggleSidePane = () =>
    this.setState({
      showSidePane: !this.state.showSidePane
    });

  onChangePage = pageOfItems => {
    this.setState({ pageOfItems });
  };

  render() {
    return (
      <DashboardLayout pageTitle="Home" toggleSidePane={this.toggleSidePane}>
        <main className="overview-page">
          <div className="business-card-wrapper">
            {!this.props.businesses && (
              <p>You have not registered a business.Please register one.</p>
            )}
            {this.state.pageOfItems.map(business => {
              return <BusinessCard key={business.id} data={business} />;
            })}
          </div>
          <div>
            <JwPagination
              items={this.props.businesses}
              pageSize={5}
              onChangePage={this.onChangePage}
            />
          </div>
        </main>
        <BusinessPane
          onDone={this.toggleSidePane}
          showSidePane={this.state.showSidePane}
          onSubmit={this.props.registerBusiness}
        />
      </DashboardLayout>
    );
  }
}

const mapStateToProps = state => ({
  businesses: state.businesses.data,
  message: state.messages,
  searchResults: state.searchResults
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: accessToken => dispatch(fetchBusinesses(accessToken)),
  registerBusiness: (accessToken, inputData) =>
    dispatch(registerBusiness(accessToken, inputData)),
  searchBusinesses: (accessToken, search) =>
    dispatch(searchBusinesses(accessToken, search)),
  updateBusiness: (accessToken, id, newData) =>
    dispatch(updateBusiness(accessToken, id, newData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
