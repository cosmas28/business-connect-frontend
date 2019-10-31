import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../../src/actions/businessActions";
import * as types from "../../src/actions/actionTypes";
import { businesses } from "../../fixtures/businesses";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Business Actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const dataInput = {};
  const mockFetchedBusinesses = {};
  const mockAccessToken = "thisismybesttokenin2018";
  const mockBusinesssId = 1;

  describe("The registerBusiness thunk", () => {
    it("should dispatch showToast and registerBusinessSuccess actions", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            response_message: "Business is successfully registered!",
            status_code: 201,
            data: businesses[0]
          }
        });
      });
      const expectedAction = [
        {
          business: businesses[0],
          type: types.REGISTER_BUSINESS_SUCCESS
        },
        {
          message: "Business is successfully registered!",
          status: "success",
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ registerBusiness: [] });

      return store
        .dispatch(actions.registerBusiness(mockAccessToken, dataInput))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
          done();
        });
    });

    it("should dispatch showToast with failure status", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            response_message: "The business name already exists!",
            status_code: 406
          }
        });
      });
      const expectedAction = [
        {
          message: "The business name already exists!",
          status: "failure",
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ registerBusiness: [] });

      return store
        .dispatch(actions.registerBusiness(mockAccessToken, dataInput))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
          done();
        });
    });
  });

  describe("The fetchBusinesses thunk", () => {
    it("should dispatch fetchBusinessesSuccess on success", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: mockFetchedBusinesses,
          status: 200
        });
      });

      const expectedAction = [
        {
          businesses: mockFetchedBusinesses,
          type: types.FETCH_ALL_BUSINESSES_SUCCESS
        }
      ];

      const store = mockStore({ businesses: [] });

      return store
        .dispatch(actions.fetchBusinesses(mockAccessToken))
        .then(() => {
          expect(store.getActions()[0].type).toEqual(expectedAction[0].type);
          done();
        });
    });

    it("should dispatch showToast on failure", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.reject({
          response: {
            data: {
              respond_message: "There is an internal server error!",
              status_code: 500
            }
          }
        });
      });
      const expectedAction = [
        {
          message: "There is an internal server error!",
          status: "failure",
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ toast: {} });

      return store
        .dispatch(actions.fetchBusinesses(mockAccessToken))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
          done();
        });
    });
  });

  describe("The searchBusinesses thunk", () => {
    const mockSearchQuery = "tech";
    it("should create SEARCH_BUSINESSES_SUCCESS when businesses are found", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: mockFetchedBusinesses,
          status: 200
        });
      });

      const expectedAction = [
        {
          businesses: mockFetchedBusinesses,
          type: types.SEARCH_BUSINESSES_SUCCESS
        }
      ];

      const store = mockStore({ searchResults: [] });

      return store
        .dispatch(actions.searchBusinesses(mockAccessToken, mockSearchQuery))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
          done();
        });
    });

    it("should create ADD_RESPONSE_MESSAGE when no business found", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            respond_message: "Business not found!",
            status_code: 404
          },
          status: 200
        });
      });
      const expectedAction = [
        {
          message: {
            respond_message: "Business not found!",
            status_code: 404
          },
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ messages: [] });

      return store
        .dispatch(actions.searchBusinesses(mockAccessToken, mockSearchQuery))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
          done();
        });
    });

    it("should create ADD_RESPONSE_MESSAGE when there", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            respond_message: "Bad Authorization header",
            status_code: 500
          },
          status: 400
        });
      });
      const expectedAction = [
        {
          message: {
            respond_message: "Bad Authorization header",
            status_code: 500
          },
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ messages: [] });

      return store
        .dispatch(actions.searchBusinesses(mockSearchQuery))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
          done();
        });
    });
  });

  describe("fetch business by ID tests", () => {
    it("should create FETCH_BUSINESSES_BY_ID_SUCCESS action after successfuly fetched a busiess", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: mockFetchedBusinesses,
          status: 200
        });
      });

      const expectedAction = [
        {
          business: mockFetchedBusinesses,
          type: types.FETCH_BUSINESSES_BY_ID_SUCCESS
        }
      ];

      const store = mockStore({ business: [] });

      return store
        .dispatch(actions.fetchBusinessesById(mockAccessToken, mockBusinesssId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
          done();
        });
    });

    it("should create FETCH_BUSINESSES_BY_ID_FAIL action after failing to fetch a business", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            respond_message: "Business is not registered!",
            status_code: 404
          }
        });
      });

      const expectedAction = [
        {
          error: {
            respond_message: "Business is not registered!",
            status_code: 404
          },
          type: types.FETCH_BUSINESSES_BY_ID_FAIL
        }
      ];

      const store = mockStore({ business: [] });

      return store
        .dispatch(actions.fetchBusinessesById(mockAccessToken, mockBusinesssId))
        .then(() => {
          expect(store.getActions()[0].type).toEqual(expectedAction[0].type);
          done();
        });
    });
  });

  describe("fetch business by user ID tests", () => {
    const mockUserId = 1;

    it("should create FETCH_BUSINESSES_BY_USER_ID_SUCCESS action after successfuly fetched all busiesses", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: mockFetchedBusinesses,
          status: 200
        });
      });

      const expectedAction = [
        {
          type: types.FETCH_BUSINESSES_BY_USER_ID_SUCCESS,
          userBusinesses: mockFetchedBusinesses
        }
      ];

      const store = mockStore({ userBusinesses: [] });

      return store
        .dispatch(actions.fetchUserBusinessesById(mockAccessToken, mockUserId))
        .then(() => {
          expect(store.getActions()[0].type).toEqual(expectedAction[0].type);
          done();
        });
    });

    it("should create FETCH_BUSINESSES_BY_USER_ID_FAIL action after failing to fetch a business", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            respond_message: "You have not registered a business!",
            status_code: 204
          }
        });
      });

      const expectedAction = [
        {
          error: {
            respond_message: "You have not registered a business!",
            status_code: 204
          },
          type: types.FETCH_BUSINESSES_BY_USER_ID_FAIL
        }
      ];

      const store = mockStore({ userBusinesses: [] });

      return store
        .dispatch(actions.fetchUserBusinessesById(mockAccessToken, mockUserId))
        .then(() => {
          expect(store.getActions()[0].type).toEqual(expectedAction[0].type);
          done();
        });
    });
  });

  describe("The deleteBusiness thunk", () => {
    it("should dispatch deleteBusinessSuccess and showToast", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            message: "Business is successfully deleted!",
            status_code: 204,
            data: businesses[0]
          }
        });
      });
      const expectedAction = [
        {
          business: businesses[0],
          type: types.DELETE_BUSINESS_SUCCESS
        },
        {
          message: "Business is successfully deleted!",
          status: "success",
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ toast: [] });

      return store
        .dispatch(actions.deleteBusiness(mockAccessToken, mockBusinesssId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
          done();
        });
    });
    it("should dispatch showToast on failure", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            message: "You have no permission to delete this business!",
            status_code: 401
          }
        });
      });
      const expectedAction = [
        {
          message: "You have no permission to delete this business!",
          status: "failure",
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ messages: [] });

      return store
        .dispatch(actions.deleteBusiness(mockAccessToken, mockBusinesssId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
          done();
        });
    });
  });

  describe("The updateBusiness thunk", () => {
    it("should dispatch updateBusinessSuccess and showToast", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            message: "Business successfuly updated!",
            status_code: 200,
            data: businesses[0]
          }
        });
      });
      const expectedAction = [
        {
          business: businesses[0],
          type: types.UPDATE_BUSINESS_SUCCESS
        },
        {
          message: "Business successfuly updated!",
          status: "success",
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ messages: [] });

      return store
        .dispatch(
          actions.updateBusiness(mockAccessToken, mockBusinesssId, dataInput)
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
          done();
        });
    });
    it("should dispatch showToast on failure", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            response_message: "The business does not exists!",
            status_code: 406
          }
        });
      });
      const expectedAction = [
        {
          message: "The business does not exists!",
          status: "failure",
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ toast: [] });

      return store
        .dispatch(
          actions.updateBusiness(mockAccessToken, mockBusinesssId, dataInput)
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
          done();
        });
    });
  });
});
