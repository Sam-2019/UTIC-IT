import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import locationReducer from "./features/locationSlice";

export default configureStore({
  reducer: {
    category: categoryReducer,
    location: locationReducer
  }
});
