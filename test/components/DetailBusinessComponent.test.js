import React from "react";
import { MemoryRouter } from "react-router-dom";
import DetailBusinessComponent from "../../src/components/Dashboard/DetailBusinessComponent";

describe("One business view test suite", () => {
  let mountedDetailBusinessComponent = null;
  let props = null;
  const component = () => {
    if (!mountedDetailBusinessComponent) {
      mountedDetailBusinessComponent = mount(
        <MemoryRouter>
          <DetailBusinessComponent {...props} />
        </MemoryRouter>
      );
    }

    return mountedDetailBusinessComponent;
  };

  beforeEach(() => {
    props = {
      category: null,
      location: null,
      name: null,
      summary: null
    };
    mountedDetailBusinessComponent = null;
  });

  it("renders without crashing", () => {
    expect(component()).toHaveLength(1);
  });
});
