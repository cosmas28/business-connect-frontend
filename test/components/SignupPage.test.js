import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { SignUpPage } from "../../src/components/signup/SignupPage";

describe("tests for SignUpPage component", () => {
  it("Render without crashing", () => {
    const mockMessage = {};

    const mockDeleteMessage = jest.fn();
    const mockRegisterUsers = jest.fn();
    const tree = renderer.create(
      <MemoryRouter>
        <SignUpPage
          response={mockMessage}
          deleteMessage={mockDeleteMessage}
          registerUser={mockRegisterUsers}
        />
      </MemoryRouter>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
