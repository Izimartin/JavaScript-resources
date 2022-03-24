import axios from "axios";
import * as actionType from "./actionTypes";

export const loadingError = (bool) => ({
  type: actionType.LOADING_ERROR,
  hasErrored: bool,
});

export const loadingInProgress = (bool) => ({
  type: actionType.LOADING_IN_PROGRESS,
  isLoading: bool,
});

export const setProducts = (data) => ({
  type: actionType.SET_PRODUCTS,
  products: data,
});

export const searchProduct = (data) => {
  return async (dispatch) => {
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));
    const result = await axios.get(`http://localhost:3001/search/${data}`);
    dispatch(setProducts({ ...result.data }));
  };
};

export function getProducts(group) {
  return async (dispatch) => {
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));
    const result = await axios.get(`http://localhost:3001/phones`);
    dispatch(setProducts({ ...result.data }));
  };
}
