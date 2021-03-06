import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../../src/actions/reviewsActions";
import * as types from "../../src/actions/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("reviews tests", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const mockData = {};
  const mockAccessToken = "thisismybesttokenin2018";
  const mockBusinesssId = 1;

  describe("add reviews tests", () => {
    it("should create ADD_RESPONSE_MESSAGE action", done => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          response: {
            respond_message: "Business does not exist!",
            status_code: 404
          },
          status: 404
        });
      });
      const expectedAction = [
        {
          message: {
            respond_message: "Business does not exist!",
            status_code: 404
          },
          type: types.ADD_RESPONSE_MESSAGE
        }
      ];

      const store = mockStore({ message: [] });

      return store
        .dispatch(
          actions.addReviews(mockAccessToken, mockBusinesssId, mockData)
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
          done();
        });
    });
  });
});
