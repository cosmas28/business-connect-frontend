import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../../src/actions/resetPasswordActions";
import * as types from "../../src/actions/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("test reset password actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const userInput = {};
  const mockToken = "hereissometoken124";

  describe("test email confirmation action", () => {
    it("should create ADD_RESPONSE_MESSAGE action after successfully sent email", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            message: "Confirmation email sent. Check your email!",
            status_code: 200
          }
        });
      });

      const expectedActions = [
        {
          message: {
            message: "Confirmation email sent. Check your email!",
            status_code: 200
          },
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ mail: [] });

      return store.dispatch(actions.confirmEmail(userInput)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    });

    it("should create ADD_RESPONSE_MESSAGE action after successfully sent email", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            message: "Email does not exist!",
            status_code: 406
          }
        });
      });

      const expectedActions = [
        {
          message: {
            message: "Email does not exist!",
            status_code: 406
          },
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ mail: [] });

      return store.dispatch(actions.confirmEmail(userInput)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    });
  });

  describe("test reset password action", () => {
    it("should create RESET_PASSWORD_SUCCESS action after successfully sent email", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            message: "You have successfully reset your password. Please login!",
            status_code: 200
          }
        });
      });

      const expectedActions = [
        {
          message: {
            message: "You have successfully reset your password. Please login!",
            status_code: 200
          },
          type: types.RESET_PASSWORD_SUCCESS
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
            message: "Password does not match!",
            status_code: 406
          }
        });
      });

      const expectedActions = [
        {
          error: {
            message: "Password does not match!",
            status_code: 406
          },
          type: types.RESET_PASSWORD_FAIL
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
  });
});
