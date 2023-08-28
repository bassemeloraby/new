import { configureStore } from "@reduxjs/toolkit";

import drugReducer from "../features/drugReducer/drugSlice";

export const store = configureStore({
  reducer: {
    drugs: drugReducer
  }
});
