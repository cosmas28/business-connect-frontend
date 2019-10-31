import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { App } from "../../src/components/App";

const mockStore = configureStore([]);

describe("App", () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = mockStore({
      toast: {
        message: "",
        status: ""
      }
    });

    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
