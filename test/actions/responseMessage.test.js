import { showToast } from "../../src/actions/showToast";
import * as actionTypes from "../../src/actions/actionTypes";

describe("test response message actions", () => {
  it("should return message object and action type", () => {
    expect(showToast("successful log in!", "success")).toEqual({
      message: "successful log in!",
      status: "success",
      type: actionTypes.ADD_RESPONSE_MESSAGE
    });
  });
});
