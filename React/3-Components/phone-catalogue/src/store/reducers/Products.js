import {
  LOADING_ERROR,
  LOADING_IN_PROGRESS,
  SET_PRODUCTS,
  SEARCH_PRODUCTS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ERROR:
      return {
        ...state,
      };
    case LOADING_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        products: action.products,
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default productReducer;
