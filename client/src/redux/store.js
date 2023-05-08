import { combineReducers, configureStore } from "@reduxjs/toolkit";

import products from "./slices/products";

const reducer = combineReducers({
  products,
});

// store set-up
export default configureStore({
  reducer,
});
