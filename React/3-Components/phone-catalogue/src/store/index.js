import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
// reducer
import productsReducer from "./reducers/Products";

const rootReducer = combineReducers({
  products: productsReducer,
});

const initStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default initStore;
