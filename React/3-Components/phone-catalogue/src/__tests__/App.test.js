import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "../App";
import Phones from "../../phones.json";
import Product from "../components/Product";

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

const mockStore = configureMockStore([thunk]);

const store = (products, isLoading) => {
  const product = products || false;
  const isLoadin = isLoading || false;
  return mockStore({
    products: { products: product, isLoading: isLoadin },
    dispatch: jest.fn(),
  });
};

const wrapper = mount(
  <Provider store={store()}>
    <App />
  </Provider>
);

it("Should render without errors", () => {
  const component = findByTestAtrr(wrapper, "appComponent");
  expect(component.length).toBe(1);
});

it("Should render input component", () => {
  const component = findByTestAtrr(wrapper, "inputComponent");
  expect(component.length).toBe(1);
});

it("Should NOT render spinner component", () => {
  const component = findByTestAtrr(wrapper, "spinnerComponent");
  expect(component.length).toBe(0);
});

it("Should render Spinner component", () => {
  const wrapper = mount(
    <Provider store={store(null, true)}>
      <App />
    </Provider>
  );
  const component = findByTestAtrr(wrapper, "spinnerComponent");
  expect(component.length).toBe(1);
});

it("Should render all products", () => {
  const wrapper = mount(
    <Provider store={store(Phones, false)}>
      <App />
    </Provider>
  );
  const component = findByTestAtrr(wrapper, "appComponent");
  expect(component.find(Product).length).toBeGreaterThan(0);
});

it("Should render NO products", () => {
  const wrapper = mount(
    <Provider store={store(null, false)}>
      <App />
    </Provider>
  );
  const component = findByTestAtrr(wrapper, "appComponent");
  expect(component.find(Product).length).toBe(0);
});
