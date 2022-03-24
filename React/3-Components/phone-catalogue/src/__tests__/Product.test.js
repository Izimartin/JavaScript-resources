import React from "react";
import { mount } from "enzyme";
import Product from "../components/Product";
import Modal from "../components/Modal";

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

const setUp = (props) => {
  return mount(<Product {...props} />);
};

const props = {
  id: 0,
  name: "iPhone 7",
  manufacturer: "Apple",
  description:
    "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
  color: "black",
  price: 769,
  imageFileName: "IPhone_7.png",
  screen: "4,7 inch IPS",
  processor: "A10 Fusion",
  ram: 2,
};

it("Should render product component without errors", () => {
  const component = findByTestAtrr(setUp(), "productComponent");
  expect(component.length).toBe(1);
});

it("Should recibe p component whith name prop", () => {
  const Component = findByTestAtrr(setUp({ ...props }), "product-name");
  expect(Component.text()).toBe(props.name);
});

it("Should recie p component whith price prop", () => {
  const Component = findByTestAtrr(setUp({ ...props }), "product-price");
  expect(Component.text()).toBe(`${props.price} €`);
});

it("Should recive an img whith src of image prop", () => {
  const wrapper = setUp({ ...props });
  const Component = findByTestAtrr(wrapper, "product-image");
  expect(Component.length).toBe(1);
  expect(Component.prop.src).toBe(props.image);
});

it("Should render modal component", () => {
  const wrapper = setUp({ ...props });
  expect(wrapper.find(Modal).length).toBe(1);
});
