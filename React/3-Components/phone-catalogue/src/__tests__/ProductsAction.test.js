import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { getProducts } from "../store/actions/Products";
import Phones from "../../phones.json";
import {
  loadingError,
  loadingInProgress,
  setProducts,
} from "../store/actions/Products";
import * as actions from "../store/actions/actionTypes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Actions", () => {
  test("loadingInProgress", () => {
    const mockTodoId = true;
    const action = loadingInProgress(mockTodoId);
    expect(action.type).toBe("LOADING_IN_PROGRESS");
    expect(action.isLoading).toBe(mockTodoId);
  });

  test("loadingError", () => {
    const mockTodoId = true;
    const action = loadingError(mockTodoId);
    expect(action.type).toBe("LOADING_ERROR");
    expect(action.hasErrored).toBe(mockTodoId);
  });

  test("setProducts", () => {
    const mockTodoId = Phones;
    const action = setProducts(mockTodoId);
    expect(action.type).toBe("SET_PRODUCTS");
    expect(action.products).toBe(mockTodoId);
  });
});

describe("Test thunk action creator", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it("expected actions should be dispatched on successful request", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: Phones,
      });
    });

    const expectedActions = [
      { type: actions.LOADING_ERROR, hasErrored: false },
      { type: actions.LOADING_IN_PROGRESS, isLoading: true },
      { type: actions.SET_PRODUCTS, products: { ...Phones } },
    ];
    const store = mockStore({ products: Phones });
    return store.dispatch(getProducts()).then(() => {
      const newState = store.getState();
      expect(newState.products).toBe(Phones);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
