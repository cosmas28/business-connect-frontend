import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../../src/actions/loginActions";
import * as types from "../../src/actions/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("login action tests", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const loginInput = {};

  it("dispatch showToast with success status", done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: {
          response_message: "You have successfully login!",
          status_code: 200
        }
      });
    });

    const expectedAction = [
      {
        message: "You have successfully login!",
        status: "success",
        type: types.ADD_RESPONSE_MESSAGE
      }
    ];

    const store = mockStore({ login: [] });

    return store.dispatch(actions.doLogin(loginInput)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });

  it("dispatch showToast with failure status", done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: {
          response_message: "Invalid email or password. Please try again!",
          status_code: 401
        }
      });
    });

    const expectedAction = [
      {
        message: "Invalid email or password. Please try again!",
        status: "failure",
        type: types.ADD_RESPONSE_MESSAGE
      }
    ];

    const store = mockStore({ login: [] });

    return store.dispatch(actions.doLogin(loginInput)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      done();
    });
  });
});
