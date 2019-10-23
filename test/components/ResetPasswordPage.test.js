import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { ResetPasswordPage } from "../../src/components/resetPassword/ResetPasswordPage";

describe("tests for ResetPasswordPage component", () => {
  it("Render without crashing", () => {
    const mockMessage = "";

    const mockResetPassword = jest.fn();
    const tree = renderer.create(
      <MemoryRouter>
        <ResetPasswordPage
          response={mockMessage}
          match={{
            isExact: true,
            params: { token: "" },
            path: "",
            url: ""
          }}
          resetPassword={mockResetPassword}
        />
      </MemoryRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
