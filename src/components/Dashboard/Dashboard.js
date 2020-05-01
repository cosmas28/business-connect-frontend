// ./src/components/Dashboard/Dashboard.js
import React from "react";
import { connect } from "react-redux";
import JwPagination from "jw-react-pagination";

import DashboardLayout from "../../components/DashboardLayout";
import BusinessCard from "../BusinessCard";
import BusinessPane from "../BusinessPane";
import DeleteModal from "../DeleteModal";

import {
  fetchBusinesses,
  deleteBusiness,
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
      pageOfItems: [],
      clickedBusinessId: null,
      selectedBusiness: {
        category: "",
        created_by: "",
        id: "",
        location: "",
        name: "",
        summary: ""
      },
      showSidePane: false,
      sidePaneMode: "Add",
      showDeleteModal: false
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

  toggleDeleteModal = () =>
    this.setState({
      showDeleteModal: !this.state.showDeleteModal
    });

  toggleSidePane = (mode, action = "open") => () =>
    this.setState({
      showSidePane: !this.state.showSidePane,
      sidePaneMode: mode,
      selectedBusiness:
        action === "close"
          ? {
              category: "",
              created_by: "",
              id: "",
              location: "",
              name: "",
              summary: ""
            }
          : this.state.selectedBusiness
    });

  onChangePage = pageOfItems => {
    this.setState({ pageOfItems });
  };

  toggleBusinessDropdown = businessId => () =>
    this.setState({
      clickedBusinessId:
        this.state.clickedBusinessId !== businessId ? businessId : null
    });

  handleBusinessDropdownButton = (business, toggleMethod) => () =>
    this.setState(
      {
        selectedBusiness: business,
        clickedBusinessId: null
      },
      () => toggleMethod()
    );

  deleteConfirmedBusiness = () =>
    this.props
      .deleteBusiness(this.accessToken, this.state.selectedBusiness.id)
      .then(() => this.toggleDeleteModal());

  render() {
    const authUser = sessionStorage.getItem("userId");
    console.log(">>>>>>", this.props.businesses);
    return (
      <DashboardLayout
        pageTitle="Home"
        toggleSidePane={this.toggleSidePane("Add")}
      >
        <main className="overview-page">
          <div className="business-card-wrapper">
            {!this.props.businesses && (
              <p>You have not registered a business.Please register one.</p>
            )}
            {this.state.pageOfItems.map(business => {
              return (
                <BusinessCard
                  key={business.id}
                  business={business}
                  authUser={this.authUser}
                  onDelete={this.props.deleteBusiness}
                  clickedBusinessId={this.state.clickedBusinessId}
                  onClickEllipsisHandler={this.toggleBusinessDropdown(
                    business.id
                  )}
                  onClickDropdownEditButton={this.handleBusinessDropdownButton(
                    business,
                    this.toggleSidePane("Edit")
                  )}
                  onClickDropdownDeleteButton={this.handleBusinessDropdownButton(
                    business,
                    this.toggleDeleteModal
                  )}
                />
              );
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
          mode={this.state.sidePaneMode}
          handleCancelButton={this.toggleSidePane("Add", "close")}
          showSidePane={this.state.showSidePane}
          addBusiness={this.props.registerBusiness}
          businessToEdit={this.state.selectedBusiness}
          editBusiness={this.props.updateBusiness}
        />
        <DeleteModal
          businessName={this.state.selectedBusiness.name}
          handleCancelButton={this.toggleDeleteModal}
          handleOnDeleteButton={this.deleteConfirmedBusiness}
          showDeleteModal={this.state.showDeleteModal}
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
  deleteBusiness: (accessToken, id) =>
    dispatch(deleteBusiness(accessToken, id)),
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
