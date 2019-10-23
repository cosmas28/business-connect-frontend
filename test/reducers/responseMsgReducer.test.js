import { responseMessageReducer } from "../../src/reducers/responseMsgReducers";
import * as types from "../../src/actions/actionTypes";

describe("Resposnse message", () => {
  const toastInitialState = {
    message: "",
    status: ""
  };

  it("should return the initial state", () => {
    expect(responseMessageReducer(toastInitialState, {})).toEqual(
      toastInitialState
    );
  });

  it("should handle ADD_RESPONSE_MESSAGE  action", () => {
    expect(
      responseMessageReducer(toastInitialState, {
        message: "Email sent. Confirm you are the owner of this email address!",
        status: "success",
        type: types.ADD_RESPONSE_MESSAGE
      })
    ).toEqual({
      message: "Email sent. Confirm you are the owner of this email address!",
      status: "success"
    });
  });
});
