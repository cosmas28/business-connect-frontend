// ./src/components/Dashboard/Dashboard.js
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import JwPagination from "jw-react-pagination";

import DashboardLayout from "../../components/DashboardLayout";
import { BusinessCard } from "../BusinessCard";
import BusinessPane from "../BusinessPane";

import {
  fetchBusinesses,
  searchBusinesses,
  registerBusiness
} from "../../actions/businessActions";

import "./Dashboard.css";

export const Dashboard = props => {
  const accessToken = sessionStorage.getItem("accessToken");
  const [pageOfItems, setPageOfItems] = useState([]);
  const [showSidePane, setShowSidePane] = useState(false);
  // to be used soon
  const [search, setSearch] = useState(null);

  const dispatch = useDispatch();
  const fetchData = accessToken => dispatch(fetchBusinesses(accessToken));
  const onSearchBusinesses = (accessToken, search) =>
    dispatch(searchBusinesses(accessToken, search));
  const onRegisterBusiness = useCallback(
    (accessToken, inputData) =>
      dispatch(registerBusiness(accessToken, inputData)),
    [dispatch]
  );

  const { businesses, message, searchResults } = useSelector(
    state => ({
      businesses: state.businesses.data,
      message: state.messages,
      searchResults: state.searchResults
    }),
    shallowEqual
  );

  useEffect(() => {
    fetchData(accessToken);
  }, []);

  // to be used soon
  const handleSearch = event => {
    event.preventDefault();
    onSearchBusinesses(accessToken, search).then(() => {
      props.history.push("/search/results/" + search);
    });
  };

  const toggleSidePane = () => setShowSidePane(!showSidePane);

  const onChangePage = pageOfItems => {
    setPageOfItems(pageOfItems);
  };

  return (
    <DashboardLayout pageTitle="Home" toggleSidePane={toggleSidePane}>
      <main className="overview-page">
        <div className="business-card-wrapper">
          {!businesses && (
            <p>You have not registered a business.Please register one.</p>
          )}
          {pageOfItems.map(business => {
            return <BusinessCard key={business.id} data={business} />;
          })}
        </div>
        <div>
          <JwPagination
            items={businesses}
            pageSize={5}
            onChangePage={onChangePage}
          />
        </div>
      </main>
      <BusinessPane
        onDone={toggleSidePane}
        showSidePane={showSidePane}
        onSubmit={onRegisterBusiness}
      />
    </DashboardLayout>
  );
};

export default Dashboard;
