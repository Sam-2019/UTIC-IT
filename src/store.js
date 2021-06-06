import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./utils/redux/categorySlice";
import locationReducer from "./utils/redux/locationSlice";

export default configureStore({
  reducer: {
    category: categoryReducer,
    location: locationReducer
  }
});
