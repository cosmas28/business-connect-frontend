import React from "react";
import { MemoryRouter } from "react-router-dom";
import AddReviewForm from "./addReviewForm";

describe("Add review form tests", () => {
  let mountedReviewForm = null,
    props = null;
  const component = () => {
      if (!mountedReviewForm) {
        mountedReviewForm = mount(
          <MemoryRouter>
            <AddReviewForm {...props} />
          </MemoryRouter>
        );
      }

      return mountedReviewForm;
    },
    mockaddReviewHandler = jest.fn(),
    mockhandleInputChange = jest.fn();

  beforeEach(() => {
    props = {
      addReviewHandler: mockaddReviewHandler,
      handleInputChange: mockhandleInputChange
    };
    mountedReviewForm = null;
  });

  it("renders without crashing", () => {
    expect(component()).toHaveLength(1);
  });

  it("contains the form", () => {
    expect(component().find("textarea")).toHaveLength(1);
    expect(component().find("button")).toHaveLength(1);
  });

  it("should call `handleInputChange` when input field is changed", () => {
    component()
      .find("textarea")
      .simulate("change");
    expect(props.handleInputChange).toBeCalled();
  });

  it("should call `ddReviewHandler` when submit button is clicked", () => {
    component()
      .find("form")
      .simulate("submit");
    expect(props.addReviewHandler).toBeCalled();
  });
});
