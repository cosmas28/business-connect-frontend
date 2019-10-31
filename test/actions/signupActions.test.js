import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../../src/actions/signupActions";
import * as types from "../../src/actions/actionTypes";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Sign up actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const signUpInput = {};

  it("should dispatch showToast with success status", done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: {
          message: "You have successfully created an account!",
          status_code: 201
        }
      });
    });

    const expectedActions = [
      {
        message: "You have successfully created an account!",
        status: "success",
        type: types.ADD_RESPONSE_MESSAGE
      }
    ];

    const store = mockStore({ user: [] });

    return store.dispatch(actions.registerUser(signUpInput)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it("should dispatch showToast with failure status", done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: {
          message: "This user already exists!",
          status_code: 406
        },
        status: 406
      });
    });

    const expectedActions = [
      {
        message: "This user already exists!",
        status: "failure",
        type: types.ADD_RESPONSE_MESSAGE
      }
    ];

    const store = mockStore({ error: [] });

    return store.dispatch(actions.registerUser(signUpInput)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
