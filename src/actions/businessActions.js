import axios from "axios";
import * as actionTypes from "./actionTypes";
import history from "../helpers/history";
import { showToast } from "./showToast";

const apiUrl = process.env.REACT_APP_API_URL + "/businesses";

export const fetchBusinessesSuccess = businesses => ({
  businesses,
  type: actionTypes.FETCH_ALL_BUSINESSES_SUCCESS
});

export const fetchUserBusinessesSuccess = userBusinesses => ({
  type: actionTypes.FETCH_BUSINESSES_BY_USER_ID_SUCCESS,
  userBusinesses
});

export const fetchUserBusinessesFail = error => ({
  error,
  type: actionTypes.FETCH_BUSINESSES_BY_USER_ID_FAIL
});

export const fetchBusinessesByIdSuccess = business => ({
  business,
  type: actionTypes.FETCH_BUSINESSES_BY_ID_SUCCESS
});

export const fetchBusinessesByIdFail = error => ({
  error,
  type: actionTypes.FETCH_BUSINESSES_BY_ID_FAIL
});

export const doLogout = () => {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("loggedIn");
  sessionStorage.removeItem("userId");
  history.push("/login");

  return true;
};

export const searchBusinessesSuccess = businesses => ({
  businesses,
  type: actionTypes.SEARCH_BUSINESSES_SUCCESS
});

export const fetchBusinesses = accessToken => dispatch => {
  return axios
    .get(apiUrl, { headers: { Authorization: `Bearer ${accessToken}` } })
    .then(response => {
      dispatch(fetchBusinessesSuccess(response.data.business_list));
    })
    .catch(error => {
      if (error.response.status === 422 || error.response.status === 401) {
        dispatch(doLogout());
      }
      dispatch(showToast(error.response.data.respond_message, "failure"));
    });
};

const registerBusinessSuccess = business => ({
  business,
  type: actionTypes.REGISTER_BUSINESS_SUCCESS
});

export const registerBusiness = (accessToken, inputData) => dispatch => {
  return axios
    .post(apiUrl, inputData, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(response => {
      if (response.data.status_code === 201) {
        dispatch(registerBusinessSuccess(response.data.data));
        dispatch(showToast(response.data.response_message, "success"));
      } else {
        dispatch(showToast(response.data.response_message, "failure"));
      }
    })
    .catch(error => {
      if (error.response) {
        if (error.response.status === 422 || error.response.status === 401) {
          dispatch(doLogout());
        }
        dispatch(showToast(error.response.data.respond_message, "failure"));
      }
    });
};

const deleteBusinessSuccess = business => ({
  business,
  type: actionTypes.DELETE_BUSINESS_SUCCESS
});

export const deleteBusiness = (accessToken, businessId) => dispatch => {
  return axios
    .delete(apiUrl + "/" + businessId, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(response => {
      if (response.data.status_code === 204) {
        dispatch(deleteBusinessSuccess(response.data.data));
        dispatch(showToast(response.data.message, "success"));
      } else {
        dispatch(showToast(response.data.message, "failure"));
      }
    })
    .catch(error => {
      if (error.response) {
        if (error.response.status === 422 || error.response.status === 401) {
          dispatch(doLogout());
        }
        dispatch(showToast(error.response.data.message, "failure"));
      }
    });
};

const updateBusinessSuccess = business => ({
  business,
  type: actionTypes.UPDATE_BUSINESS_SUCCESS
});

export const updateBusiness = (
  accessToken,
  businessId,
  newData
) => dispatch => {
  return axios
    .put(apiUrl + "/" + businessId, newData, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(response => {
      if (response.data.status_code === 200) {
        dispatch(updateBusinessSuccess(response.data.data));
        dispatch(showToast(response.data.message, "success"));
      } else {
        dispatch(showToast(response.data.response_message, "failure"));
      }
    })
    .catch(error => {
      if (error.response) {
        if (error.response.status === 422 || error.response.status === 401) {
          dispatch(doLogout());
        }
        dispatch(showToast(error.response.data.response_message, "failure"));
      }
    });
};

export const searchBusinesses = (accessToken, searchQuery) => {
  return dispatch => {
    return axios
      .get(apiUrl + "/search?q=" + searchQuery, {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status_code === 404) {
            dispatch(showToast(response.data));
          } else {
            dispatch(searchBusinessesSuccess(response.data));
          }
        } else {
          dispatch(showToast(response.data));
        }
      })
      .catch(error => {
        if (error.response.status === 422 || error.response.status === 401) {
          dispatch(doLogout());
        }
        dispatch(showToast(error.response.data));
      });
  };
};

export const fetchUserBusinessesById = (accessToken, userId) => {
  return dispatch => {
    return axios
      .get(apiUrl + "/user/" + userId, {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(response => {
        if (response.status === 200) {
          dispatch(fetchUserBusinessesSuccess(response.data.business_list));
        } else {
          dispatch(fetchUserBusinessesFail(response));
          history.push("/register_business");
        }
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 422 || error.response.status === 401) {
            dispatch(doLogout());
          }
          dispatch(fetchUserBusinessesFail(error.response.data));
        }
      });
  };
};

export const fetchBusinessesById = (accessToken, businessId) => {
  return dispatch => {
    return axios
      .get(apiUrl + "/" + businessId, {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status_code === 404) {
            history.push("/404");
          }
          dispatch(fetchBusinessesByIdSuccess(response.data));
        } else {
          dispatch(fetchBusinessesByIdFail(response.data.response_message));
        }
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 422 || error.response.status === 401) {
            dispatch(doLogout());
          }
          dispatch(fetchBusinessesByIdFail(error.response.data));
        }
      });
  };
};
