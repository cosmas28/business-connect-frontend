import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../../src/actions/resetPasswordActions";
import * as types from "../../src/actions/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Reset password actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const userInput = {};
  const mockToken = "hereissometoken124";

  describe("Email confirmation", () => {
    it("should dispatch showToast with success status", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            response_message: "Confirmation email sent. Check your email!",
            status_code: 200
          }
        });
      });

      const expectedActions = [
        {
          message: "Confirmation email sent. Check your email!",
          status: "success",
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ toast: {} });

      return store.dispatch(actions.confirmEmail(userInput)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    });

    it("should dispatch showToast with failure status", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            response_message: "Email does not exist!",
            status_code: 406
          }
        });
      });

      const expectedActions = [
        {
          message: "Email does not exist!",
          status: "failure",
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ toast: {} });

      return store.dispatch(actions.confirmEmail(userInput)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    });
  });

  describe("Reset password", () => {
    it("should dispatch showToast with success status", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            response_message:
              "You have successfully reset your password. Please login!",
            status_code: 200
          }
        });
      });

      const expectedActions = [
        {
          message: "You have successfully reset your password. Please login!",
          status: "success",
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ resetPassword: [] });

      return store
        .dispatch(actions.resetPassword(userInput, mockToken))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    it("should create RESET_PASSWORD_FAIL action after successfully sent email", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            response_message: "Password does not match!",
            status_code: 406
          }
        });
      });

      const expectedActions = [
        {
          message: "Password does not match!",
          status: "failure",
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ toast: {} });

      return store
        .dispatch(actions.resetPassword(userInput, mockToken))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });
});
