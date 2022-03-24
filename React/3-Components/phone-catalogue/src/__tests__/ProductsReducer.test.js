import productReducer from "../store/reducers/Products";
import * as actions from "../store/actions/actionTypes";
import Phones from "../../phones.json";

const initialState = {
  isLoading: false,
  products: [],
};

describe("initial state reducer", () => {
  it("should return the initial state", () => {
    expect(productReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle LOADING_ERROR", () => {
    const startAction = {
      type: actions.LOADING_ERROR,
    };
    expect(productReducer(undefined, startAction)).toEqual(initialState);
  });

  it("should handle LOADING_IN_PROGRESS", () => {
    const successAction = {
      type: actions.LOADING_IN_PROGRESS,
      isLoading: true,
    };
    expect(productReducer({}, successAction)).toEqual({ isLoading: true });
  });

  it("should handle SET_PRODUCTS", () => {
    const successAction = {
      type: actions.SET_PRODUCTS,
      products: Phones,
    };
    expect(productReducer({}, successAction)).toEqual({
      isLoading: false,
      products: Phones,
    });
  });
});
